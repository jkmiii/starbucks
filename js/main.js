$(document).ready(function(){
  $('#main-menu>li').mouseover(function(){
    $(this).find('#slider').stop().slideDown();
  }).mouseout(function(){
    $(this).find('#slider').stop().slideUp();
  });

  $('#header').load("/header.html");
  $('#footer').load("/footer.html");

})

//#coffee 메뉴//

