(function () {

    angular
        .module('demoApp')
        .factory('DataService', ['config', '$http', '$q', function(config, $http, $q) {

            return {
                read: function(endpoint, method, noCache) {

                    var  url = config.apiUrl + endpoint;
                    var deferred = $q.defer();

                    $http({cache: !noCache, url: url, method: method}).
                        then(function(result) {
                            var collection = result || [];
                            deferred.resolve(collection);
                        }, function(error) {
                            deferred.reject(error);
                        });

                    return deferred.promise;
                },
                write: function(endpoint, data) {

                    var url = config.apiUrl + endpoint;
                    var deferred = $q.defer();

                    $http({method: 'POST', url: url, data: data}).success(deferred.resolve).error(deferred.reject);
                    return deferred.promise;
                }

            };

        }]
    );
}());
