const { toPascalCase } = require('../../lib/strings');

module.exports = ({ namespace }) => {
  /** excludes "ids-" if present */
  const nonPrefixedNS = (
    namespace.indexOf('ids-') === 0 ? namespace.substr(4) : namespace
  );

  /** excludes "ids-" if present; capitalized */
  const nonPrefixedNSC = `${
    nonPrefixedNS.substr(0, 1).toUpperCase()}${
    nonPrefixedNS.substr(1)
  }`;


  return [
    {
      input: /\{\{ids-component\}\}/g,
      replacer: () => {
        return namespace;
      }
    },
    {
      input: /\{\{component\}\}/g,
      replacer: () => nonPrefixedNS
    },
    {
      input: /\{\{Component\}\}/g,
      replacer: () => nonPrefixedNSC
    },
    {
      input: /\{\{IdsComponent\}\}/g,
      replacer: () => toPascalCase(namespace)
    },
    {
      input: /\{\{IDSComponent\}\}/g,
      replacer: () => toPascalCase(namespace).replace('Ids', 'IDS')
    },
    {
      input: /\{\{IDS Component\}\}/g,
      replacer: () => toPascalCase(namespace).replace('Ids', 'IDS ')
    },
    {
      input: /\{\{Ids Component\}\}/g,
      replacer: () => toPascalCase(namespace).replace('Ids', 'Ids ')
    }
  ];
}
