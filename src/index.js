// import _ from 'lodash';
// import printMe from './print';
// import './index.css';
// import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

async function getComponent() {
  // let ele = document.createElement('h2');
  // let btn = document.createElement('button');
  // let br = document.createElement('br');
  // // ele.innerHTML = _.join(['Hello', 'webpack-dev-server!!!'], ' ');
  // ele.innerHTML = ['Hello webpack!!!', '5 cube is equal to ' + cube(5)].join(
  //   '\n\n'
  // );
  // btn.innerHTML = 'Click me and check the console!!!';
  // btn.onclick = printMe;
  // ele.appendChild(br);
  // ele.appendChild(btn);
  // return ele;

  // return import(/* webpackChunkName: "lodash" */ 'lodash')
  //   .then(({ default: _ }) => {
  //     let element = document.createElement('div');
  //     element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  //     return element;
  //   })
  //   .catch(e => {
  //     'An error occured while loading the component.';
  //   });

  var element = document.createElement('div');
  const {
    default: _
  } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');
  return element;
}
getComponent().then(comp => {
  document.getElementById('root').appendChild(comp);
});
