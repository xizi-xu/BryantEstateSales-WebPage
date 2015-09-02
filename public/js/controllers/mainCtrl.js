angular.module('mainCtrl', []).controller('mainController', function($scope) {
	$scope.logo = 'img/logo.png'
	$scope.tagline = 'An Estate Sale in Mountain Brook'
	$scope.sales = [
		{
			title: '',
			satTime: 'Saturday: 10am-3pm',
			sunTime: 'Sunday: 12pm-3pm',
			address: '3496 Westbury Rd, Birmingham, AL 35223',
			img1: 'img/home/1.jpg',
			img2: 'img/home/2.jpg',
			img3: 'img/home/3.jpg',
			items: [
				'9 Dyson Vacuum Cleaners-several new in box',
				'Pine Hutch & Buffet',
				'Large Glass Top Dining Table',
				'Henredon Lighted Curio',
				'Full Iron Tester Bed',
				'Antique Oak armoire',
				'Vanguard Sofa',
				'Mahogany Media Center',
				'French Draw Leaf Table',
				'English Oak Pub Table',
				'Desk and hutch',
				'Set 6 French Country dining chairs',
				'Contemporary club chair',
				'Sat of 6 French a Rush Seat Dining Chairs',
				'Pottery barn chairs',
				'Pink & green tile chandelier',
				'Media armoire/linen press',
				'King Bed',
				'9x12 rug',
				'Lamps',
				'Recliner',
				'Waterford Crystal',
				'China',
				'Glass',
				'50 Bottle Wine Cooler',
				'2 Refrigerators',
				'Ladies Designer Clothes',
				'Linens & bedding',
				'Great decorative Accessories',
				'House overfilled!!'
			]
		}
	]
});