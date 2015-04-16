$(document).ready(function() {

var Photo = function (location, description) {
  this.location = location;
  this.description = description;
  this.wins;
  this.losses;
  this.winPercent;
};
var kittenArr = [];

function getRandomKitty() {  //generate 2 random numbers, if equal, then generate another two
  var num = Math.floor(Math.random() * kittenArr.length);
  console.log(num);
  var num2 = Math.floor(Math.random() * kittenArr.length);
  console.log(num2);
  while (num == num2) {
      var num2 = Math.floor(Math.random() * kittenArr.length);
    }
  $('#kittypic1').append($('<img src="'+ kittenArr[num].location + '"class="hover1"></img>')); //renders the pictures
  $('#kittypic2').append($('<img src="'+ kittenArr[num2].location + '"class="hover2"></img>'));
  $('#figcap1').append(kittenArr[num].description);  //renders the captions
  $('#figcap2').append(kittenArr[num2].description);
  $('figure').on('mouseover', function() {  //highlight the hovered pic
    $('this').addClass('highlight');
  });

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

  var newChart = document.getElementById('myChart').getContext('2d');
  var chartData = [
    {
      value : 1,
      color : "#d78dbf",
      highlight: "#c0b095",
      label: "Kitty Two"
    },
    {
      value : 1,
      color : "#94abcd",
      highlight: "#c0b095",
      label: "Kitty One"
    }
  ];
  var chartOptions = {
    segmentShowStroke : false,
    animateScale : true,
  }
  chart = new Chart(newChart).Doughnut(chartData, chartOptions);

});









