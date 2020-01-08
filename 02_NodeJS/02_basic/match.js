var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("e-mail 주소를 입력하세요.> ", function(answer) {
    console.log(answer);
    r.close();
})

r.setPrompt('> ');
r.prompt();
r.on('line', function(line) {
    if (line === 'exit') {
        r.close();
    }
    console.log(line);
    r.prompt();
});

r.on('close', function() {
    process.exit();
});