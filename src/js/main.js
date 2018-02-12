import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import MainController from './controller/mainController';
import HeaderController from './controller/headerController';
import FooterController from './controller/footerController';
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
  .constant('appConst', appConst())
  .service('httpService', HttpService)
  .service('authService', AuthService)
  .run(mockServer);
