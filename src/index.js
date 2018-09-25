import _ from 'lodash';

function comp() {
  let ele = document.createElement('h2');
  ele.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  return ele;
}

document.getElementById('root').appendChild(comp());
