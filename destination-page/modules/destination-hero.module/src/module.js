$(function() {

  window.sr = ScrollReveal({ reset: false });

  sr.reveal('.destHero__intro', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    duration: 900
  });

  sr.reveal('.destHero__shape--1', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 500,
  });

  sr.reveal('.destHero__shape--2', {
    origin: 'bottom',
    distance: '100px',
    delay: 1000,
    duration: 1500
  });

  sr.reveal('.destHero__shape--3', {
    origin: 'bottom',
    distance: '100px',
    delay: 1500,
    duration: 1500
  });

  sr.reveal('.destHero__shape--4', {
    origin: 'bottom',
    distance: '100px',
    delay: 2000,
    duration: 1500
  });

  sr.reveal('.destHero__shape--5', {
    origin: 'bottom',
    distance: '100px',
    delay: 2500,
    duration: 1500
  });

});
