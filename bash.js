//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);
  process.stoud.write(process.env.pwd)
  process.stdout.write('\nprompt > ');

  if (cmd === 'pwd') {
    process.env.pwd
  }
})

//HELLO 

//ADD A COMMENT

