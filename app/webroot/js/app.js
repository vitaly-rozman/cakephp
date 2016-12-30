(function () {

  /**
   *
   * Main module of the application.
   */
  angular.module('demoApp', []).controller('MainController', ['$scope', function MainController($scope) {
    $scope.users = [];
  }]);
}());