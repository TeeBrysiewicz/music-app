export default function(server) {
  server.createList('album', 10);

  server.create('genre', {
    name: 'Rock'
  });

  server.create('genre', {
    name: 'Blues'
  });

  server.create('genre', {
    name: 'House'
  });

  server.create('song', {
    name: 'Dandelion'
  });
}
