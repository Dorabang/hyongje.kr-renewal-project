$(document).ready(function () {


  // aos
  AOS.init();


  // gotop
  $('.gotop').hide();
  
  $('.gotop').click(function(){
    $('html').animate({
      scrollTop : 0
    },500);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.gotop').fadeIn();
    }
    else {
      $('.gotop').fadeOut();
    }
  });


  // header fix
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#header').addClass('fix');
    } else {
      $('#header').removeClass('fix');
    }
  });


  // popup
  $('.popup_close').click(function () {
    $('.popup').slideUp();
  });
  

  // depth2
  $('.depth2').hide();
  $('.gnb > li').hover(function() {
    $(this).find('.depth2').stop().fadeToggle();
  });

});