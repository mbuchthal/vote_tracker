// (function() {

// document.addEventListener('onload', function(event) {
var randomKitty = ['Images/kitten1.jpg', 'Images/kitten2.jpg', 'Images/kitten3.jpg', 'Images/kitten4.jpg', 'Images/kitten5.jpg', 'Images/kitten6.jpg', 'Images/kitten7.jpg', 'Images/kitten8.jpg', 'Images/kitten9.jpg', 'Images/kitten10.jpg', 'Images/kitten11.jpg', 'Images/kitten12.jpg', 'Images/kitten13.jpg', 'Images/kitten14.jpg'];
var Photo = function (wins, losses, winPercent) {
  // var randomKitty = ['kitten1.jpg', 'kitten2.jpg', 'kitten3.jpg', 'kitten4.jpg', 'kitten5.jpg', 'kitten6.jpg', 'kitten7.jpg', 'kitten8.jpg', 'kitten9.jpg', 'kitten10.jpg', 'kitten11.jpg', 'kitten12.jpg', 'kitten13.jpg', 'kitten14.jpg'];
  // var description = ['Holding a ribbon.', 'Tiny furball in a hand.', 'Too small too climb.', 'Monster-cat!', 'Finger lickin\' good!', 'It\'s been a tough week kitties.', 'I thought it was a litterbox!', 'I can\t be bothered kitty.', 'Peek-a-boo kitty!', 'Upside down kitty', 'Eating my own tail kitty', 'Never let go Rose, kitty.', 'Take me shopping kitty.', 'Permanently surprised kitty.'];
  var wins = wins;
  var losses = losses;
  var winPercent = function(wins, losses) {
    var percent = this.wins/(this.wins + this.losses);
  }
};

var imageLoc = 'Images/';

function getRandomKitty() {  //generate 2 random numbers, if equal, then generate another two
  var num = Math.floor(Math.random() * randomKitty.length);
  var num2 = Math.floor(Math.random() * randomKitty.length);
  while (num == num2) {
      var num2 = Math.floor(Math.random() * randomKitty.length);
    }
  var kittyOne = document.createElement('img');
  var kittyTwo = document.createElement('img');
  kittyOne.src = randomKitty[num];
  kittyTwo.src = randomKitty[num2];
  document.getElementById('kittypic1').appendChild(kittyOne);
  document.getElementById('kittypic2').appendChild(kittyTwo);
};


  getRandomKitty();

function Tracker(wins, losses) {
  this.wins = wins;
  this.losses = losses;
  this.tallyResults = function() { //function to show how many wins and %
    var voteOne;
    var voteTwo;
  }
}

// var canvas = document.getElementById('catcanvas');
// var ctx = canvas.getContext('2d');

// var barData = {
//   labels: ["Wins", "Losses", "Winning Percentage"],
//   datasets: [
//     {
//       fillColor : "#94ABCD",
//       strokeColor : "#69a0cd",
//       data : [Tracker.losses]
//     },
//       fillColor : "#94ABCD",
//       strokeColor : "#69a0cd",
//       data : [Tracker.wins]
//   ]
// };

// var canvas = document.getElementById('catcanvas').getContext('2d'); // get bar chart canvas
// new Chart(canvas).Bar(barData); //draw bar chart

// });

// })();
