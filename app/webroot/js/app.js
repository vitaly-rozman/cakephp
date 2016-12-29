(function () {

  /**
   *
   * Main module of the application.
   */
  angular
    .module('demoApp', [
      'ui.bootstrap',
      'ui.select',
      'ui.router',
      'ui.grid'
    ])
    .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/demo'
        });
    });
}());