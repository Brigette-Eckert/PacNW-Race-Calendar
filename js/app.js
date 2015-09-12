var app = angular.module('RaceApp', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/'{
			controller: 'CalendarController',
			templateUrl: 'views/calendar.html'
		})
		
		.when('/:raceId', {
			controller: 'RaceController',
			templateUrl: 'views/race.html'
		})

		.otherwise({
			redirectTo: '/'
		});
});
