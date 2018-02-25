export default class PeopleFormController {
  constructor(httpService) {
    this.httpService = httpService;
    this.$onInit = () => {
      this.isUpdate = this.person !== undefined;
      if (this.isUpdate) {
        this.commit = this.update;
      } else {
        this.commit = this.create;
      }
    };
    this.meal = {};
  }

  create() {
    const request = {
      name: this.person.name,
      hash: this.person.hash
    };
    const path = '/api/person';
    this.httpService.post(
      path,
      request,
      data => {
        console.log(data);
        this.person = undefined;
        this.onList();
      },
      err => {
        console.log(err);
      }
    );
  }

  update() {
    const request = {
      name: this.person.name,
      hash: this.person.hash
    };
    const path = '/api/person/' + this.person.id;
    this.httpService.put(
      path,
      request,
      data => {
        console.log(data);
        this.person = undefined;
        this.onList();
      },
      err => {
        console.log(err);
      }
    );
  }

  back() {
    this.person = undefined;
    this.onList();
  }
  
  any() {
    return !Object.keys(this.meal).some((name) => {
      return this.meal[name];
    });
  }

}
