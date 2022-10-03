$(document).ready(function () {
  $(".drop-menu__title").click(function () {
    $(".drop-menu__title a").removeClass("on");
    $(this).find(">a").addClass("on");
    $(this).children(".drop-menu__down").slideUp();
    if ($(this).children(".drop-menu__down").is(":hidden")) {
      $(this).children(".drop-menu__down").slideDown();
    } else {
      $(this).children(".drop-menu__down").slideUp();
    }
    return false;
  });

  $(".drop-menu__txt").click(function () {
    $(".drop-menu__txt a").removeClass("on");
    $(this).find(">a").addClass("on");
    $(this).children(".drop-menu__down__down").slideUp();
    if ($(this).children(".drop-menu__down__down").is(":hidden")) {
      $(this).children(".drop-menu__down__down").slideDown();
    } else {
      $(this).children(".drop-menu__down__down").slideUp();
    }
    return false;
  });

  $(".drop-menu__down__down li").click(function () {
    $(".drop-menu__down__down li a").removeClass("on");
    $(this).find(">a").addClass("on");
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

  ///////////////////메뉴슬라이드로들어오기

  $("#berger").click(function () {
    $("#header-mob").animate({ right: "100%" }, 1000);
    return false;
  });

  $(".close").click(function () {
    $("#header-mob").animate({ right: "-100%" }, 1000);
    return false;
  });
});

////////////////////메뉴화살표토글

$(".drop-menu__title").on({
  click: function () {
    $(this).find("#btn_w").attr("src", "img/mob_gnb_arrow_up_w.png");
  },
});
$(".drop-menu__txt").on({
  click: function () {
    $(this).find("#btn_g").attr("src", "img/mob_gnb_arrow_up_g.png");
  },
});
