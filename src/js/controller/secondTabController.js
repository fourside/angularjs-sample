export default class SecondTabController {
  constructor($scope, appConst) {
    this.appConst = appConst;
    this.init();
    $scope.$on('initSecondTab', () => {
      this.init();
      $scope.$broadcast('initPagination');
    });
    this.get();
  }

  init() {
    this.name = 'second tab';
    this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania[G]', 'Rhode Island[H]', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  }

  get(index) {
    const start = (index || 0) * this.appConst.perPage;
    const end = start + this.appConst.perPage;
    this.stateList = this.states.slice(start, end);
  }
}
