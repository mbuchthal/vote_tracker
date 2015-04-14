'use strict'
(function() {

document.addEventListener('onload', function(event) {

var Photo = function (randomKitty, description, wins, losses, winPercent) {
  this.randomKitty = ["kitten1.jpg", "kitten2.jpg", "kitten3.jpg", "kitten4.jpg", "kitten5.jpg", "kitten6.jpg", "kitten7.jpg", "kitten8.jpg", "kitten9.jpg", "kitten10.jpg", "kitten11.jpg", "kitten12.jpg", "kitten13.jpg", "kitten14.jpg"];
  this.description = ['Holding a ribbon.', 'Tiny furball in a hand.', 'Too small too climb.', 'Monster-cat!', 'Finger lickin\' good!', 'It\'s been a tough week kitties.', 'I thought it was a litterbox!', 'I can\t be bothered kitty.', 'Peek-a-boo kitty!', 'Upside down kitty', 'Eating my own tail kitty', 'Never let go Rose, kitty.', 'Take me shopping kitty.', 'Permanently surprised kitty.'];
  this.wins = wins;
  this.losses = losses;
  this.winPercent = function(wins, losses) {
    var percent = this.wins/(this.wins + this.losses);
  }
};
var imageLoc = "images/";
// var kittyOne;
// var kittyTwo;

function getRandomKitty() {  //generate 2 random numbers, if equal, then generate another two
  var num = Math.floor(Math.random() * Photo.randomKitty().length);
  var num2 = Math.floor(Math.random() * Photo.randomKitty().length);
  // if (num !== num2) {
    var kittyOne = randomKitty[num];
    var kittyTwo = randomKitty[num2];
   // } else {
   //  getRandomKitty();
  };

function renderKitty(getRandomKitty) {   //place images into sections
  var elOne = document.getElementById('kittypic1');
  var elTwo = document.getElementById('kittypic2');

  elOne.innerHTML = "<img src='"+ imageLoc + getRandomKitty.kittyOne"' class="kittypics">";
  elTwo.innerHTML = "<img src='"+ imageLoc + getRandomKitty.kittyTwo"' class="kittypics">";
};

function Tracker(wins, losses);
  this.wins = wins;
  this.losses = losses;
  this.tallyResults = function() { //function to show how many wins and %
    var voteOne;
    var voteTwo;

}

var canvas = document.getElementById('catcanvas');
var ctx = canvas.getContext('2d');

var barData = {
  labels: ["Wins", "Losses", "Winning Percentage"],
  datasets: [
    {
      fillColor : "#94ABCD",
      strokeColor : "#69a0cd",
      data : [Tracker.losses]
    },
      fillColor : "#94ABCD",
      strokeColor : "#69a0cd",
      data : [Tracker.wins]
  ]
};

var canvas = document.getElementById('catcanvas').getContext('2d'); // get bar chart canvas
new Chart(canvas).Bar(barData); //draw bar chart

});
})();
