(function () {

    angular
        .module('demoApp')
        .factory('DataService', ['$http', '$q', function($http, $q) {

            return {
                read: function(endpoint, method, format) {

                    var  url = 'http://dev.vettery.test/' + endpoint;
                    if (format !== '') {
                        url += '.' + format;
                    }
                    var deferred = $q.defer();

                    $http({url: url, method: method}).
                        then(function(result) {
                            var collection = result || [];
                            deferred.resolve(collection);
                        }, function(error) {
                            deferred.reject(error);
                        });

                    return deferred.promise;
                },
                write: function(endpoint, data, item_id) {

                    var url = 'http://dev.vettery.test/' + endpoint;
                      if (item_id !== undefined) {
                        url += '/' + item_id + '.json';
                    }
                    var deferred = $q.defer();

                    $http({method: 'POST', url: url, data: data}).
                    then(function(result) {
                        deferred.resolve(result);
                    }, function(error) {
                        deferred.reject(error);    
                    });
                    
                    return deferred.promise;
                }

            };

        }]
    );
}());
