export default function mockServer($httpBackend) {
  $httpBackend
    .whenPOST('/api/login', { mail: 'hoge@hoge', password: 'hoge' })
    .respond(201, { message: 'authed' });
  const people = [
    { id: 1, name: 'hoge', hash: '6ab7f750bc8817e9c7bc1dda81be55c2dbc62619' },
    { id: 2, name: 'fuga', hash: '2ab2e1f2d6303c5f6ddbc7b04d96bce4028c293d' },
    { id: 3, name: 'piyo', hash: '1e84c6ad9324ccb10f8b4c26bd2770342c0e3c96' },
    { id: 4, name: 'foo', hash: '867a13ec8c338626bf802b53504d24a598a59cd7' },
    { id: 5, name: 'bar', hash: 'a03e27913c65eb3ba1f0a66b6ed3103960cd4bd8' },
    { id: 6, name: 'baz', hash: '750cb1fc70a0239e3a5b6efb443ececea89f6e72' }
  ];
  $httpBackend.whenGET('/api/people').respond(200, { people: people });
}
