app.controller("SplashScreenController",function($state,$scope,$timeout){
	$timeout(function() {
		$state.go('WelcomeScreen');
	}, 3000);



});