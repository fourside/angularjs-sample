'use strict';

angular.module('app',[
  'ngRoute',
  'ngResource',
  'pascalprecht.translate',
  'ui.bootstrap',
])
.config(($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
  .otherwise({
    redirectTo: '/'
  })
  ;
})
;
