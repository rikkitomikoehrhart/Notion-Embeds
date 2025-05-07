// VARIABLES AND OBJECTS
const affirmations = [
  "I'm here, I'm ready, I'm growing",
  "Every step counts",
  "I'm stronger than I was Monday",
  "I rise through challenge",
  "I'm proud of my progress",
  "I invest in myself today",
  "I refuel my power"
];
const date = new Date();
const dayOfWeek = date.getDay();

function updateClock() {
  setAffirmation();
  setTime();
  setDate();
}

function setAffirmation() {
    document.getElementById("affirmation").innerHTML = `${affirmations[date.getDay()-1]}`;
}

function setTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  document.getElementById("time").innerHTML = `${timeString}`
}

function setDate() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novemebr',
    'December'
  ]
  
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  
  
  
  
  const day = date.getDate();
  const year = date.getFullYear()
  
  document.getElementById('date').innerHTML = `${dayOfWeek} ${month} ${day}, ${year}`
}


updateClock();

setInterval(updateClock, 1000);