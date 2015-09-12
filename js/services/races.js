app.factory('$races', ['$http', function($http){
		return $http.get('js/data/raceJSON.js').success(function(data){
			return data;
		}).error(function(err){
				return err;
			});



}]);