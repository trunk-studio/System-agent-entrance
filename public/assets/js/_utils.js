var fbUser = {
	info: function (user) {
		var displayName = user.displayName;
		var email = user.email;
		var emailVerified = user.emailVerified;
		var photoURL = user.photoURL;
		var isAnonymous = user.isAnonymous;
		var uid = user.uid;
		var refreshToken = user.refreshToken;
		var providerData = user.providerData;
		// [START_EXCLUDE silent]
		var userInfo = JSON.stringify({
			displayName: displayName,
			email: email,
			emailVerified: emailVerified,
			photoURL: photoURL,
			isAnonymous: isAnonymous,
			uid: uid,
			refreshToken: refreshToken,
			providerData: providerData
		}, null, '  ');
		// console.log("userInfo=>", userInfo);
    return userInfo;
	},
  role: function (user) {
    let role = "";
    firebase.database().ref('roles/' + user.email.replace(".", "&*&")).on('value', function (snapshot) {
      role = snapshot.val();
      // console.log('role=>', role);
      if (!role) role = "user";
    });
    return role;
  },
	set: function (user, isRedirect) {
    this.info(user);

		if (!user.emailVerified) {
			// console.log('email not Verified');
		}

		// check this user's role.
		firebase.database().ref('roles/' + user.email.replace(".", "&*&")).on('value', function (snapshot) {
			var role = snapshot.val();
			// console.log('role=>', role);
			if (typeof role === 'undefined' || role === null ) role = "user";
      user.role = role;
			// console.log('user.role=>', user.role);

  		// set user data to db.
  		firebase.database().ref('users/' + user.uid).set({
  			username: user.displayName || user.email,
  			email: user.email,
  			role: user.role,
  		}, function() {
        if (isRedirect) fbUser.redirect(user);
        // console.log("set user done.");
      });
		});
	},
	redirect: function (user) {
    this.info(user);

		// get link by user from db.
		firebase.database().ref('users/' + user.uid).on('value', function (snapshot) {
			var user = snapshot.val();
			// console.log('role=>', user.role);
			firebase.database().ref('hosting/url/' + user.role).on('value', function (snapshot) {
				var url = snapshot.val();
				// console.log('url=>', url);
				window.location.assign(url);
			});
		});
	},

};
