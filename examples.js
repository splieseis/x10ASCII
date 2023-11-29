const { x10 } = require('./index.js');

process.stdout.write("\x1b[32m\x1b[1m");
console.log(x10("ABCDEFG\HIJKLMN\nOPQRSTUVWXYZ\n.(_)-!?$\"@\"%\'+\'"));

process.stdout.write("\x1b[34m\x1b[1m");
console.log(x10("by Simon Plieseis"));

process.stdout.write("\x1b[31m\x1b[1m");
console.log(x10("Here I"));

process.stdout.write("\x1b[0m\x1b[1m"); // Reset color
console.log("back to normal");

process.stdout.write("\x1b[31m\x1b[1m");
console.log(x10("Here II"));

process.stdout.write("\x1b[0m\x1b[1m"); // Reset color
console.log("back to normal");

process.stdout.write("\x1b[32m\x1b[1m");
console.log(`${x10("xIO ASCII")} by Simon Plieseis`);
