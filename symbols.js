module.exports = {
  space: function(asciiArtObj) {
    for (let i = 0; i < asciiArtObj.length; i++) {
      asciiArtObj[i].push(' ');
    }
    return asciiArtObj;
  },
  dot: function(asciiArtObj) {
    asciiArtObj[0].push("   ");
    asciiArtObj[1].push("   ");
    asciiArtObj[2].push("   ");
    asciiArtObj[3].push("   ");
    asciiArtObj[4].push(" _ ");
    asciiArtObj[5].push("|_|");
    return asciiArtObj;
  },
  underscore: function(asciiArtObj) {
    asciiArtObj[0].push("       ");
    asciiArtObj[1].push("       ");
    asciiArtObj[2].push("       ");
    asciiArtObj[3].push("       ");
    asciiArtObj[4].push(" _____ ");
    asciiArtObj[5].push("|_____|");
    return asciiArtObj;
  },
  dash: function(asciiArtObj) {
    asciiArtObj[0].push("       ");
    asciiArtObj[1].push("       ");
    asciiArtObj[2].push(" _____ ");
    asciiArtObj[3].push("|_____|");
    asciiArtObj[4].push("       ");
    asciiArtObj[5].push("       ");
    return asciiArtObj;
  },
  exclemationMark: function(asciiArtObj) {
    asciiArtObj[0].push(" _ ");
    asciiArtObj[1].push("| |");
    asciiArtObj[2].push("| |");
    asciiArtObj[3].push("|_|");
    asciiArtObj[4].push(" _ ");
    asciiArtObj[5].push("|_|");
    return asciiArtObj;
  },
  questionMark: function(asciiArtObj) {
    asciiArtObj[0].push(" _____ ");
    asciiArtObj[1].push("|___  |");
    asciiArtObj[2].push(" ___| |");
    asciiArtObj[3].push("|  ___|");
    asciiArtObj[4].push("|_|    ");
    asciiArtObj[5].push(" _     ");
    return asciiArtObj;
  },
  slash: function(asciiArtObj) {
    asciiArtObj[0].push("     __");
    asciiArtObj[1].push("    / /");
    asciiArtObj[2].push("   / / ");
    asciiArtObj[3].push("  / /  ");
    asciiArtObj[4].push(" / /   ");
    asciiArtObj[5].push("/_/    ");
    return asciiArtObj;
  },
  backslash: function(asciiArtObj) {
    asciiArtObj[0].push("__     ");
    asciiArtObj[1].push("\\ \\    ");
    asciiArtObj[2].push(" \\ \\   ");
    asciiArtObj[3].push("  \\ \\  ");
    asciiArtObj[4].push("   \\ \\ ");
    asciiArtObj[5].push("    \\_\\");
    return asciiArtObj;
  },
  leftBrace: function(asciiArtObj) {
    asciiArtObj[0].push("   __");
    asciiArtObj[1].push("  / /");
    asciiArtObj[2].push(" / / ");
    asciiArtObj[3].push("|  | ");
    asciiArtObj[4].push(" \\ \\ ");
    asciiArtObj[5].push("  \\_\\");
  },
  rightBrace: function(asciiArtObj) {
    asciiArtObj[0].push("__   ");
    asciiArtObj[1].push("\\ \\  ");
    asciiArtObj[2].push(" \\ \\ ");
    asciiArtObj[3].push(" |  |");
    asciiArtObj[4].push(" / / ");
    asciiArtObj[5].push("/_/  ");
  },
  percent: function(asciiArtObj) {
    asciiArtObj[0].push(" _   __");
    asciiArtObj[1].push("|_| / /");
    asciiArtObj[2].push("   / / ");
    asciiArtObj[3].push("  / /  ");
    asciiArtObj[4].push(" / / _ ");
    asciiArtObj[5].push("/_/ |_|");
    return asciiArtObj;
  },
  dollar: function(asciiArtObj) {
    asciiArtObj[0].push(" __|__ ");
    asciiArtObj[1].push("|  ___|");
    asciiArtObj[2].push("| ||__ ");
    asciiArtObj[3].push("|___  |");
    asciiArtObj[4].push(" __|| |");
    asciiArtObj[5].push("|__|__|");
    return asciiArtObj;
  },
  plus: function(asciiArtObj) {
    asciiArtObj[0].push("       ");
    asciiArtObj[1].push("   _   ");
    asciiArtObj[2].push(" _| |_ ");
    asciiArtObj[3].push("|_   _|");
    asciiArtObj[4].push("  |_|  ");
    asciiArtObj[5].push("       ");
    return asciiArtObj;
  },
  singleQuotationMark: function(asciiArtObj) {
    asciiArtObj[0].push(" _ ");
    asciiArtObj[1].push("| |");
    asciiArtObj[2].push("|_|");
    asciiArtObj[3].push("   ");
    asciiArtObj[4].push("   ");
    asciiArtObj[5].push("   ");
    return asciiArtObj;
  },
  doubleQuotationMark: function(asciiArtObj) {
    asciiArtObj[0].push(" _   _ ");
    asciiArtObj[1].push("| | | |");
    asciiArtObj[2].push("|_| |_|");
    asciiArtObj[3].push("       ");
    asciiArtObj[4].push("       ");
    asciiArtObj[5].push("       ");
    return asciiArtObj;
  },
  atSign: function(asciiArtObj) {
    asciiArtObj[0].push("       ");
    asciiArtObj[1].push(" _____ ");
    asciiArtObj[2].push("|  _  |");
    asciiArtObj[3].push("| | | |");
    asciiArtObj[4].push("| |___|");
    asciiArtObj[5].push("|____  ");
    return asciiArtObj;
  },
  equalSign: function(asciiArtObj) {
    asciiArtObj[0].push("       ");
    asciiArtObj[1].push(" _____ ");
    asciiArtObj[2].push("|_____|");
    asciiArtObj[3].push(" _____ ");
    asciiArtObj[4].push("|_____|");
    asciiArtObj[5].push("       ");
    return asciiArtObj;
  },
  leftSquareBracket: function(asciiArtObj) {
    asciiArtObj[0].push(" _____ ");
    asciiArtObj[1].push("|  ___|");
    asciiArtObj[2].push("| |    ");
    asciiArtObj[3].push("| |    ");
    asciiArtObj[4].push("| |___ ");
    asciiArtObj[5].push("|_____|");
    return asciiArtObj;
  },
  rightSquareBracket: function(asciiArtObj) {
    asciiArtObj[0].push(" _____ ");
    asciiArtObj[1].push("|___  |");
    asciiArtObj[2].push("    | |");
    asciiArtObj[3].push("    | |");
    asciiArtObj[4].push(" ___| |");
    asciiArtObj[5].push("|_____|");
    return asciiArtObj;
  },
  lessThan: function(asciiArtObj) {
    asciiArtObj[0].push("    ");
    asciiArtObj[1].push("  __");
    asciiArtObj[2].push(" / /");
    asciiArtObj[3].push("/ / ");
    asciiArtObj[4].push("\\ \\ ");
    asciiArtObj[5].push(" \\_\\");
  },
  greaterThan: function(asciiArtObj) {
    asciiArtObj[0].push("    ");
    asciiArtObj[1].push("__  ");
    asciiArtObj[2].push("\\ \\ ");
    asciiArtObj[3].push(" \\ \\");
    asciiArtObj[4].push(" / /");
    asciiArtObj[5].push("/_/ ");
  }
};