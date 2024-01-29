const http = require('http');
const fs = require('fs/promises');
const PATH = process.argv[2];

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

        return { total: NUMBER_OF_STUDENTS, students: fieldsObject };
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.write('Hello Holberton School!');
    } else if (req.url === '/students') {
        let message = 'This is the list of our students\n';
        const students = await countStudents(PATH);
        message += `Number of students: ${students.total}\n`;
        for (const [field, object] of Object.entries(students.students)) {
            message += `Number of students in ${field}: ${object.total}. List: ${object.listStudents.join(', ')}`
        }
        res.write(message);
    }
    res.end()
});

app.listen(1245);

module.exports = app;