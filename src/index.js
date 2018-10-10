// import _ from 'lodash';
import Print from './js/print';
// import './index.css';
// import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let element = document.createElement('div');
  let button = document.createElement('button');
  let br = document.createElement('br');
  let h2 = document.createElement('h2');

  h2.innerText = join(['Hello', 'webpack!!!!'], ' ');

  button.innerHTML = 'Click me and look at the console!';

  element.appendChild(h2);
  element.appendChild(br);
  element.appendChild(button);

  // button.onclick = e =>
  //   import(/* webpackChunkName: "print" */ './print').then(mod => {
  //     console.log('print mod: ', mod);

  //     let print = mod.default;
  //     print();
  //   });
  button.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}
document.getElementById('root').appendChild(component());
