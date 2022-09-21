

  $('#header').load("/header.html");
	$('#footer').load("/footer.html");



$(window).on("load",function(){

  $('#main-menu>li').mouseover(function(){
    $(this).find('#slider').stop().slideDown();
  }).mouseout(function(){
    $(this).find('#slider').stop().slideUp();
  });

})

//#coffee 메뉴//

