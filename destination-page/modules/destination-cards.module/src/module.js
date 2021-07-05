$(function() {

  window.sr = ScrollReveal({ reset: false });

  sr.reveal('.destCards__intro', {
    duration: 900
  });

  sr.reveal('.destCards__standfirst', {
    duration: 1100
  });

  sr.reveal('.destCard--1', {
    origin: 'left',
    distance: '150px',
    duration: 1500
  });

  sr.reveal('.destCard--2', {
    origin: 'right',
    distance: '150px',
    duration: 1500
  });

  sr.reveal('.destCard--3', {
    origin: 'left',
    distance: '150px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destCard--4', {
    origin: 'right',
    distance: '150px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destCards__cta', {
    origin: 'bottom',
    distance: '150px',
    delay: 800,
    duration: 1500
  });


  sr.reveal('.destCards__bg--1', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 500,
  });

  sr.reveal('.destCards__bg--2', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 900,
  });

  sr.reveal('.destCards__bg--3', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 1400,
  });

});
