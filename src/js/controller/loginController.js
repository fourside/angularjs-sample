export default class LoginController {
  constructor(httpService) {
    this.mail;
    this.password;
    this.httpService = httpService;
  }

  login() {
    const request = {
      mail: this.mail,
      password: this.password
    };
    this.httpService.post('/api/login', request, ()=> {
      console.log("yay");
    },
    () => {
      console.log("err");
    })
  }
}
