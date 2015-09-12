app.controller('RaceController', ['$scope', '$races', '$routeParams', function($scope, $races, $routeParams) {
		$races.success(function(data){
		$scope.race = data[$routeParams.raceid];
		console.log($scope.race);
		console.log($scope.race.races[2])

	});
}]);