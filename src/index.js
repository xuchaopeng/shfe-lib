import _ from 'lodash';
import printMe from './print';
import './index.css';
import { cube } from './math';

function comp() {
  let ele = document.createElement('h2');
  let btn = document.createElement('button');
  let br = document.createElement('br');

  // ele.innerHTML = _.join(['Hello', 'webpack-dev-server!!!'], ' ');
  element.innerHTML = ['Hello webpack!', '5 cube is equal to ' + cube(5)].join(
    '\n\n'
  );

  btn.innerHTML = 'Click me and check the console!!!';
  btn.onclick = printMe;

  ele.appendChild(br);

  ele.appendChild(btn);

  return ele;
}
let element = comp();
document.getElementById('root').appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.getElementById('root').removeChild(element);
    element = comp();
    document.getElementById('root').appendChild(element);
  });
}
