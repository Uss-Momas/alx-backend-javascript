const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, response) => {
  countStudents(process.argv[2])
    .then((result) => {
      const { studentsByField } = result;
      const totalStudents = result.numStudents;
      const message = ['This is the list of our students', `Number of students: ${totalStudents}`];

      for (const [field, list] of Object.entries(studentsByField)) {
        message.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
      response.send(message.join('\n'));
    })
    .catch((err) => {
      response.status(404);
      response.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
