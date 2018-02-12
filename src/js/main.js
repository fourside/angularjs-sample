import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import MainController from './controller/mainController';
import HeaderController from './controller/headerController';
import FooterController from './controller/footerController';
import FirstTabController from './controller/firstTabController';
import SecondTabController from './controller/secondTabController';

import HttpService from './service/http.service';
import AuthService from './service/auth.service';

import routing from './app.config';
import appConst from './app.const';
import mockServer from './mock.server';

angular
  .module('app', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngMockE2E'])
  .config(routing)
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
  .component('firstTab', {
    template: require('../template/firstTab.html'),
    controller: FirstTabController,
    controllerAs: 'firstTab'
  })
  .component('secondTab', {
    template: require('../template/secondTab.html'),
    controller: SecondTabController,
    controllerAs: 'secondTab'
  })
  .constant('appConst', appConst())
  .service('httpService', HttpService)
  .service('authService', AuthService)
  .run(mockServer);
