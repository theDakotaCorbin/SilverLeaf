angular.module('silverLeafApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    
    
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: 'Views/homeView.html',
        controller: 'homeCtrl'
    })
    
    
}]);