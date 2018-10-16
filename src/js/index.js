import '../css/index.css';
import $ from 'zepto-webpack';
// import { square, cube } from './math';
import print from './print';

var $clickme = $('#clickme');
var $txt = $('#txt');

$clickme.on('click', function() {
  $txt.hide();
  print('txt is hidden!');
});
