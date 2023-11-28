const { genASCIIArt } = require('./index.js');

process.stdout.write("\x1b[32m\x1b[1m");
console.log(genASCIIArt("ABCDEFGHIJKLMN\nOPQRSTUVWXYZ\n.(_)-!?$\"@\"%\'+\'"));

process.stdout.write("\x1b[34m\x1b[1m");
console.log(genASCIIArt("by Simon Plieseis"));

process.stdout.write("\x1b[31m\x1b[1m");
console.log(genASCIIArt("Here I"));

process.stdout.write("\x1b[0m\x1b[1m"); // Reset color
console.log("back to normal");

process.stdout.write("\x1b[31m\x1b[1m");
console.log(genASCIIArt("Here II"));

process.stdout.write("\x1b[0m\x1b[1m"); // Reset color
console.log("back to normal");

process.stdout.write("\x1b[32m\x1b[1m");
console.log(`${genASCIIArt("xIO ASCII")} by Simon Plieseis`);

