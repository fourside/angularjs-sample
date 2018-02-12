export default class PeopleListController {
  constructor(httpService) {
    this.httpService = httpService;
    this.people = [];
    this.getPeople();
  }

  getPeople() {
    this.httpService.get(
      '/api/people',
      data => {
        this.people = data.people;
      },
      () => {}
    );
  }

  register() {
    this.onEdit();
  }

  edit(person) {
    this.onEdit({ person: person });
  }

  del(person) {
    console.log(person);
  }
}
