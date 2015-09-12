var app = angular.module('RaceApp', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'CalendarController',
			templateUrl: 'views/calendar.html'
		})
		
		.when('/races/:raceid', {
			controller: 'RaceController',
			templateUrl: 'views/race.html'
		})
	

		// .when('/days/:dateid', {
		// 	controller: 'DayController',
		// 	templateUrl: 'views/day.html'
		// })


		.otherwise({
			redirectTo: '/'
		});
});
