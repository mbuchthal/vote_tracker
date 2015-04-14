
$(document).ready(function() {

var Photo = function (location, description) {
  this.location = location;
  this.description = description;
  this.wins;
  this.losses;
  this.winPercent;
};
var kittenArr = [];
kittenArr.push(new Photo('Images/kitten1.jpg', 'Holding a ribbon.'));
kittenArr.push(new Photo('Images/kitten2.jpg', 'Tiny furball in a hand.'));
kittenArr.push(new Photo('Images/kitten3.jpg', 'Too small too climb.'));
kittenArr.push(new Photo('Images/kitten4.jpg', 'Monster-cat!'));
kittenArr.push(new Photo('Images/kitten5.jpg', 'Finger lickin\' good!'));
kittenArr.push(new Photo('Images/kitten6.jpg', 'It\'s been a tough week kitties.'));
kittenArr.push(new Photo('Images/kitten7.jpg', 'I thought it was a litterbox!'));
kittenArr.push(new Photo('Images/kitten9.jpg', 'I can\t be bothered kitty.'));
kittenArr.push(new Photo('Images/kitten9.jpg', 'Leave me alone kitty.'));
kittenArr.push(new Photo('Images/kitten10.jpg', 'Upside down kitty'));
kittenArr.push(new Photo('Images/kitten11.jpg', 'Eating my own tail kitty'));
kittenArr.push(new Photo('Images/kitten12.jpg', 'Never let go Rose, kitty.'));
kittenArr.push(new Photo('Images/kitten13.jpg', 'Take me shopping kitty.'));
kittenArr.push(new Photo('Images/kitten14.jpg', 'Permanently surprised kitty.'));



function getRandomKitty() {  //generate 2 random numbers, if equal, then generate another two
  var num = Math.floor(Math.random() * kittenArr.length);
  console.log(num);
  var num2 = Math.floor(Math.random() * kittenArr.length);
  console.log(num2);
  while (num == num2) {
      var num2 = Math.floor(Math.random() * kittenArr.length);
    }
  $('#kittypic1').append($('<img src="'+ kittenArr[num2].location +'"></img>'));
  $('#kittypic2').append($('<img src="'+ kittenArr[num].location +'"></img>'));
  $('#figcap1').append(kittenArr[num].description);
  $('#figcap2').append(kittenArr[num2].description);
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





});





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
