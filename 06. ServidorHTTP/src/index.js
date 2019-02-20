import http from 'http';

const server = http.createServer((request, response) => {
  response.write('<h1>Curso de NodeJS!</h1>');
  response.end();
})

server.listen(8000, 'localhost', err => {
  if (err) {
    console.log('Error', err);
  }

  console.log('Server abierto en http://localhost/8000');
})
