$(function() {

  window.sr = ScrollReveal({ reset: false });

  sr.reveal('.destTwoCard__intro', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    duration: 900
  });

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

  sr.reveal('.destTwoCard__bg--1', {
    origin: 'bottom',
    distance: '100px',
    delay: 500,
    duration: 1500
  });

  sr.reveal('.destTwoCard__bg--2', {
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    delay: 800,
  });

  sr.reveal('.destTwoCard__bg--3', {
    origin: 'bottom',
    distance: '100px',
    delay: 1200,
    duration: 1500
  });

  sr.reveal('.destTwoCard__bg--4', {
    origin: 'bottom',
    distance: '100px',
    delay: 1500,
    duration: 1500
  });


});
