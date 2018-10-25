const path = require('path');
const myresolve = p => {
  return path.resolve(__dirname, p);
};
module.exports = {
  dev: {
    port: 8888, // 默认8888
    assetsPublicPath: '/',
    autoOpenBrowser: false,
    errorOverlay: true
  },
  pre: {
    assetsRoot: myresolve('../pre'),
    assetsPublicPath: './'
  },
  build: {
    assetsRoot: myresolve('../dist'),
    assetsPublicPath: './'
  }
};
