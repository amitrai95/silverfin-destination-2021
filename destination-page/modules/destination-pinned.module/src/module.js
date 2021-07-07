$(function() {

  window.sr = ScrollReveal({ reset: false });

  sr.reveal('.destPinned__graphic', {
    origin: 'left',
    distance: '100px',
    duration: 1200
  });

  sr.reveal('.destPinned__body', {
    origin: 'right',
    distance: '100px',
    duration: 1200
  });


  /* pinned 1 */

  var pinned_1_anim;
  var elem_1 = document.getElementById('destPinned__anim--1');
  var pinned_1_settings = {
    container: elem_1,
    path: '/hubfs/Tomorrow%20People/destination-page/json/pinned/pinned-1/pinned-1.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad:false
    },
    name: "pinned_1_anim",
    resizeMode: 'cover'
  };

  pinned_1_anim = bodymovin.loadAnimation(pinned_1_settings);

  var waypoint = new Waypoint({
    element: elem_1,
    handler: function(direction) {
    pinned_1_anim.play();
   },
   offset: '50%'
  })


  /* pinned 2 */

  var pinned_2_anim;
  var elem_2 = document.getElementById('destPinned__anim--2');
  var pinned_2_settings = {
    container: elem_2,
    path: '/hubfs/Tomorrow%20People/destination-page/json/pinned/pinned-2/pinned-2.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad:false
    },
    name: "pinned_2_anim",
    resizeMode: 'cover'
  };

  pinned_2_anim = bodymovin.loadAnimation(pinned_2_settings);

  var waypoint = new Waypoint({
    element: elem_2,
    handler: function(direction) {
    pinned_2_anim.play();
   },
   offset: '50%'
  })

  /* pinned 3 */

  var pinned_3_anim;
  var elem_3 = document.getElementById('destPinned__anim--3');
  var pinned_3_settings = {
    container: elem_3,
    path: '/hubfs/Tomorrow%20People/destination-page/json/pinned/pinned-3/pinned-3.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad:false
    },
    name: "pinned_3_anim",
    resizeMode: 'cover'
  };

  pinned_3_anim = bodymovin.loadAnimation(pinned_3_settings);

  var waypoint = new Waypoint({
    element: elem_3,
    handler: function(direction) {
    pinned_3_anim.play();
   },
   offset: '50%'
  })



});
