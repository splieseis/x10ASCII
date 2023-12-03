const { x10, log, here, test } = require('./index.js');

console.log(`${x10("x10ASCII")} by Simon Plieseis`);
log("0123456789!=+-\nABCDEFGHIJKLM\nNOPQRSTUVWXY\nZ.(_)$\"@\"%\'?\'[]", ["x10", "green"]);

test(1, ["x10", "blue", "singleArrow"]);
log("Test 2", ["x10", "red"]);
test(3, ["x10", "cyan"]);
log("1 < 3 > 2", ["x10", "magenta"]);
here();
here(1, ["yellow", "bold", "crossedOut"]);
log("Simon Plieseis", ["x10", "red"]);
