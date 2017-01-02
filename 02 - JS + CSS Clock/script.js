var min = document.getElementsByClassName('min-hand'); min = min[0];
var hour = document.getElementsByClassName('hour-hand'); hour = hour[0];
var sec = document.getElementsByClassName('second-hand'); sec = sec[0];

setInterval(getShift.bind(null, 's', sec), 1000);
setInterval(getShift.bind(null, 'm', min), 1000);
setInterval(getShift.bind(null, 'h', hour), 1000);


function getShift(timeType, el) {
  console.log('called');
  var t = new Date();

  if (timeType === 'h') {
    var shift = (t.getHours()/12) * 360 + 90;
    el.style.transform = `rotate(${shift}deg)`;
  }
  else if (timeType === 'm') {
    var shift = (t.getMinutes()/60) * 360 + 90;
    el.style.transform = `rotate(${shift}deg)`;
  }
  else if (timeType === 's') {
    var shift = (t.getSeconds()/60) * 360 + 90;
    el.style.transform = `rotate(${shift}deg)`;
    console.log('going');
  }
  else return "ERROR";
}

