$(function() {

  const openModal = $(".destModal--open");
  const closeModal = $(".destModal--close");
  const modal = $(".destModal");

  $(openModal).click(function(e){
    e.preventDefault();
    $(modal).addClass("active");
    $("body").addClass("overlay overlay--grey prevent-scroll");
  });

  $(closeModal).click(function(){
    $(modal).removeClass("active");
    $("body").removeClass("overlay overlay--grey prevent-scroll")
  });

});
