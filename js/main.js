$(document).ready(function(){
  $('#main-menu>li').mouseover(function(){
    $(this).find('#slider').stop().slideDown();
  }).mouseout(function(){
    $(this).find('#slider').stop().slideUp();
  });

})

//#coffee 메뉴//

