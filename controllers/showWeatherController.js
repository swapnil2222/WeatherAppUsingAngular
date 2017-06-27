app.controller("showWeatherController",function($state,$http,$scope){
 if(localStorage['user']===undefined){ //if not go to home
    $state.go("WelcomeScreen");
  }

$scope.location=localStorage.getItem('userLocation');
console.log($scope.location)
var location=$scope.location;
 
$http.post("http://api.openweathermap.org/data/2.5/forecast?q="+$scope.location+"&units=metric&APPID=ded5e541d62e11213dd7b790860900bd").success(function(response){
			// console.log('openweathermap:',response.main.temp);
			
			$scope.data=response;

			console.log('openweathermap:',$scope.data);
			// console.log(parseDate($scope.data.list[0].dt_txt));
		});
});