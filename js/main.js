$(document).ready(function () {
  $(window).scroll(function () { 
     var scrollTop = $("html").scrollTop();
        if(scrollTop > 650){
            $("header").addClass("bg-blue");
        }else{
            $("header").removeClass("bg-blue");
        }
  }); 
  // carousel
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });
  // fin carousel
});

