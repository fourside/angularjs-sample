
export default class HeaderController {
  constructor($uibModal) {
    this.uibModal = $uibModal;
    this.userName;
    this.modalInstance;
  }

  openModal() {
    this.uibModal.open({
      component: 'modal',
      size: 'lg',
      resolve: {
        userName: () => {
          return this.userName;
        }
      }
    }).result.then(
      (message) => {
        console.log('result!', message);
      },
      (dismiss) => {
        console.log('dismiss', dismiss);
      }
    );
  }
}
