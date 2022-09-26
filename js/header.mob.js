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

    




  /*   $('.drop-menu__title a').click(function(){
      $(this).addClass('on');
    }) */

  });
