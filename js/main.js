$(document).ready(function(){
  $('#main-menu li, #coffee').mouseover(function(){
    $('#coffee').stop().slideDown();
  }).mouseout(function(){
    $('#coffee').stop().slideUp();
  });

})

//#coffee 메뉴//