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
  // load the html file
  let fileContent = fs.readFileSync(filePath, encoding);
  fileContent = fileContent.replace(input, replacer);

  // this will overwrite the original html file, change the path for test
  fs.writeFileSync(filePath, fileContent);
}