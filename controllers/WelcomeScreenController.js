app.controller("WelcomeScreenController",function($state,$http){
	var vm=this;
	// vm.message="Hi Angular Js";
		vm.loginInfo={
		userName:undefined,
		password:undefined
	}
	vm.loginUser=function(){
		var data={
			username:vm.loginInfo.userName,
			password:vm.loginInfo.password
		}
		var getUserInfo=JSON.parse(localStorage.getItem("user"));
		console.log("Username from localStorage:");
		console.log(getUserInfo.username);	
			// console.log(data.username);
		if(data.username==getUserInfo.username && data.password==getUserInfo.pwd){
			$state.go("homePage");
		}
		else{
			alert("Username and password are incorrect");
			vm.loginInfo.userName="";
			vm.loginInfo.password
			="";
		}
	}




});