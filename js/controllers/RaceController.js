app.controller('RaceController', ['$scope', '$races', '$routeParams', function($scope, $events, $routeParams) {
		$events.success(function(data){
		$scope.race = data[$routeParams.raceId];
		console.log(data);
		console.log($scope.race);
	});
}]);