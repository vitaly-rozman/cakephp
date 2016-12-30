(function () {

/**
   *
   * DetailsController
*/

angular.module('demoApp')
	.controller('DetailsController', ['$scope', 'DataService', 'EditUserService', function ($scope, dataService, editUserService) {
		$scope.isEditMode = false;

		editUserService.onMsg('user-click', $scope, function(evt, user) {
        	$scope.activeUser = user;
    	});

		$scope.changeMode = function(value) {
			$scope.isEditMode = value;
		};
		
		$scope.userUpdate = function(user) {
			var activeUser = $scope.activeUser;
			var user = {first_name: activeUser.first_name, last_name: activeUser.last_name};
			dataService.write('users', user, activeUser.id).then(function(result) {
				console.log(result);
				//TODO: update table on success
			});
			$scope.changeMode(false);
		}

	}]);

}());