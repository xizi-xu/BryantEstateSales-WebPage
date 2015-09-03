angular.module('mainCtrl', []).controller('mainController', function($scope) {
	$scope.logo = 'img/logo.png'
	$scope.tagline = 'An Estate Sale in Mountain Brook'
	$scope.sales = [
		{
			title: '',
			satTime: 'Saturday: 10am-3pm',
			sunTime: 'Sunday: 12pm-3pm',
			address: '3496 Westbury Rd, Birmingham, AL 35223',
			googleMap: 'https://www.google.com/maps/dir//3496+Westbury+Rd,+Birmingham,+AL+35223/@33.494224,-86.723991,17z/data=!4m13!1m4!3m3!1s0x888910b7a7686e31:0xa3e2b9149a5f9d5b!2s3496+Westbury+Rd,+Birmingham,+AL+35223!3b1!4m7!1m0!1m5!1m1!1s0x888910b7a7686e31:0xa3e2b9149a5f9d5b!2m2!1d-86.723991!2d33.494224',

			imgs: [
				'img/home/1.jpg',
				'img/home/2.jpg',
				'img/home/3.jpg'
			],

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