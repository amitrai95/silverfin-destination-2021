$(function() {

  window.sr = ScrollReveal({ reset: false });

  sr.reveal('.destPieChart__intro', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    duration: 900
  });

  sr.reveal('.destPieChart__cta', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    duration: 900
  });

  sr.reveal('.destPieChart__bg--1', {
    origin: 'bottom',
    distance: '100px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destPieChart__bg--2', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 800,
  });

  sr.reveal('.destPieChart__bg--3', {
    origin: 'bottom',
    distance: '100px',
    delay: 1200,
    duration: 1500
  });


  var pie_chart_anim;
  var elem = document.getElementById('destPieChart__bodymovin');
  var pieChart_settings = {
    container: elem,
    path: '/hubfs/Tomorrow%20People/destination-page/json/pie-chart/pie-chart.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad:false
    },
    name: "pieChart_anim",
    resizeMode: 'cover'
  };

  pie_chart_anim = bodymovin.loadAnimation(pieChart_settings);

  var waypoint = new Waypoint({
    element: elem,
    handler: function(direction) {
    pie_chart_anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
   },
   offset: '60%' /* string defined in waypoint.js See documentation for more presets */
  })

});
