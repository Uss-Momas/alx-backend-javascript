const fs = require('fs');

function countStudents(path) {

    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }
    if (!fs.statSync(path).isFile()) {
        throw new Error('Cannot load the database');
    }

    // read the contents, transform as array, and remove the first line (header)
    const contents = fs.readFileSync(path, 'utf-8').toString().trim().split('\n').splice(1);

    // array containing the fields names
    let fields = contents.map((line) => {
        line = line.split(',');
        const field = line[line.length - 1];
        return field.trim()
    });

    // object for the stats
    const field_stats = {};

    // remove duplicates
    fields = [... new Set(fields)]

    // initializing the object with the stats for each field
    for (const field of fields) {
        field_stats[field] = { total: 0, listStudens: [] };
    }

    // updating stats for each field
    for (let line of contents) {
        line = line.split(',');
        let field = line[line.length - 1].trim();
        let firstname = line[0].trim();
        field_stats[field].total += 1
        field_stats[field].listStudens.push(firstname);
    }
    // Stats
    // total number of students
    console.log(`Number of students: ${contents.length}`);
    for (const [field, object] of Object.entries(field_stats)) {
        // print total number of students per field, and firstname of each
        console.log(`Number of students in ${field}: ${object.total}. List: ${object.listStudens.join(", ")}`);
    }
}

module.exports = countStudents;