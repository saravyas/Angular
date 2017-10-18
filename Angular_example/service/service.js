var app = angular.module('myApp',[]);

app.service("myservice",myservice)

function myservice(){
	this.message = '';
	this.setMessage = function(newmessage){
		this.message =  newmessage;
		return this.message;
	}
};

app.factory("myfactory",myfactory)

function myfactory(){
	var factory = {}
	factory.message = '';
	factory.setMessage = function(newmessage){
		factory.message = newmessage;
	}
	return factory;
}

app.controller('serviceCtrl',serviceCtrl)

function serviceCtrl($scope,myservice,myfactory){
    $scope.serviceMsg = myservice.setMessage("Hello, I'm From Service");
    myfactory.setMessage("Hello, I'm From Factory")
    $scope.factoryMsg = myfactory.message;
}