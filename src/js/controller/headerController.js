export default class HeaderController {
  constructor(authService) {
    this.authService = authService;
  }

  isAuthed() {
    return this.authService.authed();
  }

  getUserName() {
    return this.authService.getUserName();
  }
}
