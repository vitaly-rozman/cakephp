(function () {

/**
   *
   * TableController
*/

	angular.module('demoApp')
		.controller('TableController', ['$scope', 'DataService', 'EditUserService', function ($scope, dataService, editUserService) {

			dataService.read('users',  'GET', 'json').then(function(result) {
				
				var users = result.data.users.map(function(user) {
					return {
						id: user.users.id,
						first_name: user.users.first_name,
						last_name: user.users.last_name,
						action: user.a.action,

					};
				})
				$scope.users = users;
			});

			$scope.editUser = function(user) {
        		editUserService.emitMsg('user-click', user);
			};

	}]);
}());