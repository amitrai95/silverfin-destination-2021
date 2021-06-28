$(function() {

  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.destTwoCrd--1', {
    origin: 'left',
    distance: '150px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destTwoCrd--2', {
    origin: 'right',
    distance: '150px',
    delay: 500,
    duration: 1500
  });

});
