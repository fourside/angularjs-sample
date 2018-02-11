export default function mockServer($httpBackend) {
  $httpBackend
    .whenPOST('/api/login', { mail: 'hoge@hoge', password: 'hoge' })
    .respond(201, { message: 'authed' });
}
