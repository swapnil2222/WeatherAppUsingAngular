app.controller("SignUpController",function($http,$state){
	var vm=this;
	// vm.message="Hi Angular Js";
	vm.SignUpInfo={
		username:undefined,
		email:undefined,
		password:undefined
	}
	vm.signupUser=function(){
		var data={
			username:vm.SignUpInfo.username,
			email:vm.SignUpInfo.email,
			pwd:vm.SignUpInfo.password
		}
		
		console.log(data);
		 localStorage.setItem('user',JSON.stringify(data));

		 alert('SignUp Successfull');
		 vm.SignUpInfo.username="";
		 vm.SignUpInfo.email="";
		 vm.SignUpInfo.password="";


		// var user=JSON.parse(localStorage.getItem('user'))||[];
		// var userInfo=[];
		// userInfo.push(user);
		// localStorage.setItem("userInfo",JSON.stringify(userInfo));
		// var getuserInfo=JSON.parse(localStorage.getItem("userInfo"));
		// localStorage.setItem('user',JSON.stringify(userInfo));
		// var student2={username:"Swap",email:"hi",pwd:"Hello"};
		// getuserInfo.push(student2);
		// localStorage.setItem("userInfo",JSON.stringify(getuserInfo));

		// var newData=JSON.parse(localStorage.getItem('userInfo'));
		// console.log(newData);	
		var user=JSON.parse(localStorage.getItem('user'));
		console.log(user);

	}
});