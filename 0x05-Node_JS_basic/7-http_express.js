const express = require('express');
const countStudents = require('./3-read_file_async');

const PATH = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const messages = await countStudents(PATH);
  const message = `This is the list of our students\n${messages.join('\n')}`;
  res.send(message);
});

app.listen(1245);

module.exports = app;
