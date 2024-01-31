const http = require('http');

const PATH = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const messages = await countStudents(PATH);
      res.write(`This is the list of our students\n${messages.join('\n')}`);
    } catch (error) {
      res.write('This is the list of our students\nCannot load the database');
    }
  }
  res.end();
});

app.listen(1245);

module.exports = app;
