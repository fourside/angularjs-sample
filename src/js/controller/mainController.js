import '../../css/style.css';

export default class MainController {
  constructor($scope, $location, authService) {
    // auth guard
    $scope.$watch(
      function() {
        return authService.authed();
      },
      function(newValue) {
        if (!newValue) {
          const path = $location.path();
          if (path !== '/' && path !== '/error') {
            $location.path('/error');
          }
        }
      }
    );
  }
}
