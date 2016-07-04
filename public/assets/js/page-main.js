var logoutTimmer = 0;

jQuery(document).ready(function () {
	setBg();
	onLoginStateChange();
	handleFormEvents();

	$('#signout').click(function (event) {
		/* Act on the event */
		firebase.auth().signOut();
	}); // end click
}); // end ready

window.onload = function () {
	if (firebase) {
		logoutTimmer = setTimeout(function () {
			firebase.auth().signOut();
			window.alert("timeout so sign out");
		}, 600000);
	}
}; // end onload

window.onunload = function () {
	clearTimeout(logoutTimmer);
}; // end onunload

function setBg() {
	$.backstretch([
        "../assets/img/backgrounds/2.jpg",
        "../assets/img/backgrounds/3.jpg",
        "../assets/img/backgrounds/1.jpg"
    ], {
		duration: 3000,
		fade: 750
	});
} // end setBg

function handleFormEvents() {
	/*
	    Form validation
	*/
	$('.post-form textarea').on('focus', function () {
		$(this).removeClass('input-error');
	});
	$('.post-form').on('submit', function (e) {
		$(this).find('textarea').each(function () {
			if ($(this).val() == "") {
				e.preventDefault();
				$(this).addClass('input-error');
			} else {
				$(this).removeClass('input-error');
			}
		});
    if(!$(this).hasClass('input-error')) {
  		var title = $(this).find('input[name="form-title"]').val();
  		var post = $(this).find('textarea[name="form-post"]').val();
      var username = firebase.auth().currentUser.displayName || firebase.auth().currentUser.email.split("@")[0];
  		console.log("username =>", username);
      console.log("post =>", post);
  		e.preventDefault();
  		if (confirm("Are you sure to submit this post to us?")) {
  			writeNewPost(
          firebase.auth().currentUser.uid,
          username,
          title,
          post);
  		}
    }
	});
} // end handleFormEvents

function writeNewPost(uid, username, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
		agent: navigator.userAgent,
    starCount: 0
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
} // end writeNewPost

function onLoginStateChange() {
	// Listening for auth state changes.
	firebase.auth().onAuthStateChanged(function (user) {
    // User is signed in.
		if (user) {
      // get file download link from db
      firebase.database().ref('hosting/download').on('value', function (snapshot) {
        var links = snapshot.val();
        console.log('value=>', links);
        $('.download-mac').attr('href', links.mac);
        $('.download-windows').attr('href', links.win);
      });

		} else {
			// User is signed out.
			window.alert("Signedout");
			console.log('Signed out');
			window.location.assign("../");
			// [END_EXCLUDE]
		}
		// [START_EXCLUDE silent]
		// document.getElementById('quickstart-sign-in').disabled = false;
		// [END_EXCLUDE]
	});
	// [END authstatelistener]
} // end onLoginStateChange
