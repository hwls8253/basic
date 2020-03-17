// 상단으로 top
function topAnchor() {
  $('.btn-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });
}

// 메인배너 롤링
function mainBanner() {
  var mainBanner = $('.main-banner');
  mainBanner.owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navContainerClass: 'banner-nav'
  })
}

// 최근본 상품 
function recentBox() {
  $(window).scroll(function() {
    var windowT = $(window).scrollTop();
    if (windowT > 640) {
      $('.recent-box').addClass('fix');
    } else {
      $('.recent-box').removeClass('fix');
    }
  });
}


// 딤 배너 롤링
function dimBanner() {
  var dimBanner = $('.dim-banner');


  var items = $('.dim-banner .box');
  if (items.length > 1) {
    dimBanner.owlCarousel({
      center: true,
      loop: true,
      items: 3,
      margin: 0,
      nav: true,
      dots: true,
      autoWidth: true,
      autoplay: true,
      autoplayTimeout: 4000,
      navContainerClass: 'banner-nav2'
    })
  } else {
    dimBanner.owlCarousel({
      center: true,
      loop: false,
      items: 3,
      autoWidth: true,
      autoplay: true,
    })
  }
}

// 전체 메뉴 , 검색 박스
function navBox() {
  $('.nav .btn-wrap button').click(function() {
    $(this).toggleClass('on').siblings('button').removeClass('on');
    var bodyH = $('body').height() - $('.header').height();
    if ($('.allmenu').hasClass('on')) {
      $('.allmenu-box').addClass('on').height(bodyH);
      $('.sch-box').removeClass('on');
      $('.allmenu-box').click(function(e) {
        if (!$(e.target).closest('.allmenu-con').length) {
          $(".allmenu-box,.allmenu").removeClass("on");
          $(".allmenu-box").height(0);
        }
      });

    } else if ($('.sch-btn').hasClass('on')) {
      $('.sch-box').addClass('on');
      $('.allmenu-box').removeClass('on').height(0);
      $('body').click(function(e) {
        if (!$(e.target).closest('.nav').length) {
          $(".sch-box,.sch-btn").removeClass("on");
        }
      });
    } else {
      $('.allmenu-box,.sch-box').removeClass('on');
      $(".allmenu-box").height(0);
    };
    $('.allmenu-con .depth01 > li').mouseover(function() {
      $(this).addClass('hover').siblings('li').removeClass('hover');
    });
  });
}

// 연관검색어 
function relatedSch() {
  $('.sch-box input').focusin(function() {
    $('.related-sch-box').addClass('active');
  })
  $('.sch-box input').focusout(function() {
    $('.related-sch-box').removeClass('active');
  })
}

// 아코디언
function accordion() {
  $('.accordion .title').click(function() {
    $(this).closest('li').toggleClass('on');
  });
  $('.accordion .chk-box').click(function() {
    $(this).closest('li').click();
  });
}

// qna 아코디언
function qnaAccordion() {
  $('.accordion tr').not('.qna-con').click(function() {
    $(this).next('.qna-con').toggleClass('on');
  });
}

//체크박스 
function allCheck() {
  $("#all-check").click(function() {
    if ($(this).prop("checked")) {
      $(this).parents('.check-wrap').find("input[type=checkbox]").prop("checked", true);
    } else {
      $(this).parents('.check-wrap').find("input[type=checkbox]").prop("checked", false);
    }
  })
  $("input[type='checkbox']:not('#all-check')").click(function() {
    var chkTable = $(this).parents('.check-wrap')
    var snsckLen = chkTable.find("input[type=checkbox]:not('#all-check')").length;
    var snsArr = chkTable.find("input:checked:not('#all-check')").length;
    if (snsckLen == snsArr) {
      chkTable.find("#all-check").prop("checked", true);
    } else {
      chkTable.find("#all-check").prop("checked", false);
    }
  });
}

// radio
function radioChk() {
  $(".radio-wrap .icon-radio").click(function() {
    $(this).siblings('label').click();
  });
}

// 셀렉트
function selectBox() {
  $('.select-wrap .txt').click(function() {
    $(this).parents('.select-wrap').toggleClass('on');
  });
  $(document).on("click", ".option li", function() {
    var text = $(this).text();
    $(this).parents('.select-wrap').find('.txt').text(text);
    $(this).parents('.select-wrap').removeClass('on');
  });
  $('body').click(function(event) {
    if (!$(event.target).closest(".select-warp").length) {
      $(".select-warp").removeClass("on");
    }
  });
}


// tab
function tabContainer() {
  $('.tab-btns a').click(function() {
    $(this).parents('li').addClass('on').siblings().removeClass('on');
    var index = $(this).parents('li').index();
    $('.tab-contents > li').eq(index).addClass('on').siblings().removeClass('on');
  });
}

// 제품 상세페이지 tab
function tabScroll() {
  $('.scroll-btns a').click(function() {
    $(this).parents('li').addClass('on').siblings().removeClass('on');
    var index = $(this).parents('li').index();
    var indexTop = $('.tab-scroll > .con').eq(index).offset().top - 50;
    $('html, body').animate({
      scrollTop: indexTop
    }, 400);
  });
}



// 팝업
function modal() {
  $('.btn-pop').click(function() {
    var modalBox = $(this).attr('data-value');
    $("." + modalBox).addClass("is-visible");
  });
  $('.modal .close-btn').click(function() {
    $(this).parents('.modal-wrap').removeClass('is-visible');
  });
}

// 달력 
function dateBox() {
  $('.date-box input').datepicker({
    language: {
      days: ["일", "월", "화", "수", "목", "금", "토"],
      daysShort: ["1", "2", "3", "4", "5", "6", "7"],
      daysMin: ["일", "월", "화", "수", "목", "금", "토"],
      months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      today: "오늘",
      clear: "맑음",
      dateFormat: "yyyy.mm.dd",
      timeFormat: "hh:ii",
      firstDay: 1,
      buttonImage: "",
      buttonImageOnly: true,
      todayButton: new Date()
    },
    navTitles: {
      days: " <i class='date-pic-year'>yyyy</i>MM"
    },
    autoClose: true,
    showOn: 'button'

  });
  $('.icon-date').click(function() {
    $(this).siblings('.date-box > input').focus();
  });
}

// 댓글 창
function replyBox() {
  $('.reply-btn').click(function() {
    var replyBox = $(this).next('.reply-edit');
    replyBox.toggleClass('on');
  });
}

// 상품 썸네일 롤링
function thumnailRolling() {

  $('.thum-img .img').click(function() {
    $(this).addClass('on');
    $('.thum-img .img').not(this).removeClass('on');
    var imgSrc = $(this).find('img').attr('src');
    $(".thum-large-img > img").attr('src', imgSrc);
  });

  var shopbanner = $('.thumnail.owl-carousel');
  var items = $('.thumnail .thum-img');
  if (items.length > 5) {
    shopbanner.owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      items: 5,
      autoWidth: true,
      autoplay: false,
      margin: 10,
      navContainerClass: 'thum-nav',
      navClass: ['thum-prev', 'thum-next']
    })
  } else {
    shopbanner.owlCarousel({
      loop: false,
      items: 5,
      margin: 10,
      autoWidth: true,
      autoplay: false,
    })

  }
}

// 첨부파일 로딩바
function loadingBar(num) {
  var barWidth = num + '%';
  $('.loading .bar').css('width', barWidth);
  $('.loading .bar').text(barWidth);
}

$(document).ready(function() {
  topAnchor();

  navBox();

  selectBox();

  radioChk();
});