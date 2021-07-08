$(function() {

  sr.reveal('.destBarChart__intro', {
    origin: 'bottom',
    distance: '100px',
    duration: 1500,
    delay: 500
  });

  sr.reveal('.destBarChart__cta', {
    origin: 'bottom',
    distance: '100px',
    duration: 1800,
    delay: 800
  });

  sr.reveal('.destBarChart__bg--1', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 800,
  });

  sr.reveal('.destBarChart__bg--2', {
    origin: 'bottom',
    distance: '100px',
    delay: 1500,
    duration: 1500
  });


  sr.reveal('.destBarChart__bg--3', {
    origin: 'bottom',
    distance: '100px',
    delay: 1800,
    duration: 1500
  });


  var bar_chart_anim;
  var elem = document.getElementById('destBarChart__bodymovin');
  var barChart_settings = {
    container: elem,
    path: '/hubfs/Tomorrow%20People/destination-page/json/bar-chart/bar-chart.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad:false
    },
    name: "barChart_anim",
    resizeMode: 'cover'
  };

  bar_chart_anim = bodymovin.loadAnimation(barChart_settings);

  var waypoint = new Waypoint({
    element: elem,
    handler: function(direction) {
    bar_chart_anim.play();
   },
   offset: '60%'
  })



});
