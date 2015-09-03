angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'	
		})

		.when('/photo', {
			templateUrl: 'views/photo.html',
			controller: 'photoController'
		})

	$locationProvider.html5Mode(true);

}]);