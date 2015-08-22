angular.module('mainCtrl', []).controller('mainController', function($scope) {
	$scope.logo = 'img/logo.png'
	$scope.tagline = 'I sell stuff lol'
	$scope.sales = [
		{
			title: 'Estate Sale in Enlgish Village',
			satTime: 'Saturday: 10am-3pm',
			sunTime: 'Sunday: 12pm-3pm',
			address: '2930 Berwick Rd, Birmingham, AL 35213',
			img1: 'img/home/barw-4.jpg',
			img2: 'img/home/barw-14.jpg'
		},
		{
			title: 'ONE DAY Estate Sale off Karl Daly Road in Birmingham',
			satTime: 'Saturday: 10am-3pm ONLY',
			sunTime: 'Sunday: N/A',
			address: '1008 Bramble Ln, Irondale, AL 35210',
			img1: 'img/home/bramble-1.jpg',
			img2: 'img/home/bramble-7.jpg'
		}
	]
	$scope.startingTime = 'Numberss will be avaiable at 8am on Saturday'
});