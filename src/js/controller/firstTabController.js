export default class FirstTabController {
  constructor($scope) {
    this.editMode = false;
    $scope.$on('initChildren', () => {
      this.listMode();
    });
  }

  edit(person) {
    this.editMode = true;
    this.person = person;
  }

  listMode() {
    this.editMode = false;
    this.person = undefined;
  }
}
