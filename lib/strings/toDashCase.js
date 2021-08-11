module.exports = function toDashCase(text) {
  text = text.replace(/[A-Z]/g, text => "-" + text.toLowerCase());
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}
