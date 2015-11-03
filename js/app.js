angular.module('silverLeafApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
    
    
    
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: '../Views/homeView.html',
        controller: 'homeCtrl'
    })
    
    .state('colorcopies', {
        url: '/colorcopies',
        templateUrl: '../Views/colorcopiesView.html',
        controller: 'colorcopiesCtrl'
        
    })
    
     .state('newsletters', {
        url: '/newsletters',
        templateUrl: '../Views/newsletterView.html',
        controller: 'newsletterCtrl'
        
    })
    
     .state('flyers', {
        url: '/flyers',
        templateUrl: '../Views/flyersView.html',
        controller: 'flyersCtrl'
        
    })
    
     .state('businesscards', {
        url: '/businesscards',
        templateUrl: '../Views/businesscardsView.html',
        controller: 'businesscardsCtrl'
        
    })
    
     .state('brochures', {
        url: '/brochures',
        templateUrl: '../Views/brochuresView.html',
        controller: 'brochuresCtrl'
        
    })
    
     .state('presentationfolders', {
        url: '/presentationfolders',
        templateUrl: '../Views/foldersView.html',
        controller: 'foldersCtrl'
        
    })
    
     .state('tabletents', {
        url: '/tabletents',
        templateUrl: '../Views/tabletentsView.html',
        controller: 'tabletentsCtrl'
        
    })
    
     .state('weddinginvitations', {
        url: '/weddinginvitations',
        templateUrl: '../Views/weddinginvitationsView.html',
        controller: 'weddinginvitationsCtrl'
        
    })
    
     .state('postersbanners', {
        url: '/postersbanners',
        templateUrl: '../Views/postersbannersView.html',
        controller: 'postersbannersCtrl'
        
    })
 
    $urlRouterProvider.otherwise('/home');
    
    
});















