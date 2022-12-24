/*
//     ___                       
//    / __|___ _ _ ___ _ _  __ _ 
//   | (__/ _ \ '_/ _ \ ' \/ _` |
//    \___\___/_| \___/_||_\__,_|
*/
const api_url = 'https://api.corona-zahlen.org/germany';
async function getCorona(){
    const response = await fetch (api_url);
    const data = await response.json();
    console.log(data);

    const neuInfektionen = data.delta.cases;
    const inzidenz = Math.ceil(data.weekIncidence);
    const tode = data.delta.deaths; 
    console.log(neuInfektionen, inzidenz, tode);

    document.getElementById("neuInfektionen").innerHTML ='Neuinfektionen: +' + neuInfektionen;
    document.getElementById("7tage").innerHTML = '7-Tage-Inzidenz: ' + inzidenz;
    document.getElementById("neuTode").innerHTML = 'Todesfälle: +' + tode;
}
getCorona();