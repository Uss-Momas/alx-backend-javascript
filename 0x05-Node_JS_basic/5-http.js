const http = require('http');

const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  const { url } = req;

  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    const result = countStudents(process.argv[2]);

    result.then((value) => {
      const { fieldStats } = value;
      res.write('This is the list of our students\n');
      let message = `Number of students: ${value.numberStudents}\n`;
      for (const [field, object] of Object.entries(fieldStats)) {
        message += `Number of students in ${field}: ${object.total}. List: ${object.listStudens.join(', ')}\n`;
      }
      res.end(message);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname);
module.exports = app;
