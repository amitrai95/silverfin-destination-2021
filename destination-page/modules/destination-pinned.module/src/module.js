$(function() {

  window.sr = ScrollReveal({ reset: true });

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

});
