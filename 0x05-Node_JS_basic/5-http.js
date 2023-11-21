const http = require('http');
const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const contents = data.toString().trim().split('\n').splice(1)
      .map((student) => student.trim());
    const studentsObject = contents.map((student) => student.split(',')).map((arrayStudent) => ({ firstName: arrayStudent[0], field: arrayStudent[3] }));
    const studentsByField = {};
    const fields = [...new Set(studentsObject.map((studentObj) => studentObj.field))];

    for (const field of fields) {
      studentsByField[field] = [];
    }

    for (const student of studentsObject) {
      studentsByField[student.field].push(student.firstName);
    }

    return { numStudents: contents.length, studentsByField };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const result = countStudents(process.argv[2]);
    result.then((value) => {
      const { studentsByField } = value;
      res.write('This is the list of our students\n');
      const message = [`Number of students: ${value.numStudents}`];
      for (const [field, list] of Object.entries(studentsByField)) {
        message.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
      res.write(message.join('\n'));
      res.end();
    }).catch(() => {
      res.end('Cannot load the database');
      throw new Error('Cannot load the database');
    });
  }
});

app.listen(port, hostname);
module.exports = app;
