jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    var wow = new WOW();
      wow.init();
    
      $('[data-toggle="popover"]').popover();
    
    $(".smooth-scroll").click(function(event){
        event.preventDefault();
        var sectionId = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(sectionId).offset().top, 
      },1000,"swing")
    });

    $('.owl-carousel').owlCarousel();

});

$(document).scroll(function(){
  var scrops = $(document).scrollTop();
      if(scrops){
        if(scrops>100){
          $(".navbar").animate({},1000).css("background-color","#333333");
        }
        else{
          $(".navbar").animate({},1000).css("background-color","transparent");
        }
    }
})