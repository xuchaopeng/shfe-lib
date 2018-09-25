import _ from 'lodash';
import './index.css';
import dz from './dz.gif';

function comp() {
  let ele = document.createElement('h2');
  ele.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  // 新增样式
  ele.classList.add('hello');

  // 添加图片文件
  let dzImg = new Image();
  dzImg.src = dz;
  ele.appendChild(dzImg);
  return ele;
}

document.getElementById('root').appendChild(comp());
