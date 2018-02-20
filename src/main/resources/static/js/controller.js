var app = angular.module('demo', []);


app.controller('Hello', function($scope, $http, $window) {

	$scope.filterParam = 'defaultFilterParam';

	$http.get('https://localhost:8080/greeting').then(function(response) {
		$scope.greeting = response.data;
	});

	$scope.filter = function(param) {
		$scope.filterParam = param;
	};

	$scope.graph = function() {
		$scope.filterParam = 'graph';
		var url = "https://localhost:8080/authenticate";
        $window.location.href = url;
	};

});

app.controller('Graph', function($scope, $http, $location) {
	
	$scope.filterParam = 'defaultFilterParam';
	var queryParams = $location.absUrl().split('?')[1];
	
	$http.get('https://localhost:8080/filelist?' + queryParams).then(function(response) {
		$scope.filelist = response.data;
	});
	
	$scope.filter = function(param) {
		$scope.filterParam = param;
	};
	
});