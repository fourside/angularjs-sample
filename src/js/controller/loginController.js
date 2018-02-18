export default class LoginController {
  constructor($scope, httpService, authService, $location) {
    this.mail;
    this.password;
    this.alert;
    this.httpService = httpService;
    this.authService = authService;
    this.location = $location;
    $scope.$emit('viewChanged');
  }

  login() {
    this.alert = {};
    const request = {
      mail: this.mail,
      password: this.password
    };
    this.httpService.post(
      '/api/login',
      request,
      () => {
        this.authService.getAuthed(this.mail);
        this.location.path('/about');
      },
      err => {
        this.alert = { type: 'danger', msg: err };
        console.log('err');
      }
    );
  }
}
