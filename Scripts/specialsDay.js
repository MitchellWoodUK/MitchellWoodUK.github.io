var today = new Date();
var dayNow = today.getDay();
var day = ' ';

console.log(today);
console.log(dayNow);

if (dayNow == 0){
    day = 'Sunday Carvery';
}
else if (dayNow == 1){
    day = 'Moroccan Mondays';
}
else if (dayNow == 2){
    day = 'Tuesdays Burger and a Pint';
}
else if (dayNow == 3){
    day = 'Wednesdays Curry Club';
}
else if (dayNow == 4){
    day = 'Thursdays Steak and Wine';
}
else if (dayNow == 5){
    day = 'Fish Friday';
}
else if (dayNow == 6){
    day = 'Champagne Saturday';
}

console.log(day);
document.getElementById('day').innerHTML = day;
