module.exports = function toPascalCase(text) {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  return text.substr(0, 1).toUpperCase() + text.substr(1);
}
