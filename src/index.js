import _ from 'lodash';
import printMe from './print';

function comp() {
  let ele = document.createElement('h2');
  let btn = document.createElement('button');

  ele.innerHTML = _.join(['Hello', 'webpack!'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  ele.appendChild(btn);

  return ele;
}

document.getElementById('root').appendChild(comp());
