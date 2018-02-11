export default class LoginController {
  constructor(httpService, $location) {
    this.mail;
    this.password;
    this.httpService = httpService;
    this.alert;
    this.location = $location;
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
        this.location.path('/about');
      },
      err => {
        this.alert = { type: 'danger', msg: err };
        console.log('err');
      }
    );
  }
}
