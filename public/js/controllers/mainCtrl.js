angular.module('mainCtrl', []).controller('mainController', function($scope) {
	$scope.logo = 'img/logo.png'
	$scope.tagline = 'An Estate Sale in Mountain Brook'
	$scope.sales = [
		{
			title: '',
			satTime: 'Saturday: 10am-3pm',
			sunTime: 'Sunday: 12pm-3pm',
			address: '3496 Westbury Rd, Birmingham, AL 35223',
			img1: 'img/home/3.jpg',
			img2: 'img/home/2.jpg',
			img3: 'img/home/1.jpg'
		}
	]
	$scope.startingTime = 'Numbers will be avaiable at 8am on Saturday'
});