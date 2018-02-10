import angular from 'angular';
import MainController from './controller/mainController'

angular.module('app' ,[
])
.component('myMain', {
  template: require('../template/main.html'),
  controller: MainController,
  controllerAs: 'main'
});

