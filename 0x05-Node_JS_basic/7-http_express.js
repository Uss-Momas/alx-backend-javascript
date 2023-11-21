const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, response) => {
  console.log(process.argv[2]);
  countStudents(process.argv[2])
    .then((result) => {
      let message = 'This is the list of our students\n';
      const { fieldStats } = result;
      const totalStudents = result.numberStudents;
      message += `Number of students: ${totalStudents}\n`;

      for (const [field, object] of Object.entries(fieldStats)) {
        message += `Number of students in ${field}: ${object.total}. List: ${object.listStudens.join(', ')}\n`;
      }
      response.send(message);
    })
    .catch((err) => {
      response.status(404);
      response.send(err.message);
    });
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
