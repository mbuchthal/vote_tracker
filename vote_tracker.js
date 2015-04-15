$(document).ready(function() {

var Photo = function (location, description) {
  this.location = location;
  this.description = description;
  this.wins;
  this.losses;
  this.winPercent;
};
var kittenArr = [];

// kittenArr.push(new Photo('Images/kitten1.jpg', 'Holding a ribbon.'));
// kittenArr.push(new Photo('Images/kitten2.jpg', 'Tiny furball in a hand.'));
// kittenArr.push(new Photo('Images/kitten3.jpg', 'Too small too climb.'));
// kittenArr.push(new Photo('Images/kitten4.jpg', 'Monster-cat!'));
// kittenArr.push(new Photo('Images/kitten5.jpg', 'Finger lickin\' good!'));
// kittenArr.push(new Photo('Images/kitten6.jpg', 'It\'s been a tough week kitties.'));
// kittenArr.push(new Photo('Images/kitten7.jpg', 'I thought it was a litterbox!'));
// kittenArr.push(new Photo('Images/kitten9.jpg', 'I can\t be bothered kitty.'));
// kittenArr.push(new Photo('Images/kitten9.jpg', 'Leave me alone kitty.'));
// kittenArr.push(new Photo('Images/kitten10.jpg', 'Upside down kitty'));
// kittenArr.push(new Photo('Images/kitten11.jpg', 'Eating my own tail kitty'));
// kittenArr.push(new Photo('Images/kitten12.jpg', 'Never let go Rose, kitty.'));
// kittenArr.push(new Photo('Images/kitten13.jpg', 'Take me shopping kitty.'));
// kittenArr.push(new Photo('Images/kitten14.jpg', 'Permanently surprised kitty.'));

// var images;

function getRandomKitty() {  //generate 2 random numbers, if equal, then generate another two
  var num = Math.floor(Math.random() * kittenArr.length);
  console.log(num);
  var num2 = Math.floor(Math.random() * kittenArr.length);
  console.log(num2);
  while (num == num2) {
      var num2 = Math.floor(Math.random() * kittenArr.length);
    }


  $('#kittypic1').append($('<img src="'+ kittenArr[num].location +'"></img>')); //renders the pictures
  $('#kittypic2').append($('<img src="'+ kittenArr[num2].location +'"></img>'));
  $('#figcap1').append(kittenArr[num].description);  //renders the captions
  $('#figcap2').append(kittenArr[num2].description);
  $('figure').on('mouseover', function() {  //highlight the hovered pic
    $('this').addClass('highlight');
  });


function Tracker () {
  $('#kittypic1').on('click'), function() {
    kittenArr[num].wins += 1;
    kittenArr[num2].losses += 1;
  }
  $('#kittypic2').on('click'), function() {
    kittenArr[num2].wins += 1;
    kittenArr[num].losses += 1;
    }
  }
};

$.ajax({
    url: 'https://api.imgur.com/3/album/yNZqw.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 05ed6615f30f853'
    }
  })
    .done(function(res) {
      $(res.data.images).each(function(i) {
        var imgurList = res.data.images;
        kittenArr.push(new Photo(imgurList[i].link, imgurList[i].title));
      })
       getRandomKitty();
    })
    .fail(function(err) {
      console.log(err);
  });
});

// var ctx = $("#myChart").get(0).getContext("2d");
// var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);
// var data = [
//     {
//         value: 300,
//         color:"#F7464A",
//         highlight: "#FF5A5E",
//         label: "Red"
//     },
//     {
//         value: 50,
//         color: "#46BFBD",
//         highlight: "#5AD3D1",
//         label: "Green"
//     },
//     {
//         value: 100,
//         color: "#FDB45C",
//         highlight: "#FFC870",
//         label: "Yellow"
//     }
// ]







