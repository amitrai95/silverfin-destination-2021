$(function() {

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
    bar_chart_anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
   },
   offset: '60%' /* string defined in waypoint.js See documentation for more presets */
  })



});
