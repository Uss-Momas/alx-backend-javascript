const fs = require('fs/promises');

async function readDatabase(path) {
  let contents;

  try {
    contents = await fs.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = contents.toString().trim().split('\n').splice(1)
    .map((student) => student.trim().split(','))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  const fields = students.map((student) => student.field);
  const uniqueFields = new Set(fields);
  const studentsByField = {};
  for (const field of uniqueFields) {
    studentsByField[field] = [];
  }

  for (const student of students) {
    studentsByField[student.field].push(student.firstName);
  }

  return studentsByField;
}

module.exports = readDatabase;
