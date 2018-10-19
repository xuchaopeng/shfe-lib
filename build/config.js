const path = require('path');
const myresolve = p => {
  return path.resolve(__dirname, p);
};
module.exports = {
  dev: {
    assetsPublicPath: '/',
    autoOpenBrowser: false
  },
  pre: {
    assetsRoot: myresolve('../pre'),
    assetsPublicPath: './',
    cssImgPath: '/'
  },
  build: {
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './',
    cssImgPath: '/'
  }
};
