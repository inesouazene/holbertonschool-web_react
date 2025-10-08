import $ from 'jquery';
import _ from 'lodash';
import './body.css'; 

// compter les clics
let count = 0;

// mettre à jour compteur
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

// debounce la fonction updateCounter avec un délai de 500 ms
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

$('button').on('click', debouncedUpdateCounter);

});
