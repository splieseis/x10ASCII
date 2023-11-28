const {a, b, c, d, e, f, g, h, addI, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } = require( './chars.js' );
const { space, dot, underscore, dash, exclemationMark, questionMark, slash, backslash, leftBrace, rightBrace, percent, dollar, plus, singleQuotationMark, doubleQuotationMark, atSign } = require( './utils.js' );

module.exports = {
  genASCIIArt(string) {
    string = string.toUpperCase();
    let asciiArtObj = [
      [""],
      [""],
      [""],
      [""],
      [""],
      [""]
    ];
    let asciiArtString = "";
    // loop through string and add each character to the asciiArtObj
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char === "\n") {
        for (let i = 0; i < asciiArtObj.length; i++) {
          asciiArtString += Object.values(asciiArtObj[i]).join("");
          asciiArtString += "\n";
        }
        asciiArtObj = [[""],[""],[""],[""],[""],[""]];
        continue;
      } else if (char === " ") {
        space(asciiArtObj);
        space(asciiArtObj);
        continue;
      } else if (char === "A") {
        a(asciiArtObj);
      } else if (char === "B") {
        b(asciiArtObj);
      } else if (char === "C") {
        c(asciiArtObj);
      } else if (char === "D") {
        d(asciiArtObj);
      } else if (char === "E") {
        e(asciiArtObj);
      } else if (char === "F") {
        f(asciiArtObj);
      } else if (char === "G") {
        g(asciiArtObj);
      } else if (char === "H") {
        h(asciiArtObj);
      } else if (char === "I") {
        addI(asciiArtObj);
      } else if (char === "J") {
        j(asciiArtObj);
      } else if (char === "K") {
        k(asciiArtObj);
      } else if (char === "L") {
        l(asciiArtObj);
      } else if (char === "M") {
        m(asciiArtObj);
      } else if (char === "N") {
        n(asciiArtObj);
      } else if (char === "O") {
        o(asciiArtObj);
      } else if (char === "P") {
        p(asciiArtObj);
      } else if (char === "P") {
        p(asciiArtObj);
      } else if (char === "Q") {
        q(asciiArtObj);
      } else if (char === "R") {
        r(asciiArtObj);
      } else if (char === "S") {
        s(asciiArtObj);
      } else if (char === "T") {
        t(asciiArtObj);
      } else if (char === "U") {
        u(asciiArtObj);
      } else if (char === "V") {
        v(asciiArtObj);
      } else if (char === "W") {
        w(asciiArtObj);
      } else if (char === "X") {
        x(asciiArtObj);
      } else if (char === "Y") {
        y(asciiArtObj);
      } else if (char === "Z") {
        z(asciiArtObj);
      } else if (char === ".") {
        dot(asciiArtObj);
      }  else if (char === "_") {
        underscore(asciiArtObj);
      }  else if (char === "-") {
        dash(asciiArtObj);
      } else if (char === "!") {
        exclemationMark(asciiArtObj);
      } else if (char === "?") {
        questionMark(asciiArtObj);
      } else if (char === "/") {
        slash(asciiArtObj);
      } else if (char === "\\") {
        backslash(asciiArtObj);
      } else if (char === "(") {
        leftBrace(asciiArtObj);
      } else if (char === ")") {
        rightBrace(asciiArtObj);
      } else if (char === "%") {
        percent(asciiArtObj);
      } else if (char === "$") {
        dollar(asciiArtObj);
      } else if (char === "+") {
        plus(asciiArtObj);
      } else if (char === "\'") {
        singleQuotationMark(asciiArtObj);
      } else if (char === "\"") {
        doubleQuotationMark(asciiArtObj);
      } else if (char === "@") {
        atSign(asciiArtObj);
      } else {
        space(asciiArtObj);
      }
    }
    for (let i = 0; i < asciiArtObj.length; i++) {
      asciiArtString += Object.values(asciiArtObj[i]).join("");
      asciiArtString += "\n";
    }
    // take out the last \n
    asciiArtString = asciiArtString.slice(0, -1);
    return asciiArtString;
  }
};
