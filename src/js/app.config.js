import LoginController from './controller/loginController';
import AboutController from './controller/aboutController';
import ErrorController from './controller/errorController';

export default function routing($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      template: require('../template/login.html'),
      controller: LoginController,
      controllerAs: 'login'
    })
    .when('/about', {
      template: require('../template/about.html'),
      controller: AboutController,
      controllerAs: 'about'
    })
    .when('/error', {
      template: require('../template/error.html'),
      controller: ErrorController,
      controllerAs: 'error'
    })
    .otherwise({
      redirectTo: '/'
    });
}
