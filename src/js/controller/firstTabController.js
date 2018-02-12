export default class FirstTabController {
  constructor() {
    this.editMode = false;
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
