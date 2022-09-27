$(document).ready(function () {


    $('.drop-menu__title').click(function(){
      $('.drop-menu__title').removeClass('on');
      $(this).addClass('on');
      $(this).children('.drop-menu__down').slideUp();
      if($(this).children('.drop-menu__down').is(':hidden')){
        $(this).children('.drop-menu__down').slideDown();
      } else{
        $(this).children('.drop-menu__down').slideUp();
      }
      return false;
    });
    
    $('.drop-menu__txt').click(function(){
      $(this).children('.drop-menu__down__down').slideUp();
      if($(this).children('.drop-menu__down__down').is(':hidden')){
        $(this).children('.drop-menu__down__down').slideDown();
      } else{
        $(this).children('.drop-menu__down__down').slideUp();
      }
      return false;
    });

    //////////////드롭다운메뉴끝////////////
/* 
    var giMenuDuration = 700;

    function ShowMenu(){
      $('#header-mob').css({'display' : block});
      $('#header-mob').css({'right' : '-100%'});
      $('#header-mob').animate({right : '0px'}, {duration: giMenuDuration});
    }

    function HideMenu(){
      $('#header-mob').animate({right:'-100%'}, {duration: giMenuDuration, complete:function(){$('#header-mob').css({'display' : 'none'});}})
    }
 */

$('#berger').click(function(){
  $('#header-mob').animate({'right' : '100%'},1000);
  return false;
});

$('.close').click(function(){
  $('#header-mob').animate({'right' : '-100%'},1000);
  return false;
})

  });
