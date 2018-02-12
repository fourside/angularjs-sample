export default class AuthService {
  constructor() {
    this.isAuthed = false;
    this.userName = null;
  }

  authed() {
    return this.isAuthed;
  }

  getUserName() {
    return this.userName;
  }

  getAuthed(userName) {
    this.userName = userName;
    this.isAuthed = true;
  }
}
