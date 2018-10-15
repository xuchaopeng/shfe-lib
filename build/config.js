const path = require('path');
const myresolve = p => {
  return path.resolve(__dirname, p);
};

module.exports = {
  common: {
    entry: myresolve('../src/index.js'),
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './',
    assetsSubPath: './static'
  },
  dev: {
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './',
    assetsSubPath: './static'
  },
  build: {
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './',
    assetsSubPath: './static'
  }
};
