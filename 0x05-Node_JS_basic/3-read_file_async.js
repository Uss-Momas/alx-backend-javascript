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

    console.log(`Number of students: ${contents.length}`);
    for (const [field, list] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
    return { numStudents: contents.length, studentsByField };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
