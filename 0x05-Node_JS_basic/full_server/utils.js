import fs from 'fs';

function processStudents(studentsData) {
  const students = studentsData.split('\n').map((student) => {
    const trimedStudent = student.trim().split(',');
    return [trimedStudent[0], trimedStudent[3]];
  });
  return students.splice(1);
}

function infoPerField(students) {
  const objectOfFields = {};
  for (const student of students) {
    objectOfFields[student[1]] = { total: 0, list: [] };
  }

  for (const [firstname, field] of students) {
    objectOfFields[field].total += 1;
    objectOfFields[field].list.push(firstname);
  }

  return objectOfFields;
}

async function readDatabase(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.lstatSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const students = await fs.promises.readFile(path, { encoding: 'utf-8' });
  const newStudents = processStudents(students);

  const fieldInfo = infoPerField(newStudents);

  return fieldInfo;
}

export default readDatabase;
