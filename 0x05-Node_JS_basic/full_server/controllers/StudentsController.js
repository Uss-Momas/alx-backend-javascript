const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((result) => {
        let message = 'This is the list of our students\n';
        for (const [field, students] of Object.entries(result)) {
          message += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
        response.status(200).send(message);
      })
      .catch((err) => { response.status(200).send(err.message); });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if ((major !== 'CS') && (major !== 'SWE')) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((result) => {
        response.status(200).send(`List: ${result[major].join(', ')}\n`);
      })
      .catch((err) => { response.send(err.message); }).finally(response.status(200));
  }
}

module.exports = StudentsController;
