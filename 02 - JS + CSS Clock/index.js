const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // seconds
  const sec = now.getSeconds();
  const secDeg = ((sec/60) * 360) + 90; // since rotation begins at 90 deg
  secHand.style.transform = `rotate(${secDeg}deg)`;

  // minutes 
  const min = now.getMinutes(); 
  const minDeg = ((min/60) * 360) + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  // hours 
  const hour = now.getHours();
  const hourDeg = ((hour/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  
  document.getElementById('time').innerHTML = now;
}

setInterval(setDate, 1000); // every 1 second