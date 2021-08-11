const { toPascalCase, toSnakeCase } = require('../../lib/strings');

module.exports = ({ namespace }) => [
  {
    input: /ids-component/g,
    replacer: () => {
      return namespace;
    }
  },
  {
    input: /IdsComponent/g,
    replacer: () => toPascalCase(namespace)
  },
  {
    input: /IDSComponent/g,
    replacer: () => {
      return toPascalCase(namespace).replace('Ids', 'IDS');
    }
  },
  {
    input: /IDS Component/g,
    replacer: () => {
      return toPascalCase(namespace).replace('Ids', 'IDS ');
    }
  },
  {
    input: /Ids Component/g,
    replacer: () => {
      return toPascalCase(namespace).replace('Ids', 'Ids ');
    }
  }
];
