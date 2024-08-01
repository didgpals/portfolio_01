$(function () {

  // header .depth2
  $(".depth2, .gnb_bg").hide();
  $("#gnb > li").mouseenter(function () {
    $(".depth2,.gnb_bg").stop().fadeIn();
  });
  $("#gnb > li").mouseleave(function () {
    $(".depth2,.gnb_bg").stop().fadeOut();
  });

  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 100) {
      $("#header").addClass("scroll");
    } else {
      $("#header").removeClass("scroll");
    }
  })


  const mb = new Swiper(".mb", {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
  });

  const donate_list = new Swiper(".donate_list", {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
    breakpoints: {
      429: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1320: {
        slidesPerView: 4,
      }
    },
    spaceBetween: 20,
  });

  // 섹션01 마우스호버

  $(".dimd_h").hide();
  $(".donate_list li").mouseenter(function () {
    $(this).find("img, button").hide();
    $(this).find(".dimd_h").show();
  });
  $(".donate_list li").mouseleave(function () {
    $(this).find("img, button").show();
    $(this).find(".dimd_h").hide();
  })


  // 섹션02 탭메뉴
  $(".v_join_list li:not(:first-child)").hide();
  $(".btn_list button").click(function () {
    $(".btn_list button").removeClass("active")
    $(this).addClass("active");
    var i = $(this).index();
    $(".v_join_list li").eq(i).show().siblings('.v_join_list li').hide();
  });

  const btn_list = new Swiper(".btn_list", {
    slidesPerView: 3,
    breakpoints: {
      360: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      }
    },
    spaceBetween: 10,

  })

  // campagin
  const campagin = new Swiper(".campagin_list", {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 60
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    spaceBetween: 35,
    centeredSlides: true,
    loop: true
  });

  // business part
  const b_list = new Swiper(".b_list", {

    pagination: {
      el: '#business .swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
    slidesPerView: 1,
    breakpoints: {
      660: {
        slidesPerView: 2
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".biz-next",
      prevEl: ".biz-prev",
    },
    spaceBetween: 30,
    loop: true,
  });

  // .mobile_ham_menu

  $(".m_gnb li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let i = $(this).index();
    $(".depth2_box .m_depth2").eq(i).show().siblings().hide();
  });
  $(".ham").click(function () {
    $(".m_menu").animate({
      right: 0
    });
  })
  $(".btn_close").click(function () {
    $(".m_menu").animate({
      right: "-100%"
    });
  })
  $(".depth2_box .m_depth2:not(:first-child)").hide();

  // quick-menu
  $(".btn_quick_open").hide();
  $(".btn_quick").click(function () {
    $(".btn_quick_open").fadeIn();
  });
  $(".btn_quick_close").click(function () {
    $(".btn_quick_open").fadeOut();
  })
})