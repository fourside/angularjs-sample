import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import MainController from './controller/mainController';
import HeaderController from './controller/headerController';
import FooterController from './controller/footerController';
import FirstTabController from './controller/firstTabController';
import SecondTabController from './controller/secondTabController';
import PeopleListController from './controller/peopleListController';
import PeopleFormController from './controller/peopleFormController';
import PaginationController from './controller/paginationController';
import ContentHeaderController from './controller/contentHeaderController';
import ModalController from './controller/modalController';

import LoginController from './controller/loginController';
import AboutController from './controller/aboutController';
import ErrorController from './controller/errorController';
import ChartController from './controller/chartController';

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
    controller: MainController
  })
  .component('myHeader', {
    template: require('../template/header.html'),
    controller: HeaderController,
    bindings: {
      userName: '<'
    }
  })
  .component('myFooter', {
    template: require('../template/footer.html'),
    controller: FooterController
  })
  .component('firstTab', {
    template: require('../template/firstTab.html'),
    controller: FirstTabController
  })
  .component('peopleList', {
    template: require('../template/peopleList.html'),
    controller: PeopleListController,
    bindings: {
      onEdit: '&'
    }
  })
  .component('peopleForm', {
    template: require('../template/peopleForm.html'),
    controller: PeopleFormController,
    bindings: {
      person: '<',
      onList: '&'
    }
  })
  .component('secondTab', {
    template: require('../template/secondTab.html'),
    controller: SecondTabController,
  })
  .component('headding', {
    template: require('../template/contentHeader.html'),
    controller: ContentHeaderController,
    bindings: {
      title: '<',
      callback: '<'
    }
  })
  .component('pagination', {
    template: require('../template/pagination.html'),
    controller: PaginationController,
    bindings: {
      totalItems: '<',
      onChange: '&'
    }
  })
  .component('login', {
    template: require('../template/login.html'),
    controller: LoginController
  })
  .component('about', {
    template: require('../template/about.html'),
    controller: AboutController
  })
  .component('chart', {
    template: require('../template/chart.html'),
    controller: ChartController
  })
  .component('error', {
    template: require('../template/error.html'),
    controller: ErrorController
  })
  .component('modal', {
    template: require('../template/modal.html'),
    controller: ModalController,
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  })
  .constant('appConst', appConst())
  .service('httpService', HttpService)
  .service('authService', AuthService)
  .run(mockServer);
