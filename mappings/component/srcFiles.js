module.exports = ({ namespace }) => [
  {
    alias: 'wc .js',
    targetPath: `src/${namespace}/${namespace}.js`,
    templatePath: 'ids-component/ids-component.js'
  },
  {
    alias: 'wc .d.ts',
    targetPath: `src/${namespace}/${namespace}.d.ts`,
    templatePath: 'ids-component/ids-component.d.ts'
  },
  {
    alias: 'wc .scss',
    targetPath: `src/${namespace}/${namespace}.scss`,
    templatePath: 'ids-component/ids-component.d.ts'
  },
  {
    alias: 'wc README.md',
    targetPath: `src/${namespace}/README.md`,
    templatePath: `ids-component/README.md`
  },
  {
    alias: 'wc-demo index.yaml',
    targetPath: `app/${namespace}/index.yaml`,
    templatePath: `demo-app/ids-component/index.yaml`
  },
  {
    alias: 'wc-demo example.html',
    targetPath: `app/${namespace}/example.html`,
    templatePath: `demo-app/ids-component/example.html`
  },
  {
    alias: 'wc-demo index.html',
    targetPath: `app/${namespace}/index.html`,
    templatePath: `demo-app/ids-component/index.html`
  },
  {
    alias: 'wc-demo index.js',
    targetPath: `app/${namespace}/index.js`,
    templatePath: `demo-app/ids-component/index.js`
  }
];
