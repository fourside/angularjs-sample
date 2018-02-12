export default class FirstTabController {
  constructor(httpService) {
    this.httpService = httpService;
    this.people;
    this.getPeople();
  }

  getPeople() {
    this.httpService.get(
      '/api/people',
      data => {
        console.log(data);
        this.people = data.people;
      },
      () => {}
    );
  }
}
