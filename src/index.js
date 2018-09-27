import _ from 'lodash';
// import printMe from './print';
// import './index.css';
// import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let element = document.createElement('div');
  let button = document.createElement('button');
  let br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!!!';

  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e =>
    import(/* webpackChunkName: "print" */ './print').then(mod => {
      console.log('print mod: ', mod);

      let print = mod.default;
      print();
    });

  return element;
}
document.getElementById('root').appendChild(component());
