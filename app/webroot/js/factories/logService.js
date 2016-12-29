(function () {

    angular
        .module('demoApp')
        .factory('LogService', ['config', function(config) {

            return {
                log: function(message, params) {
                    console.log(message);
                    if ( angular.isObject(params) ) {
                        angular.forEach(params, function(value, key){
                            console.log(key + ': ' + value);
                        });
                    }
                }
            };

        }]
    );
}());