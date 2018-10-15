// import { square, cube } from "./js/math";

function jq(selector) {
  return document.querySelectorAll(selector);
}

var clickme = jq('#clickme');
var txt = jq('#txt');
clickme.onclick = function() {
  txt.style.display = 'none';
};
