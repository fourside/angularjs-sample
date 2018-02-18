export default class ContentHeaderController {
  constructor() {
    this.title;
    this.callback;
  }

  refresh() {
    if (this.callback) {
      this.callback();
    }
  }

}
