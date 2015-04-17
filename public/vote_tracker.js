$(document).ready(function() {

var Photo = function (location, description, vote) {
  this.location = location;
  this.description = description;
  this.vote = vote;
  this.wins = localStorage.getItem('wins') || 0;
  this.losses = localStorage.getItem('losses') || 0;
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
  $('#kittyOneResults').text('This kitty has ' + kittenArr[num].wins + ' wins and ' + kittenArr[num].losses + ' losses!');
  $('#kittyTwoResults').text('This kitty has ' + kittenArr[num2].wins + ' wins and ' + kittenArr[num2].losses + ' losses!');
  $('figure').on('mouseover', function() {  //highlight the hovered pic
    $('this').addClass('highlight');
  $('box-6').addClass('blinker');

  });

  var newChart = document.getElementById('myChart').getContext('2d');
  var chartData = [
    {
      value : 1 + kittenArr[num2].vote,
      color : "#d78dbf",
      highlight: "#c0b095",
      label: "Kitty Two"
    },
    {
      value : 1 + kittenArr[num].vote,
      color : "#94abcd",
      highlight: "#c0b095",
      label: "Kitty One"
    }
  ];
  var chartOptions = {
    segmentShowStroke : true,
    animateScale : true,
    segmentStrokeWidth : 1,
    animateRotate : true
  }
chart = new Chart(newChart).Doughnut(chartData, chartOptions);

  $('img.hover1').on('click', function() {
    kittenArr[num].vote += 1;
    kittenArr[num].wins += 1;
    kittenArr[num2].losses += 1;
    chart.segments[1].value += 1;
    localStorage.setItem('wins1', JSON.stringify(kittenArr[num].wins));
    localStorage.setItem('losses1', JSON.stringify(kittenArr[num2].losses));
    JSON.parse(localStorage.getItem('wins1'));
    JSON.parse(localStorage.getItem('losses1'));
    chart.update();
    $('.box-7').text('Kitty Two!');
    $('.box-6').text('Kitty One Wins!');
    // $('#kittyOneResults').remove();
    $('#kittyOneResults').text('This kitty has ' + JSON.parse(localStorage.getItem('wins1')) + ' wins and ' + JSON.parse(localStorage.getItem('losses1')) + ' losses!');
    $('#kittyTwoResults').text('This kitty has ' + kittenArr[num2].wins + ' wins and ' + kittenArr[num2].losses + ' losses!');
  });

  $('img.hover2').on('click', function() {
    kittenArr[num2].vote += 1;
    kittenArr[num2].wins += 1;
    kittenArr[num].losses += 1;
    chart.segments[0].value += 1;
    localStorage.setItem('wins2', JSON.stringify(kittenArr[num2].wins));
    localStorage.setItem('losses2', JSON.stringify(kittenArr[num].losses));
    JSON.parse(localStorage.getItem('wins2'));
    JSON.parse(localStorage.getItem('losses2'));
    chart.update();
    $('.box-6').text('Kitty One!');
    $('.box-7').text('Kitty Two Wins!');
    // $('#kittyTwoResults').remove();
    $('#kittyTwoResults').text('This kitty has ' + kittenArr[num2].wins + ' wins and ' + kittenArr[num2].losses + ' losses!');
    $('#kittyOneResults').text('This kitty has ' + kittenArr[num].wins + ' wins and ' + kittenArr[num].losses + ' losses!');
  });

  $('button').on('click', function() {
    $('img.hover1').remove();
    $('img.hover2').remove();
    $('figcaption').empty();
    chart.segments[0, 1].value = 1;
    $('.box-6').text('Kitty One!');
    $('.box-7').text('Kitty Two!');
    $('#kittyOneResults').text('');
    $('#kittyTwoResults').text('');
    getRandomKitty();
  })
};

  var chart1;
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
          kittenArr.push(new Photo(imgurList[i].link, imgurList[i].title, imgurList[i].vote));
        })
        console.log(kittenArr);
         chart1 = getRandomKitty();
      })
      .fail(function(err) {
        console.log(err);
  });
});









