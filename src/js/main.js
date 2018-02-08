'use strict';

const app = 'app';
angular.module(app ,[
  'ngRoute',
  'ngResource',
  'pascalprecht.translate',
  'ui.bootstrap',
])
.config(($locationProvider) => {
  $locationProvider.hashPrefix('');
})
;
