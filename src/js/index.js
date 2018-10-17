import '../css/index.css';
import $ from 'zepto-webpack';
import { square, cube } from './math';
import print from './print';

const $clickme = $('#clickme');
const $txt = $('#txt');

$clickme.on('click', function() {
  $txt.hide();
  print('txt is hidden!');
});

const $input = $('#J_input');
const $result = $('#J_result');
const $square = $('#J_square');
const $cube = $('#J_cube');

$square.on('click', () => {
  $result.text(square($input.val()));
});
$cube.on('click', () => {
  $result.text(cube($input.val()));
});
