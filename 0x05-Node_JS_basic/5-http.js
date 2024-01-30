const http = require('http');

const PATH = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    const messages = await countStudents(PATH);
    res.write(`This is the list of our students\n${messages.join('\n')}`);
  }
  res.end();
});

app.listen(1245);

module.exports = app;
