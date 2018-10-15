import $ from 'zepto-webpack';

var $clickme = $('#clickme');
var $txt = $('#txt');

$clickme.on('click', function() {
  $txt.hide();
});
