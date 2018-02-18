export default class PaginationController {
  constructor(appConst, $scope) {
    this.perPage = appConst.perPage;
    $scope.$on('initPagination', () => {
      this.currentPage = 1;
      this.change();
    });
  }

  change() {
    this.onChange({ index: this.currentPage - 1 });
  }
}
