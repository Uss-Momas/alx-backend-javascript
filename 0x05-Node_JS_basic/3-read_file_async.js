const fs = require('fs');

async function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  try {
    const students = (await fs.promises.readFile(path, { encoding: 'utf-8' })).toString().trim().split('\n').splice(1)
      .map((student) => student.trim());

    const NUMBER_OF_STUDENTS = students.length;
    const messages = [`Number of students: ${NUMBER_OF_STUDENTS}`];

    const processedStudents = students.map((student) => {
      const studentInfo = student.split(',');
      return { firstname: studentInfo[0], field: studentInfo[3] };
    });

    const fieldInfo = {};

    for (const student of processedStudents) {
      fieldInfo[student.field] = { total: 0, list: [] };
    }

    for (const student of processedStudents) {
      fieldInfo[student.field].total += 1;
      fieldInfo[student.field].list.push(student.firstname);
    }

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    for (const [field, statsObj] of Object.entries(fieldInfo)) {
      console.log(`Number of students in ${field}: ${statsObj.total}. List: ${statsObj.list.join(', ')}`);
      messages.push(`Number of students in ${field}: ${statsObj.total}. List: ${statsObj.list.join(', ')}`);
    }

    return messages;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
