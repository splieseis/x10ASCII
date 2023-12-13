const { x10, log, here, test, style, table } = require('./index.js');

console.log(`${x10("x10ASCII")} by Simon Plieseis`);
log("0123456789!=+-\nABCDEFGHIJKLM\nNOPQRSTUVWXY\nZ.(_)$\"@\"%\'?\'[]", ["x10", "green"]);

test(1, ["x10", "blue", "singleArrow"]);
log("Test 2", ["x10", "red"]);
test(3, ["x10", "cyan"]);
log("1 < 3 > 2", ["x10", "magenta"]);
here();
here(1, ["yellow", "bold", "crossedOut"]);
log("Simon Plieseis", ["x10", "red"]);


log("x10ascii v2.0.0.", ["x10", "blue"]);
log("Easily", ["x10", "green"]);
log("log", ["x10", "cyan"]);
log("style", ["x10", "magenta"]);
log("x10", ["x10", "red"]);
log("any string", ["x10", "yellow"]);


const tableData = [
  {
    Name: 'John Smith',
    Age: 30,
    Email: 'john.smith@example.com',
    City: 'New York',
    Country: 'USA',
  },
  {
    Name: 'Alice Johnson',
    Age: 25,
    Email: 'alice.johnson@example.com',
    City: 'Los Angeles',
    Country: 'USA',
  },
  {
    Name: 'Robert Davis',
    Age: 35,
    Email: 'robert.davis@example.com',
    City: 'London',
    Country: 'UK',
  },
  {
    Name: 'Emily Wilson',
    Age: 28,
    Email: 'emily.wilson@example.com',
    City: 'Sydney',
    Country: 'Australia',
  },
  {
    Name: 'Michael Brown',
    Age: 32,
    Email: 'michael.brown@example.com',
    City: 'Chicago',
    Country: 'USA',
  },
  {
    Name: 'Sophia Lee',
    Age: 27,
    Email: 'sophia.lee@example.com',
    City: 'Toronto',
    Country: 'Canada',
  },
  {
    Name: 'Daniel Martinez',
    Age: 29,
    Email: 'daniel.martinez@example.com',
    City: 'Madrid',
    Country: 'Spain',
  },
  {
    Name: 'Olivia Wang',
    Age: 31,
    Email: 'olivia.wang@example.com',
    City: 'Beijing',
    Country: 'China',
  },
  {
    Name: 'William Kim',
    Age: 33,
    Email: 'william.kim@example.com',
    City: 'Seoul',
    Country: 'South Korea',
  },
  {
    Name: 'Linda Garcia',
    Age: 26,
    Email: 'linda.garcia@example.com',
    City: 'Mexico City',
    Country: 'Mexico',
  },
];

const colStyles = [
  ["bold", "green"],
  ["bold", "cyan",],
  ["bold", "magenta", "underline"],
  ["italic", "red"],
  ["bold", "yellow"]
];

table(tableData, colStyles);