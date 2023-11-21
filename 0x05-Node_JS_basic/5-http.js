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
      const { studentsByField } = value;
      res.write('This is the list of our students\n');
      const message = [`Number of students: ${value.numStudents}`];
      for (const [field, list] of Object.entries(studentsByField)) {
        message.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
      res.end(message.join('\n'));
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname);
module.exports = app;
