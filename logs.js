const { x10String, getStyleCodesFromStyles, styleString } = require("./utils.js");

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
  },
  logTablesWithStyles: (table, colStyles) => {
    // get headers from first row and capatalize the first letter
    const headers = Object.keys(table[0]).map(key => key.charAt(0).toUpperCase() + key.slice(1));

    // if an element is not a string, it will be converted to a string
    const data = table.map((row) => {
      return Object.entries(row).map(([key, value]) => {
        if (typeof value !== 'string') {
          return value.toString();
        }
        return value;
      });
    });

    // get obj headerKeys for later
    const headerKeys = Object.keys(data[0]);

    // Determine the maximum width for each column
    const columnWidths = {};
    for (const entry of data) {
      for (const key in entry) {
        if (!columnWidths[key] || entry[key].length > columnWidths[key]) {
          columnWidths[key] = entry[key].length;
        }
      }
    }

    let headerStr = "";
    // Print headers with padding and styles
    for (let i = 0; i < headers.length; i++) {
      const colTitle = headers[i];
      const width = columnWidths[headerKeys[i]];
      const style = colStyles[i];
      headerStr += colTitle.padEnd(width, " ") + "\t";
    }
    console.log(headerStr);                

    // Loop through data and print selected columns
    for (const item of data) {
      let rowStr = "";
      for (let i = 0; i < headers.length; i++) {
        rowStr += styleString(item[headerKeys[i]].padEnd(columnWidths[headerKeys[i]]), colStyles[i]) + "\t";
      }
      console.log(rowStr);
    }
  }
};