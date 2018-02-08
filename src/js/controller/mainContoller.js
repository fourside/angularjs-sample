
class MainController {
  constructor() {
    this.message = 'hello world';
  }

  say() {
    this.message = 'yes, i say';
  }
}

angular.module('app').component('myApp', {
  templateUrl: 'main.html',
  controller: MainController,
  controllerAs: 'main'
});
