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

  timingNext.onclick = function() {
    document.getElementById("budgetSection").removeAttribute("hidden");
  }

}
var budgetClick = document.getElementById("enterBudget");
budgetClick.onclick = calculateBudget;

function calculateBudget() {
  var spendingMoney = document.getElementById("tripBudget");
  var tripBudget = spendingMoney.value;
  var conversion = tripBudget * 1.45;
  var moneyPerDay = conversion / 10;

  var tripExchangeMsg = document.getElementById("tripExchangeMsg");
  tripExchangeMsg.innerHTML = "you should have "+conversion+" NZD to spend.";

  var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
  dailyExchangeMsg.innerHTML = "you can spend $"+moneyPerDay+" NZD and that should last you the trip"

  // daily item of 10 costs x in conversion
  var smallItemMsg = document.getElementById("exchange10Msg");
  smallItemMsg.innerHTML = "An item costing 10 dollars in US will be 14.5 NZD";

  // big ticket item 500 cost x in conversion
  var bigItemMsg = document.getElementById("exchange500Msg");
  bigItemMsg.innerHTML = "An item costing 500 dollars in US will be 725 NZD";

}

var images = ["images/image1", "images/image2", "images/image3", "images/image4"];
var currentImage = 3;

setInterval(changeImage, 3000);

function changeImage(){
  currentImage = currentImage + 1;
  if(currentImage > images.length - 1){
      currentImage = 0;
  }
  document.body.style.backgroundImage = "url(" + images[currentImage] + ".jpg)";
}
