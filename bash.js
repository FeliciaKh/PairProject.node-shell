//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  //if statement
  if (cmd === "pwd") {
    process.stdout.write(process.cwd())
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write(process.cwd())
  process.stdout.write('\nprompt > ');



})

//HELLO 

//ADD A COMMENT

