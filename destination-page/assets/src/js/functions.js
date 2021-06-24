$(function() {

  window.sr = ScrollReveal({ reset: false });

  /*************************
  * destination-hero
  *************************/

  sr.reveal('.destHero__intro', {
    origin: 'bottom',
    distance: '100px',
    duration: 1500,
    duration: 900
  });

  sr.reveal('.destHero__shape--1', {
    origin: 'bottom',
    distance: '100px',
    duration: 1500,
  });

  sr.reveal('.destHero__shape--2', {
    origin: 'bottom',
    distance: '100px',
    delay: 100,
    duration: 1500
  });

  sr.reveal('.destHero__shape--3', {
    origin: 'bottom',
    distance: '100px',
    delay: 200,
    duration: 1500
  });

  sr.reveal('.destHero__shape--4', {
    origin: 'bottom',
    distance: '100px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destHero__shape--5', {
    origin: 'bottom',
    distance: '100px',
    delay: 700,
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


  /*************************
  * destination-pinned
  *************************/

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





  /*************************
  * destination-cta-banner
  *************************/

  sr.reveal('.destCTABanner__copy', {
    duration: 1000
  });

  sr.reveal('.destCTABanner__cta', {
    origin: 'bottom',
    distance: '150px',
    duration: 1000
  });


  /*************************
  * destination-two-card
  *************************/

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
