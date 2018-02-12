export default class LoginController {
  constructor(httpService, authService, $location) {
    this.mail;
    this.password;
    this.httpService = httpService;
    this.authService = authService;
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
