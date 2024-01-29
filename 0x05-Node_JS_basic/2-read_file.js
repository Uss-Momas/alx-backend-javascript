const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const students = fs.readFileSync(path, { encoding: 'utf8' }).split('\n').map((student) => student.trim()).splice(1);

  const NUMBER_OF_STUDENTS = students.length;

  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fieldOfStudents = {};
  for (const student of students) {
    const studentInfo = student.split(',');
    const field = studentInfo[studentInfo.length - 1];
    fieldOfStudents[field] = { total: 0, listStudens: [] };
  }

  for (const student of students) {
    const studentInfo = student.split(',');
    const field = studentInfo[studentInfo.length - 1];
    fieldOfStudents[field].total += 1;
    fieldOfStudents[field].listStudens.push(studentInfo[0]);
  }

  for (const [FIELD, object] of Object.entries(fieldOfStudents)) {
    console.log(`Number of students in ${FIELD}: ${object.total}. List: ${object.listStudens.join(', ')}`);
  }
}

module.exports = countStudents;
