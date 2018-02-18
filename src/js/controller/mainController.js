import '../../css/style.css';

export default class MainController {
  constructor($scope, $location, authService) {
    this.isAuth = false;
    this.userName = '';
    this.contentTitle = '';
    this.refreshCallback;

    $scope.$on('viewChanged', (target, title, callback) => {
      this.contentTitle = title;
      this.callback = callback;
    });

    // auth guard
    $scope.$watch(
      () => {
        return authService.authed();
      },
      (newValue) => {
        this.isAuth = newValue;
        this.userName = authService.getUserName();
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
