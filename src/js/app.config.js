import LoginController from './controller/loginController';
import AboutController from './controller/aboutController';

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
    .otherwise({
      redirectTo: '/'
    });
}
