$(document).ready(function () {
  respond();
  $(window).on("resize", function () {
    respond();
    if ($(".achieve-swiper").length > 0) {
      achievementSwiper.destroy();
      companyAchievements();
    }
  });
  $(window).on("scroll", function () {
    scrolled();
  });

  if ($("html.pc").length > 0) {
    topMenu();
  }
  if ($("html.mobile").length > 0) {
    console.log(1);
    topMenu_m();
  }

  scrolled();

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
    once: true,
  });
});
//레니스
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
  $(".header-dev").removeClass("active");
}

function scrolled() {
  const $header = $(".header-dev");
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
  $(".has-sub > a").click(function (e) {
    const $this = $(this);
    const $thisHref = $this.attr("href");
    if ($thisHref == "#") {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

function topMenu_m() {
  console.log(2);
  const $btnMenu = $(".m-menu");
  const $mMenu = $(".header-dev");

  $btnMenu.on("click", function () {
    $(this).find(".toggle-menu").toggleClass("on");
    $mMenu.toggleClass("active");
    $("html, body").toggleClass("overflow-hidden-active");
  });

  $(".has-sub > a").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $this = $(this);
    var $li = $this.closest("li.has-sub");
    var $subMenu = $li.find(".sub-menu");

    if ($li.hasClass("active")) {
      $subMenu.slideUp();
      $li.removeClass("active");
    } else {
      console.log($subMenu);
      $subMenu.slideDown();
      $li.addClass("active");
    }
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
    breakpoints: {
      768: {
        //브라우저가 768보다 클때
        slidesPerView: 2,
      },

      1024: {
        //브라우저가 1024보다 클때
        slidesPerView: 3,
      },
    },
  });

  $(".achievement-wrap .btn-swiper-next").on("click", function () {
    achievementSwiper.slideNext();
  });
  $(".achievement-wrap .btn-swiper-prev").on("click", function () {
    achievementSwiper.slidePrev();
  });
}
