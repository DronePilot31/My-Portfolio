$(document).ready(function (){ 
$(window).scroll(function () { 
    var scrollTop = $("html").scrollTop();
      if(scrollTop > 650){
          $("header").addClass("bg-blue");
      }else{
          $("header").removeClass("bg-blue");
      }
    });
    $("#menuMob a").click(function (e) { 
      $("#menuMob").removeClass("d-block")  
    });
  $(".link").click(function (e) {
      e.preventDefault()
      var numSec = $(this).data("sec");
      var section = $("section");
      var offset = $(section[numSec]).offset();
      var top = offset.top;
      var move = top - $("header").height();
      $("html").scrollTop(move);
  });
  // carousel
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });
  // fin carousel
});
