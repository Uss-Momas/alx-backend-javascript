const fs = require('fs/promises');

async function readDatabase(path) {
    let contents;

    try {
        contents = await fs.readFile(path, 'utf-8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }
    const students = contents.toString().trim().split('\n').splice(1)
        .map((student) => student.trim().split(',')).map((student) => ({
            firstName: student[0],
            lastName: student[1],
            age: student[2],
            field: student[3],
        }));

    let fields = students.map((student) => student.field);
    let unique_fields = new Set(fields);
    let students_by_field = {}
    for (const field of unique_fields) {
        students_by_field[field] = [];
    }

    for (const student of students) {
        students_by_field[student.field].push(student.firstName);
    }

    return students_by_field;
}

module.exports = readDatabase;