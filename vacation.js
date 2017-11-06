// var user = window.prompt('Hi welcome to the VayKay Planner - Whats your name?!');
// var greet = document.getElementById('greeting');
// greet.innerHTML += ", " + user;


var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

var daysEntered = document.getElementById("enterDays");
daysEntered.onclick = calculateDays;

function calculateDays() {
  var daysInput = document.getElementById("days");
  var days = daysInput.value;
  var hours = days * 24;
  var minutes = hours * 60;
  var seconds = minutes * 60;

  var daysMessage = document.getElementById("daysMessage");
  var hoursMessage = document.getElementById("hoursMessage");
  var minutesMessage = document.getElementById("minutesMessage");
  var secondsMessage = document.getElementById("secondsMessage");

  // days message if statement! TODO change to a switch statement
  if(days < 4) {
    daysMessage.innerHTML = "Short trips are always worth it";
  } else if(days < 7){
    daysMessage.innerHTML = "Week long trips are the perfect length";
  }else {
    daysMessage.innerHTML = "Wow, dont forget me when you go :( ";
  }
  // hours messge sits in <p> underneath days
  hoursMessage.innerHTML = "You will be travelling "+hours+" hours.";

  // minutes message sits in <p id="hoursMessage">
  minutesMessage.innerHTML = "You will be travelling "+minutes+" minutes.";

  // seconds ...
  secondsMessage.innerHTML = "You will be travelling "+seconds+" seconds.";

  var timingNext = document.getElementById("timingNext");
  timingNext.removeAttribute("hidden");

}
