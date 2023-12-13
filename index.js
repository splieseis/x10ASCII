const { logStyledMessage, logTextWithNumber, logTablesWithStyles } = require('./logs.js');
const { x10String, styleString } = require('./utils.js');

module.exports = {
  x10(string) {
    return x10String(string);
  },
  log(string, styles = []) {
    logStyledMessage(string, styles);
  },
  test(number, styles = ["x10", "red", "doubleArrow"]) {
    logTextWithNumber("TEST", number, styles);
  },
  here(number, styles = ["x10", "green", "doubleArrow"]) {
    logTextWithNumber("HERE", number, styles);
  },
  style(string, styles = ["red"]) {
    return styleString(string, styles);
  },
  table(table, colStyles) {
    logTablesWithStyles(table, colStyles);
  }
};