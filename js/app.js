angular.module('RaceApp', ['ngRoute'])
.config(function($routeProvider){
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
})
.factory('$races', ['$http', function($http){
	return $http.get('js/data/raceJSON.js').success(function(data){
		return data;
	}).error(function(err){
		return err;
	});
}])

.controller('CalendarController', ['$scope', '$races', '$routeParams', function($scope, $races, $routeParams) {
	$races.success(function(data){
		$('#calendar').fullCalendar({
			events: data,
			theme: true
		});
	});
}])

.controller('RaceController', ['$scope', '$races', '$routeParams', function($scope, $races, $routeParams) {
	$races.success(function(data){
		$scope.race = data[$routeParams.raceid];
	});
}])