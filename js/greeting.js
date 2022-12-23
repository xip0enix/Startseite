const today = new Date();
const hour = today.getHours();

const gree1 = 'Guten Morgen';
const gree2 = 'Schönen Nachmittag';
const gree3 = 'Guten Abend';
const gree4 = 'Geh schlafen';

if (hour >= 23 || hour < 5) {
	document.getElementById('title').innerText = gree1;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('title').innerText = gree2;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('title').innerText = gree3;
} else {
	document.getElementById('title').innerText = gree4;
}