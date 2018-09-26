import _ from 'lodash';
import printMe from './print';
import './index.css';
import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function comp() {
  let ele = document.createElement('h2');
  let btn = document.createElement('button');
  let br = document.createElement('br');

  // ele.innerHTML = _.join(['Hello', 'webpack-dev-server!!!'], ' ');
  ele.innerHTML = ['Hello webpack!!!', '5 cube is equal to ' + cube(5)].join(
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
