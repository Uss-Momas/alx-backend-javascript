const express = require('express');
const fs = require('fs/promises');

const PATH = process.argv[2];

const app = express();

async function countStudents(path) {
  try {
    const students = (await fs.readFile(path, { encoding: 'utf-8' })).split('\n').map((student) => student.trim()).splice(1);
    const studentsInfo = students.map((student) => ({ firstname: student.split(',')[0], field: student.split(',')[3] }));

    const fieldsObject = {};
    for (const student of studentsInfo) {
      fieldsObject[student.field] = { total: 0, listStudents: [] };
    }

    for (const student of studentsInfo) {
      fieldsObject[student.field].total += 1;
      fieldsObject[student.field].listStudents.push(student.firstname);
    }

    const NUMBER_OF_STUDENTS = students.length;
    const messages = [`Number of students: ${NUMBER_OF_STUDENTS}`];

    for (const [field, object] of Object.entries(fieldsObject)) {
      messages.push(`Number of students in ${field}: ${object.total}. List: ${object.listStudents.join(', ')}`);
    }

    return messages.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const messages = await countStudents(PATH);
  const message = `This is the list of our students\n${messages}`;
  res.send(message);
});

app.listen(1245);

module.exports = app;
