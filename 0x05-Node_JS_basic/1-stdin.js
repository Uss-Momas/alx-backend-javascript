process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const name_input = process.stdin.read();
    if (name_input !== null) {
      process.stdout.write(`Your name is: ${name_input}`);
    }
  });

process.stdin.on('end', () => { process.stdout.write('This important software is now closing\n'); });