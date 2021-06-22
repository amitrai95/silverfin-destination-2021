$(function() {

  window.sr = ScrollReveal({ reset: true });

  /*************************
  * destination-hero
  *************************/

  sr.reveal('.destHero__title', { duration: 900 });

  sr.reveal('.destHero__bg--1', {
    origin: 'bottom',
    distance: '100px',
    duration: 1500
  });

  sr.reveal('.destHero__bg--2', {
    origin: 'bottom',
    distance: '100px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destHero__bg--3', {
    origin: 'bottom',
    distance: '100px',
    delay: 800,
    duration: 1500
  });

  sr.reveal('.destHero__bg--4', {
    origin: 'bottom',
    distance: '100px',
    delay: 1100,
    duration: 1500
  });

  sr.reveal('.destHero__bg--5', {
    origin: 'bottom',
    distance: '100px',
    delay: 1400,
    duration: 1500
  });


  /*************************
  * destination-cards
  *************************/

  sr.reveal('.destCards__header', {
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


});
