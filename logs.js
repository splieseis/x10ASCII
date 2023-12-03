const { x10String, getStyleCodesFromStyles } = require("./utils.js");

module.exports = {
  logStyledMessage: (message, styles = []) => {
    if (styles.includes("x10")) {
      message = x10String(message);
    }
    let styleCodes = getStyleCodesFromStyles(styles);
    message = `${styleCodes}${message}\x1b[0m`; // Reset at the end
    console.log(message);
  },
  logTextWithNumber: (message = "TEST", number = 0, styles = ["red", "x10"]) => {
    let text = "";
    if (styles.includes("noArrow")) {
      text = `${message} ${number}`;
    } else if (styles.includes("doubleArrow")) {
      text = `===) ${message} ${number} (===`;
    } else if (styles.includes("singleArrow")) {
      text = `---> ${message} ${number} <---`;
    } else {
      text = `${message} ${number}`;
    }
    module.exports.logStyledMessage(text, styles);
  }
};