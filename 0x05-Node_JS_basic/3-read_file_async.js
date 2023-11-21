const fs = require('fs');

async function countStudents(path) {
  try {
    const contents = await fs.promises.readFile(path, 'utf8');
    console.log(contents);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
