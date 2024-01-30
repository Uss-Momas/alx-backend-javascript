import readDatabase from '../utils';

const PATH = process.argv[2];

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fieldInfo = await readDatabase(PATH);

      const messages = ['This is the list of our students'];

      for (const [field, object] of Object.entries(fieldInfo)) {
        messages.push(`Number of students in ${field}: ${object.total}. List: ${object.list.join(', ')}`);
      }
      return response.send(messages.join('\n'));
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const fieldInfo = await readDatabase(PATH);

      return response.send(`List: ${fieldInfo[major].list.join(', ')}`);
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }
}
