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

		.when('/racelist', {
			controller: 'ListController',
			templateUrl: 'views/racelist.html'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html'
		})
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

.controller('ListController', ['$scope', '$races', '$routeParams', function($scope, $races, $routeParams) {
	$races.success(function(data){
		$scope.raceinfo = data;
		$scope.upcoming = [];
		//setting todays date in comparable format to race dates
		$scope.date = new Date().toISOString();
		console.log($scope.date);
		console.log(data[0].start);
		//checking if date is in the future
		for(i = 0; i < $scope.raceinfo.length; i++) {
			if($scope.date < data[i].start) {
				//if race date is in the future add to upcoming 
					$scope.upcoming.push(data[i]) 
					console.log(data[i]);
				}
			}
			console.log($scope.upcoming);

	});
}])