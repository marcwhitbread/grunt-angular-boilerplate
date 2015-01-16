app.controller('MainCtrl', ['$scope', function($scope) {
	
	$scope.form = {
		t: 100,
		b: 150,
		h: 100,
		d: 20
	}
	
	$scope.update = function() {
		
		
		
		$scope.trapezoid = {
			style: {
				width: $scope.form.t + 'px',
				height: 0,
				borderBottom: $scope.form.h + 'px solid #aaa',
				borderLeft: $scope.form.d + 'px solid transparent',
				borderRight: ($scope.form.b - $scope.form.t - $scope.form.d) + 'px solid transparent'
			},
			area: {
				style: {
					height: $scope.form.h + 'px'
				},
				value: ($scope.form.t + $scope.form.b) / 2 * $scope.form.h
			}
		}
		
	}
	
	$scope.update();
	
}]);