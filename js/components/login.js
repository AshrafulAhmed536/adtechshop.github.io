jQuery(document).ready(function($){
	let users = [
	{
		'email': 'sachin',
		'pwd': 'mr',
		'gender': 'male',
		'age': 42,
	},
	{
		'email': 'dhoni',
		'pwd': 'mr',
		'gender': 'male',
		'age': 35,
	},
	{
		'email': 'Kohli',
		'pwd': 'mr',
		'gender': 'male',
		'age': 27,
	},
	{
		'email': 'Rani',
		'pwd': 'ms',
		'gender': 'female',
		'age': 25,
	},
	{
		'email': 'reka',
		'pwd': 'ms',
		'gender': 'female',
		'age': 19,
	},
	{
		'email': 'radha',
		'pwd': 'ms',
		'gender': 'female',
		'age': 15,
	},	
	{
		'email': 'krishna',
		'pwd': 'mr',
		'gender': 'male',
		'age': 17,
	}
	];
	
	function validateCredentials (email, pwd) {
		for (var i=0; i<users.length; i++) {
			if (users[i].email === email && users[i].pwd === pwd) {
				return users[i];
			}
		}
	};
	
	$(".login-form").submit(function(e, data){
		let loggedInUser = validateCredentials($('.login-email').val(), $('.login-pwd').val());
		if (loggedInUser !== undefined) {
			sessionStorage.setItem('user', JSON.stringify(loggedInUser));
			
			// to use somewhere else
			let testUser = JSON.parse(sessionStorage.getItem('user'));
			console.log(testUser);
		} else {
			e.preventDefault();
		}
    });
	
	function showAuthNavButtons (email, pwd) {
		let loggedInUser = sessionStorage.getItem('user');
		console.log(loggedInUser);
		$('.nav-login').toggleClass('hidden-xs hidden-md hidden-lg', loggedInUser !== null);
		$('.nav-logout').toggleClass('hidden-xs hidden-md hidden-lg', loggedInUser === null);
	};
	
	showAuthNavButtons();
});