
function init(){

var input = document.getElementById('entryinput');
var output = document.getElementById('textoutput');
var button = document.getElementById('entrybutton');

button.addEventListener('click', function() {
  alert("Julaam Diop: " + input.value);
  output.innerHTML = input.value;
});
}

window.addEventListener('load', init);
