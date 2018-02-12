export default class SecondTabController {
  constructor($scope) {
    this.init();
    $scope.$on('initSecondTab', () => {
      this.init();
    });
  }

  init() {
    this.name = 'second tab';
  }
}
