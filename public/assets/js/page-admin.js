/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Shortcuts to DOM Elements.
var messageForm = document.getElementById('message-form');
var messageInput = document.getElementById('new-post-message');
var titleInput = document.getElementById('new-post-title');
var signInButton = document.getElementById('sign-in-button');
var splashPage = document.getElementById('page-splash');
var addPost = document.getElementById('add-post');
var addButton = document.getElementById('add');
var recentPostsSection = document.getElementById('recent-posts-list');
var userPostsSection = document.getElementById('user-posts-list');
var topUserPostsSection = document.getElementById('top-user-posts-list');
var recentMenuButton = document.getElementById('menu-recent');
var myPostsMenuButton = document.getElementById('menu-my-posts');
var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
var unsolveIssuesMenuButton = document.getElementById('menu-issue-list');
var solvedIssuesMenuButton = document.getElementById('menu-issue-solved');
var logoutMenuButton = document.getElementById('menu-logout');
var solvedIssuesSection = document.getElementById('solved-issue-list');
var unsolveIssuesSection = document.getElementById('unsolve-issue-list');

/**
 * Saves a new post to the Firebase DB.
 */
// [START write_fan_out]
function writeNewPost(uid, username, title, body) {
	// A post entry.
	var postData = {
		author: username,
		uid: uid,
		body: body,
		title: title,
		starCount: 0
	};

	// Get a key for a new Post.
	var newPostKey = firebase.database().ref().child('posts').push().key;

	// Write the new post's data simultaneously in the posts list and the user's post list.
	var updates = {};
	updates['/posts/' + newPostKey] = postData;
	updates['/user-posts/' + uid + '/' + newPostKey] = postData;

	return firebase.database().ref().update(updates);
}
// [END write_fan_out]

/**
 * Star/unstar post.
 */
// [START post_stars_transaction]
function toggleStar(postRef, uid) {
	postRef.transaction(function (post) {
		if (post) {
			if (post.stars && post.stars[uid]) {
				post.starCount--;
				post.stars[uid] = null;
			} else {
				post.starCount++;
				if (!post.stars) {
					post.stars = {};
				}
				post.stars[uid] = true;
			}
		}
		return post;
	});
}
// [END post_stars_transaction]

/**
 * Creates a post element.
 */
function createPostElement(postId, title, text, author, authorId) {
	var uid = firebase.auth().currentUser.uid;

	var html =
		'<div class="post mdl-cell mdl-cell--12-col ' +
		'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
		'<div class="mdl-card mdl-shadow--2dp">' +
		'<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
		'<h4 class="mdl-card__title-text"></h4>' +
		'</div>' +
		'<div class="header">' +
		'<div>' +
		'<div class="avatar"></div>' +
		'<div class="username mdl-color-text--black"></div>' +
		'</div>' +
		'</div>' +
		'<span class="star">' +
		'<div class="not-starred material-icons">check_box_outline_blank</div>' +
		'<div class="starred material-icons">check_box</div>' +
		'<div class="star-count">0</div>' +
		'</span>' +
		'<div class="text"></div>' +
		'<div class="comments-container"></div>' +
		'<form class="add-comment" action="#">' +
		'<div class="mdl-textfield mdl-js-textfield">' +
		'<input class="mdl-textfield__input new-comment" type="text">' +
		'<label class="mdl-textfield__label">Comment...</label>' +
		'</div>' +
		'</form>' +
		'</div>' +
		'</div>';

	// Create the DOM element from the HTML.
	var div = document.createElement('div');
	div.innerHTML = html;
	var postElement = div.firstChild;
	componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);

	var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
	var commentInput = postElement.getElementsByClassName('new-comment')[0];
	var star = postElement.getElementsByClassName('starred')[0];
	var unStar = postElement.getElementsByClassName('not-starred')[0];

	// Set values.
	postElement.getElementsByClassName('text')[0].innerText = text;
	postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
	postElement.getElementsByClassName('username')[0].innerText = author;
	div.getElementsByClassName('post')[0].id = postId;

	// Listen for comments.
	// [START child_event_listener_recycler]
	var commentsRef = firebase.database().ref('post-comments/' + postId);
	commentsRef.on('child_added', function (data) {
		addCommentElement(postElement, data.key, data.val().text, data.val().author);
	});

	commentsRef.on('child_changed', function (data) {
		setCommentValues(postElement, data.key, data.val().text, data.val().author);
	});

	commentsRef.on('child_removed', function (data) {
		deleteComment(postElement, data.key);
	});
	// [END child_event_listener_recycler]

	// Listen for likes counts.
	// [START post_value_event_listener]
	firebase.database().ref('posts/' + postId + '/starCount').on('value', function (snapshot) {
		updateStarCount(postElement, snapshot.val());
	});
	// [END post_value_event_listener]

	// Listen for the starred status.
	firebase.database().ref('posts/' + postId + '/stars/' + uid).on('value', function (snapshot) {
		updateStarredByCurrentUser(postElement, snapshot.val());
	});

	// Create new comment.
	addCommentForm.onsubmit = function (e) {
		e.preventDefault();
		createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
		commentInput.value = '';
		commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
	};

	// Bind starring action.
	var onStarClicked = function () {
		var globalPostRef = firebase.database().ref('/posts/' + postId);
		var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
		toggleStar(globalPostRef, uid);
		toggleStar(userPostRef, uid);
	};
	unStar.onclick = onStarClicked;
	star.onclick = onStarClicked;

	return postElement;
}

/**
 * Writes a new comment for the given post.
 */
function createNewComment(postId, username, uid, text) {
	firebase.database().ref('post-comments/' + postId).push({
		text: text,
		author: username,
		uid: uid
	});
}

/**
 * Updates the starred status of the post.
 */
function updateStarredByCurrentUser(postElement, starred) {
	if (starred) {
		postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
		postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
	} else {
		postElement.getElementsByClassName('starred')[0].style.display = 'none';
		postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
	}
}

/**
 * Updates the number of stars displayed for a post.
 */
function updateStarCount(postElement, nbStart) {
	postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
}

/**
 * Creates a comment element and adds it to the given postElement.
 */
function addCommentElement(postElement, id, text, author) {
	var comment = document.createElement('div');
	comment.classList.add('comment-' + id);
	comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
	comment.getElementsByClassName('comment')[0].innerText = text;
	comment.getElementsByClassName('username')[0].innerText = author;

	var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
	commentsContainer.appendChild(comment);
}

/**
 * Sets the comment's values in the given postElement.
 */
function setCommentValues(postElement, id, text, author) {
	var comment = postElement.getElementsByClassName('comment-' + id)[0];
	comment.getElementsByClassName('comment')[0].innerText = text;
	comment.getElementsByClassName('fp-username')[0].innerText = author;
}

/**
 * Deletes the comment of the given ID in the given postElement.
 */
function deleteComment(postElement, id) {
	var comment = postElement.getElementsByClassName('comment-' + id)[0];
	comment.parentElement.removeChild(comment);
}

/**
 * Starts listening for new posts and populates posts lists.
 */
function startDatabaseQueries() {
	// [START my_top_posts_query]
	var myUserId = firebase.auth().currentUser.uid;
	// var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
	var solvedIssuesRef = firebase.database().ref('posts/').orderByChild('starCount').startAt(1);
	var unsolveIssuesRef = firebase.database().ref('posts/').orderByChild('starCount').endAt(0);
	// [END my_top_posts_query]
	// [START recent_posts_query]
	var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
	// [END recent_posts_query]
	var userPostsRef = firebase.database().ref('user-posts/' + myUserId);

	var fetchPosts = function (postsRef, sectionElement) {
		var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
		postsRef.on('child_added', function (data) {
			containerElement.insertBefore(
				createPostElement(data.key, data.val().title, data.val().body, data.val().author, data.val().uid),
				containerElement.firstChild);
		});
		postsRef.on('child_changed', function (data) {
			console.log("data=>", data.val());
			// console.log("data.starCount=>", data.val().starCount);
			// var count = document.getElementById(data.key).getElementsByClassName('star-count')[0].outerText;
			// console.log("star-count=>", count);
			// if (data.val().starCount === count) {
			// console.log("data.key=>", data.key);
			console.log("containerElement.key=>", sectionElement);
			console.log("containerElement.key=>", sectionElement.getElementById(data.key));
			sectionElement.getElementById(data.key).remove();
			// }
		});
	};

	fetchPosts(solvedIssuesRef, solvedIssuesSection);
	fetchPosts(unsolveIssuesRef, unsolveIssuesSection);
	// fetchPosts(topUserPostsRef, topUserPostsSection);
	fetchPosts(recentPostsRef, recentPostsSection);
	// fetchPosts(userPostsRef, userPostsSection);
}

/**
 * Writes the user's data to the database.
 */
// [START basic_write]
function writeUserData(userId, name, email) {
	firebase.database().ref('users/' + userId).set({
		username: name,
		email: email
	});
}
// [END basic_write]

// Bindings on load.
window.addEventListener('load', function () {
	// Bind Sign in button.
	signInButton.addEventListener('click', function () {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	});

	// Listen for auth state changes
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			splashPage.style.display = 'none';
			// writeUserData(user.uid, user.displayName, user.email);
			fbUser.set(user);
			startDatabaseQueries();
		} else {
			splashPage.style.display = '';
		}
	});

	// Saves message on form submit.
	messageForm.onsubmit = function (e) {
		e.preventDefault();
		if (messageInput.value && titleInput.value) {
			var postText = messageInput.value;
			messageInput.value = '';
			// [START single_value_read]
			var userId = firebase.auth().currentUser.uid;
			firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
				var username = snapshot.val().username;
				// [START_EXCLUDE]
				writeNewPost(firebase.auth().currentUser.uid, firebase.auth().currentUser.displayName,
					titleInput.value, postText).then(function () {
					myPostsMenuButton.click();
				});
				// [END_EXCLUDE]
			});
			// [END single_value_read]
		}
	};

	// Bind menu buttons.
	logoutMenuButton.onclick = function () {
		firebase.auth().signOut();
		window.location.replace('../');
	};
	recentMenuButton.onclick = function () {
		recentPostsSection.style.display = 'block';
		userPostsSection.style.display = 'none';
		topUserPostsSection.style.display = 'none';
		addPost.style.display = 'none';
		unsolveIssuesSection.style.display = 'none';
		solvedIssuesSection.style.display = 'none';
		recentMenuButton.classList.add('is-active');
		// myPostsMenuButton.classList.remove('is-active');
		// myTopPostsMenuButton.classList.remove('is-active');
		unsolveIssuesMenuButton.classList.remove('is-active');
		solvedIssuesMenuButton.classList.remove('is-active');
	};
	// myPostsMenuButton.onclick = function() {
	//   recentPostsSection.style.display = 'none';
	//   userPostsSection.style.display = 'block';
	//   topUserPostsSection.style.display = 'none';
	//   addPost.style.display = 'none';
	//   unsolveIssuesSection.style.display = 'none';
	//   solvedIssuesSection.style.display = 'none';
	//   recentMenuButton.classList.remove('is-active');
	//   myPostsMenuButton.classList.add('is-active');
	//   myTopPostsMenuButton.classList.remove('is-active');
	//   unsolveIssuesMenuButton.classList.remove('is-active');
	//   solvedIssuesMenuButton.classList.add('is-active');
	// };
	// myTopPostsMenuButton.onclick = function() {
	//   recentPostsSection.style.display = 'none';
	//   userPostsSection.style.display = 'none';
	//   topUserPostsSection.style.display = 'block';
	//   addPost.style.display = 'none';
	//   unsolveIssuesSection.style.display = 'none';
	//   solvedIssuesSection.style.display = 'none';
	//   recentMenuButton.classList.remove('is-active');
	//   myPostsMenuButton.classList.remove('is-active');
	//   myTopPostsMenuButton.classList.add('is-active');
	//   unsolveIssuesMenuButton.classList.remove('is-active');
	//   solvedIssuesMenuButton.classList.add('is-active');
	// };
	solvedIssuesMenuButton.onclick = function () {
		recentPostsSection.style.display = 'none';
		userPostsSection.style.display = 'none';
		topUserPostsSection.style.display = 'none';
		addPost.style.display = 'none';
		unsolveIssuesSection.style.display = 'none';
		solvedIssuesSection.style.display = 'block';
		recentMenuButton.classList.remove('is-active');
		// myPostsMenuButton.classList.remove('is-active');
		// myTopPostsMenuButton.classList.remove('is-active');
		unsolveIssuesMenuButton.classList.remove('is-active');
		solvedIssuesMenuButton.classList.add('is-active');
	};
	unsolveIssuesMenuButton.onclick = function () {
		recentPostsSection.style.display = 'none';
		userPostsSection.style.display = 'none';
		topUserPostsSection.style.display = 'none';
		addPost.style.display = 'none';
		unsolveIssuesSection.style.display = 'block';
		solvedIssuesSection.style.display = 'none';
		recentMenuButton.classList.remove('is-active');
		// myPostsMenuButton.classList.remove('is-active');
		// myTopPostsMenuButton.classList.remove('is-active');
		unsolveIssuesMenuButton.classList.add('is-active');
		solvedIssuesMenuButton.classList.remove('is-active');
	};
	addButton.onclick = function () {
		recentPostsSection.style.display = 'none';
		userPostsSection.style.display = 'none';
		topUserPostsSection.style.display = 'none';
		addPost.style.display = 'block';
		recentMenuButton.classList.remove('is-active');
		// myPostsMenuButton.classList.remove('is-active');
		// myTopPostsMenuButton.classList.remove('is-active');
		messageInput.value = '';
		titleInput.value = '';
	};
	recentMenuButton.onclick();
}, false);
