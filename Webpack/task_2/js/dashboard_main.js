import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; 

// compter les clics
let count = 0;

// mettre à jour compteur
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  
$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<span id="count"></span>');
$('body').append('<p>Copyright - Holberton School</p>');

// debounce la fonction updateCounter avec un délai de 500 ms
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

$('button').on('click', debouncedUpdateCounter);

});