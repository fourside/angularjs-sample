export default class AboutController {
  constructor($scope) {
    this.scope = $scope;
    $scope.$emit('viewChanged', 'about', this.initFirstTab.bind(this));
  }

  initFirstTab() {
    console.log('init first tab!');
    this.scope.$broadcast('initFirstTab');
    this.scope.$broadcast('init');
  }

  alertMe() {
    console.log('alertMe');
    this.scope.$broadcast('initSecondTab');
  }
}
