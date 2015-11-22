/**
 * @author: Sami Suo-Heikki
 * @portfolio: www.suoheikki.com
 */
var paymentApp = angular.module('paymentApp', [
    'ngRoute',
    'paymentAnimations',
    'paymentControllers'
]);

paymentApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/app', {
            templateUrl: 'app/partials/start.html',
            controller: 'StartCtrl'
        }).
        when('/app/detail/:paymentId', {
            templateUrl: 'app/partials/payment-detail.html',
            controller: 'PaymentDetailCtrl'
        }).
        otherwise({
            redirectTo: '/app'
        });
    }]);