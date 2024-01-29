const fs = require('fs/promises');

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
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    for (const [field, object] of Object.entries(fieldsObject)) {
      console.log(`Number of students in ${field}: ${object.total}. List: ${object.listStudents.join(', ')}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
