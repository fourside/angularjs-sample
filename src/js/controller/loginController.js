export default class LoginController {
  constructor(httpService) {
    this.mail;
    this.password;
    this.httpService = httpService;
    this.alert;
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
        console.log('yay');
      },
      err => {
        this.alert = { type: 'danger', msg: err };
        console.log('err');
      }
    );
  }
}
