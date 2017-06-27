app.controller("homePageController",function($state,$http,$scope,$rootScope){
// var vm=this;
// var getUserInfo=JSON.parse(localStorage.getItem("user"));
// vm.username=getUserInfo.username;
  if(localStorage['user']===undefined){ //if not go to home
    $state.go("WelcomeScreen");
  }


var getUserInfo=JSON.parse(localStorage.getItem("user"));
$scope.username=getUserInfo.username;
$scope.latitude=10;
$scope.longitude=10;
// $rootScope.value=10;
$scope.place = null;
$scope.placeAddress=null;
	// accesing geoposition location of user

  console.log('2nd value',$rootScope.value);
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;

            
            console.log(position)
       

         $scope.latitude=$scope.position.coords.latitude;
         localStorage.setItem('latitude',JSON.stringify($scope.latitude));
         $scope.longitude=$scope.position.coords.longitude;
         localStorage.setItem('longitude',JSON.stringify($scope.longitude));
      });
    });
  }
  // console.log('line1',$scope.placeAddress);
  // console.log('1st value',$scope.value);
  $scope.latitude=JSON.parse(localStorage.getItem('latitude'));
  $scope.longitude=JSON.parse(localStorage.getItem('longitude'));
  $scope.getLocation=function(){
  	
  	console.log("getLocation() called");

  	console.log($scope.place.formatted_address);
  	// set userlocation in localstorage
  	localStorage.setItem('userLocation',$scope.place.formatted_address);
  	$(document).ready(function(){
  		$('.showLocation').hide();

  		 $('.showPlace').show();
  		
  	});

  }
  console.log('line2',$scope.place);


});
