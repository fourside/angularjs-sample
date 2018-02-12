export default class AboutController {
  constructor($scope) {
    this.scope = $scope;
  }

  initFirstTab() {
    this.scope.$broadcast('initFirstTab');
  }

  alertMe() {
    console.log('alertMe');
    this.scope.$broadcast('initSecondTab');
  }
}
