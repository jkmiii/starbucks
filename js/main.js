

  $('#header').load("/header.html");
	$('#footer').load("/footer.html");
	$('#header-mob').load("/header-mob.html");




$(window).on("load",function(){

  $('#main-menu>li').mouseover(function(){
    $(this).find('#slider').stop().slideDown();
  }).mouseout(function(){
    $(this).find('#slider').stop().slideUp();
  });

})

//#coffee 메뉴끝//


$('#next').on('click', function() {
  $('.slide__banner').css('transform', 'translateX(-819px)');
});

$('#prev').on('click', function() {
  $('.slide__banner').css('transform', 'translateX(819px)');
});




/* $(document).ready(function(){
  $('#prev').click(function(){
    $('.slide__banner').animate({
      left:819
    });
  });
  $('#next').click(function(){
    $('.slide__banner').animate({
      left:-829
    });
  });


})
 */



$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  speed: 1000,
  arrows : true, 	
});
