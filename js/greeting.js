/*
//    _  _      _ _    
//   | || |__ _| | |___
//   | __ / _` | | / _ \
//   |_||_\__,_|_|_\___/
*/
const today = new Date();
const hour = today.getHours();
const year = today.getFullYear();
const day = today.getDate();
const month = today.getMonth();

const gree1 = 'Geh Schlafen! ';
const gree2 = 'Guten Morgen! ';
const gree3 = 'Schönen Nachmittag! ';
const gree4 = 'Guten Abend! ';


const valentine = '❤️'
const helloween = '🎃';
const weihnachten = '🌲🎁';
const neuJahr = '🎉';
var special = '';

if(month == 1 && day == 14)
{
	special = valentine;
}
if (month == 9 && day == 31)
{
	special = helloween;
}

if (month == 11 && day >= 24 && day < 27) {
	special = weihnachten;
}

if (hour >= 23 || hour < 5) {
		document.getElementById('title').innerText = gree1 + special;
	} else if (hour >= 6 && hour < 12) {
		document.getElementById('title').innerText = gree2 + special; 
	} else if (hour >= 12 && hour < 17) {
		document.getElementById('title').innerText = gree3 + special;
	} else {
		document.getElementById('title').innerText = gree4 + special;
}
