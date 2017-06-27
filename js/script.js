var app=angular.module("myModule",['google.places',"ui.router"])
				.config(function($stateProvider,$urlRouterProvider,$locationProvider){
					$urlRouterProvider.otherwise("/splash");
					$stateProvider
					.state("splash",{
						url:"/splash",
						templateUrl:"templates/splash.html",
						controller:"SplashScreenController as SplashScreenCtrl"
					})
					.state("WelcomeScreen",{
						url:"/welcome",
						templateUrl:"templates/welcome.html",
						controller:"WelcomeScreenController as WelcomeScreenCtrl"
					})
					.state("SignUp",{
						url:"/signup",
						templateUrl:"templates/signup.html",
						controller:"SignUpController as SignUpCtrl"
					})
					.state("homePage",{
						url:"/homepage",
						templateUrl:"templates/homepage.html",
						controller:"homePageController as homePageCtrl"
					})
					.state("showWeather",{
						url:"/weather",
						templateUrl:"templates/showWeather.html",
						controller:"showWeatherController as showWeatherCtrl"
					})


					
					// $locationProvider.html5Mode(true);

				})
				.directive('reverseGeocode', function () {
        return {
            restrict: 'E',
            template: '<p id="getmyLocation"></p>',
            link: function (scope, element, attrs) {
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(attrs.lat, attrs.lng);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            element.text(results[1].formatted_address);
                        } else {
                            element.text('Location not found');
                        }
                    } else {
                        element.text('Pleae Try Again: ' + status);
                    }
                });
                
            	
            },
            replace: true
        }
    })
