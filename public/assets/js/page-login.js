jQuery(document).ready(function () {

	// Fullscreen background
	$.backstretch([
      "assets/img/backgrounds/2.jpg",
          // "assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg", "assets/img/backgrounds/1.jpg"
  ], {
		duration: 3000,
		fade: 750
	});

	// Form validation
	$('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
		$(this).removeClass('input-error');
	});

	$('.login-form').on('submit', function (e) {
		$(this).find('input[type="text"], input[type="password"], textarea').each(function () {
			if ($(this).val() == "") {
				e.preventDefault();
				$(this).addClass('input-error');
			} else {
				$(this).removeClass('input-error');
			}
		});
		var usr = $(this).find('input[type="text"]').val();
		var pwd = $(this).find('input[type="password"]').val();
		console.log("usr =>", usr);
		console.log("pwd =>", pwd);
		e.preventDefault();
		validation(usr, pwd);
	}); // end submit

	$('#loginWithGoogle').click(function (e) {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	});

	onLoginStateChange();
}); // end ready

function validation(email, password) {
	console.log("!!!!!!!!!!");
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		if (error.code === 'auth/wrong-password') {
			alert('Wrong email address or password.');
		} else {
			alert(error.message);
		}
		console.log(error.message);
	});
} // end validation

function onLoginStateChange() {
	// Listening for auth state changes.
	firebase.auth().onAuthStateChanged(function (user) {
		// User is signed in.
		if (user) {
			// add or update user to db.
			fbUser.set(user, true);
		} else {
			// User is signed out.
			console.log('Signed out');
		}
	});
} // end onLoginStateChange
