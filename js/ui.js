$(document).ready(function () {
  respond();
  $(window).on("resize", function () {
    respond();
  });
  $(window).on("scroll", function () {
    scrolled();
  });

  topMenu();
  topMenu_m();
  moMenuAccordion();
  scrolled();
  goTopMove();

  familySiteSelect();
  if ($(".fancybox").length > 0) {
    //fancybox
    Fancybox.bind("[data-fancybox]", {
      // Your options go here
    });
  }
  if ($(".achieve-swiper").length > 0) {
    companyAchievements();
  }
  AOS.init({
    duration: 600,
    once: false,
  });
});
//레니스
// const lenis = new Lenis({
//   autoRaf: true,
// });
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function respond() {
  let w = $("html").width();
  w < 1100 ? mobileLayout() : pcLayout();
}

function mobileLayout() {
  $("html").removeClass("pc").addClass("mobile");
}

function pcLayout() {
  $("html").removeClass("mobile").addClass("pc");
}

function goTopMove() {
  if ($(".go-top").length < 1) {
    return;
  }

  const $btn = $(".go-top");
  const $window = $(window);
  const $footer = $("#footer");
  const bottom_origin = $("html").hasClass("pc") ? 40 : 20;
  const checkY = $("html").hasClass("pc") ? 600 : 300;
  let scrollY = $window.scrollTop();
  let bottom;
  let gap;
  let vh = window.innerHeight * 0.01;
  let window_height = vh * 100;

  $btn.on("click", function (e) {
    e.preventDefault();
    $window.scrollTop(0);
  });

  $window.on("scroll", function () {
    btnPosition();
  });
  $window.on("resize", function () {
    btnPosition();
  });

  function btnPosition() {
    vh = window.innerHeight * 0.01;
    window_height = vh * 100;

    scrollY = $(this).scrollTop();
    scrollY > checkY ? $btn.addClass("on") : $btn.removeClass("on");
    gap = scrollY + window_height - $footer.offset().top;

    if (gap > 0) {
      bottom = gap + bottom_origin;
    } else {
      bottom = bottom_origin;
    }

    $btn.css("bottom", bottom);
  }
}

function scrolled() {
  const $header = $("body:not(.fullpage) #header");
  if ($header.length > 0) {
    if ($(window).scrollTop() > 0) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  }
}

function familySiteSelect() {
  const $siteWrap = $(".f-family-site");
  $siteWrap.children("button").on("click", function () {
    $(this).parent().toggleClass("active");
  });
  $siteWrap.on("mouseleave", function () {
    $(this).removeClass("active");
  });
}

function topMenu() {
  const $ganvLi = $(".gnav-list > li");
  const activeNum = $(".gnav-list > li.active").index();

  $("#gnav").on("mouseleave", function () {
    if (activeNum >= 0) {
      $ganvLi.eq(activeNum).addClass("active");
    }
  });
  $ganvLi.children("a").on("mouseenter", function () {
    $ganvLi.removeClass("active");
    $(this).parent().addClass("active");
  });
  $ganvLi.on("mouseleave", function () {
    $ganvLi.removeClass("active");
  });
}

function topMenu_m() {
  const $btnMenu = $(".m-menu");
  const $btnClose = $(".m-gnav .btn-menu-close");
  const $mMenu = $(".m-gnav");
  const $html = $("html");

  $btnMenu.on("click", function () {
    menuOpen();
  });
  $btnClose.on("click", function () {
    menuClose();
  });

  function menuOpen() {
    $html.css({
      overflow: "hidden",
      "touch-action": "none",
    });
    $mMenu.addClass("active");
  }

  function menuClose() {
    $html.css({
      overflow: "auto",
      "touch-action": "auto",
    });
    $mMenu.removeClass("active");
  }
}
function moMenuAccordion() {
  $(".has-sub > a").click(function (e) {
    e.preventDefault();

    $(this).toggleClass("active");
    $(this).next(".sub-menu").slideToggle();
  });
}

function companyAchievements() {
  let delay = 3000;
  let achievementSwiper = new Swiper(".achieve-swiper", {
    loop: true,
    speed: 600,
    slidesPerView: 5,
    autoplay: {
      delay: delay,
      disableOnInteraction: false,
    },

    observeParents: true,
    observeSlideChildren: true,
  });

  $(".achievement-wrap .btn-swiper-next").on("click", function () {
    achievementSwiper.slideNext();
  });
  $(".achievement-wrap .btn-swiper-prev").on("click", function () {
    achievementSwiper.slidePrev();
  });
}
