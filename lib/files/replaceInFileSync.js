const fs = require('fs');

/**
 * @param {string} filePath
 * @param {{
 *  input: RegExp,
 *  output: ({ namespace }, RegExpMatchArray)=> string
 * }} replacementEntry
 */
module.exports = function replaceInFileSync({
  filePath,
  input,
  replacer,
  encoding='utf-8'
}) {
  let fileContent = fs.readFileSync(filePath, encoding);
  fileContent = fileContent.replace(input, replacer);
  fs.writeFileSync(filePath, fileContent);
}