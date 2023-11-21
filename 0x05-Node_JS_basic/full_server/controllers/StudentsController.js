const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((result) => {
        const message = ['This is the list of our students'];
        const studentsByField = result;

        for (const [field, list] of Object.entries(studentsByField)) {
          message.push(
            `Number of students in ${field}: ${list.length}. List: ${list.join(
              ', ',
            )}`,
          );
        }
        response.status(200).send(message.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((studentsByField) => {
        response.status(200).send(`List: ${studentsByField[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
