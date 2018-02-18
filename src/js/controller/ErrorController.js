export default class ErrorController {
  constructor($scope) {
    $scope.$emit('viewChanged', 'Error!');
  }
}
