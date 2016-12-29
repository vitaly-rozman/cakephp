(function () {

    angular
        .module('demoApp')
        .factory('NotificationService', ['$filter', function($filter) {

            return {
                show: function(status, action, message) {

                    var classes = {
                        add: 'plus-sign',
                        attention: 'exclamation-mark',
                        edit: 'edit',
                        loaded: 'leaf',
                        unknown: 'question-sign'
                    };

                    var result = {status: status, message: message, action: action};
                    result.alertClass = (status === 'ok') ? 'success' : 'danger';
                    result.typeClass = (classes[action] !== undefined) ? classes[action] : classes.unknown;
                    result.timestamp = $filter('date')(new Date(), 'dd/MM/yyyy hh:mm:ss');

                    //display notification block
                }

            };
        }]);
}());