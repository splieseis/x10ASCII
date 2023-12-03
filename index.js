const { logStyledMessage, logTextWithNumber } = require('./logs.js');
const { x10String } = require('./utils.js');

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
  }
};