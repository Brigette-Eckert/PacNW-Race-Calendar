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
		console.log(data)
		$('#calendar').fullCalendar();
	});
}])

.controller('RaceController', ['$scope', '$races', '$routeParams', function($scope, $races, $routeParams) {
	$races.success(function(data){
		$scope.race = data[$routeParams.raceid];
		// $scope.events =$scope.race.races[] placeholder for ng-repeat?
		console.log($scope.race.races[0]);

	});
}])