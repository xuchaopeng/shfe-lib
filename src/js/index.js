import '../css/index.scss';
import $ from 'zepto-webpack';
import { cube } from './math';
import print from './print';
import Api from '../api';

const $clickme = $('#clickme');
const $txt = $('#txt');

$clickme.on('click', function() {
  if ($txt.css('display') !== 'none') {
    $txt.hide();
    print('txt is hide!');
  } else {
    $txt.show();
    print('txt is hide!');
  }
});

const $input = $('#J_input');
const $result = $('#J_result');
const $square = $('#J_square');
const $cube = $('#J_cube');

// $square.on('click', () => {
//   $result.text(square($input.val()));
// });
$cube.on('click', () => {
  $result.text(cube($input.val()));
});

console.log('==================检查环境====================');
console.log('环境不同，结果不同：', Api.Data.getData());

console.log('===================检查日志===================');
console.log('发送日志了吗？', Api.Log.sendLog());
