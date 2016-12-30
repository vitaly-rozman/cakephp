(function () {

    angular
        .module('demoApp')
        .factory('EditUserService', ['$rootScope', function($rootScope) {
            return {
                emitMsg: function(msg, user) {
                    $rootScope.$emit(msg, user);
                },
                onMsg: function(msg, scope, func) {
                    scope.$on('user-click', $rootScope.$on(msg, func));
                }
            };            
        }]
    );
}());