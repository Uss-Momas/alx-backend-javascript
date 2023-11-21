class StudentsController {
  static getAllStudents(request, response) {
    response.status(200).send('Hello Holberton School!');
  }

  static getAllStudentsByMajor(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = StudentsController;