
class MainController {
  constructor($templateCache) {
    this.message = 'hello world';
  }

  say() {
    this.message = 'yes, i say';
  }
}

const app = angular.module(app);
app.component('myApp', {
  templateUrl: 'main.html',
  controller: MainController,
  controllerAs: 'main'
});
angular.bootstrap(document.body, [app.name]);
