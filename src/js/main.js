import angular from 'angular';
import MainController from './controller/mainController'
import HeaderController from './controller/headerController'
import FooterController from './controller/footerController'

angular.module('app' ,[
])
.component('myMain', {
  template: require('../template/main.html'),
  controller: MainController,
  controllerAs: 'main'
})
.component('myHeader', {
  template: require('../template/header.html'),
  controller: HeaderController,
  controllerAs: 'header'
})
.component('myFooter', {
  template: require('../template/footer.html'),
  controller: FooterController,
  controllerAs: 'footer'
})
;

