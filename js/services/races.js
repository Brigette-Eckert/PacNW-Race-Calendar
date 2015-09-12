app.factory('$races', ['$http', function($http){
		return $http.get('./data/raceJSON.js').success(function(data){
			console.log(data)
			return data;
		}).error(function(err){
				return err;
			});



}]);