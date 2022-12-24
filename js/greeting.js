/*
//    _  _      _ _    
//   | || |__ _| | |___
//   | __ / _` | | / _ \
//   |_||_\__,_|_|_\___/
*/
const today = new Date();
const hour = today.getHours();

const gree1 = 'Geh Schlafen!';
const gree2 = 'Guten Morgen';
const gree3 = 'Schönen Nachmittag';
const gree4 = 'Guten Abend';

if (hour >= 23 || hour < 5) {
	document.getElementById('title').innerText = gree1;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('title').innerText = gree2;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('title').innerText = gree3;
} else {
	document.getElementById('title').innerText = gree4;
}