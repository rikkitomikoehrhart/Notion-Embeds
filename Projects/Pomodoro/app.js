// Grab HTML elements
const timer = document.getElementById('time');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifty = document.getElementById('fifty'); 
let currentMin = 0;
let currentSec = 0;
let interval = null;
const notification = new Audio('notification.mp3');


function main() {

    five.onclick = function() {startTimer(5, 0)}
    ten.onclick = function() {startTimer(10, 0)}
    fifty.onclick = function() {startTimer(50, 0)}

}

function startTimer(minutes, seconds) {
    currentMin = minutes;
    currentSec = seconds;
    updateTime(currentMin, currentSec);

    interval = setInterval(timerFunc, 1000);

}

function timerFunc() {
    if (currentMin == 0 && currentSec == 0) {
        clearInterval(interval);
        notification.play();
        return;
    }

    if (currentMin >= 0 && currentSec > 0) {
        currentSec -= 1;
    } else if (currentMin >= 0 && currentSec == 0) {
        currentSec = 59;
        currentMin -= 1;
    } else {
        currentMin = 0;
        currentSec = 0;
    }
    

    updateTime(currentMin, currentSec);
}

function updateTime(minutes, seconds) {
    timer.innerHTML = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
    var min = (minutes > 9) ? `${minutes}` : `0${minutes}`;
    var sec = (seconds > 9) ? `${seconds}` : `0${seconds}`;

    return `${min}:${sec}`
}



main();