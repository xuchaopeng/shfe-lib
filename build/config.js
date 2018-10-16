const path = require('path');
const myresolve = p => {
  return path.resolve(__dirname, p);
};

module.exports = {
  common: {
    entry: myresolve('../src/js/index.js'),
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './',
    assetsSubPath: './static'
  },
  dev: {
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: '/',
    assetsSubPath: './static'
  },
  build: {
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './',
    assetsSubPath: './static'
  }
};
