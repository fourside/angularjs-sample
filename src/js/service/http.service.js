
export default class HttpService {
  constructor($resource) {
    this.resource = $resource;
  }

  get(path, onSuccess, onError) {
    this.resource(path).get([], onSuccess, onError);
  }

  post(path, requestBody, onSuccess, onError) {
    this.resource(path).save(requestBody, onSuccess, onError);
  }

  put(path, requestBody, onSuccess, onError) {
    this.resource(path, {}, {'update': {method: 'PUT'}}).update(requestBody, onSuccess, onError);
  }

  delete(path, onSuccess, onError) {
    this.resource(path).delete({}, onSuccess, onError);
  }
}
