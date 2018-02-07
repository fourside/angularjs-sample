
class MainController {
  constructor() {
    this.message = 'hello world';
  }

  say() {
    this.message = 'yes, i say';
  }
}

angular.module('app').controller('MainController', MainController);
