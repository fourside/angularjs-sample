export default class ModalController {
  constructor() {
    this.userName;
    this.$onInit = () => {
      this.userName = this.resolve.userName;
    };
  }

  ok() {
    console.log('ok');
    this.close({ $value: 'ok!'});
  }

}
