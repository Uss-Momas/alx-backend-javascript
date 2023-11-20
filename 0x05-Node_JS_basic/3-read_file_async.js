const fs = require('fs/promises');

async function countStudents(path) {
    let contents;
    try {
        contents = await fs.readFile(path, 'utf-8')
    } catch (error) {
        throw new Error('Cannot load the database');
    }


    //transform as array and remove the first line (header)
    contents = contents.toString().trim().split('\n').splice(1);

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
    return { numberStudents: contents.length, field_stats };
}

module.exports = countStudents;