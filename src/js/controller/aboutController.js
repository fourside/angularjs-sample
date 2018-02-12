export default class AboutController {
  constructor($scope) {
    this.scope = $scope;
  }

  initFirstTab() {
    this.scope.$broadcast('initChildren');
  }

  alertMe() {
    console.log('alertMe');
  }
}
