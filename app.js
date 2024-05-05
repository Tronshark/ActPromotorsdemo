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
        url: '/Masterpage-template-master/Projects.html',
        templateUrl: 'Projects.html'
      })

      .state('Contact', {
        url: '/Masterpage-template-master/Contact.html',
        templateUrl: 'Contact.html'
      })
      .state('site1', {
        url: '/Masterpage-template-master/assets/Projectdetails/Site-1/site1.html',
        templateUrl:
          '/Masterpage-template-master/assets/Projectdetails/Site-1/site1.html'
      })
      .state('site2', {
        url: '/Masterpage-template-master/assets/Projectdetails/Site-2/site2.html',
        templateUrl:
          '/Masterpage-template-master/assets/Projectdetails/Site-2/site2.html'
      })
      .state('site3', {
        url: '/Masterpage-template-master/assets/Projectdetails/Site-3/site3.html',
        templateUrl:
          '/Masterpage-template-master/assets/Projectdetails/Site-3/site3.html'
      })
      .state('site4', {
        url: '/Masterpage-template-master/assets/Projectdetails/Site-4/site4.html',
        templateUrl:
          '/Masterpage-template-master/assets/Projectdetails/Site-4/site4.html'
      })
      .state('site5', {
        url: '/Masterpage-template-master/assets/Projectdetails/Site-5/site5.html',
        templateUrl:
          '/Masterpage-template-master/assets/Projectdetails/Site-5/site5.html'
      })
  }
])
