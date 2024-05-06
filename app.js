angular.module('app', ['ui.router']).config([
  '$urlRouterProvider',
  '$stateProvider',
  function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('Projects', {
        url: '/Projects.html',
        templateUrl: 'Projects.html'
      })

      .state('Contact', {
        url: '/Contact.html',
        templateUrl: 'Contact.html'
      })
      .state('site1', {
        url: '/assets/Projectdetails/Site-1/site1.html',
        templateUrl: '/assets/Projectdetails/Site-1/site1.html'
      })
      .state('site2', {
        url: '/assets/Projectdetails/Site-2/site2.html',
        templateUrl: '/assets/Projectdetails/Site-2/site2.html'
      })
      .state('site3', {
        url: '/assets/Projectdetails/Site-3/site3.html',
        templateUrl: '/assets/Projectdetails/Site-3/site3.html'
      })
      .state('site4', {
        url: '/assets/Projectdetails/Site-4/site4.html',
        templateUrl: '/assets/Projectdetails/Site-4/site4.html'
      })
      .state('site5', {
        url: '/assets/Projectdetails/Site-5/site5.html',
        templateUrl: '/assets/Projectdetails/Site-5/site5.html'
      })
  }
])
