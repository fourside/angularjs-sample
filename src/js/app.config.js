export default function routing($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      template: '<login></login>'
    })
    .when('/about', {
      template: '<about></about>'
    })
    .when('/chart', {
      template: '<chart></chart>'
    })
    .when('/error', {
      template: '<error></error>'
    })
    .otherwise({
      redirectTo: '/'
    });
}
