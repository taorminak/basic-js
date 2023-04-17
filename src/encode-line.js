const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str[i] === str[i + count]) {
      count++;
    } else {
      encodedStr += count + str[i];
      count = 1;
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine,
};
