module.exports = ({ namespace }) => ([
  {
    alias: 'src',
    relativeDir: 'src'
  },
  {
    alias: 'module-src',
    relativeDir: `src/${namespace}`
  },
  {
    alias: 'app',
    relativeDir: 'app'
  },
  {
    alias: 'module-demo',
    relativeDir: `app/${namespace}`
  }
]);
