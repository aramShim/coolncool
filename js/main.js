$(window).on("load", function () {
  brandVisualSlider();

  let marquee = $(".marquee").marquee({
    duration: 45000,
    gap: 48,
    delayBeforeStart: 500,
    direction: "left",
    startVisible: true,
    duplicated: true,
  });
  $("ul.logo-wrap").mouseenter(function () {
    marquee.marquee("pause");
  });

  $("ul.logo-wrap").mouseleave(function () {
    marquee.marquee("resume");
  });

  let $count = $(".main-experiences-wrap .count"); // 카운트할 부분

  $count.counterUp({
    delay: 40,
    time: 1000,
  });
});

function brandVisualSlider() {
  let delay = 6965;
  let brandVisual = new Swiper(".brand-visual", {
    loop: true,
    speed: 600,
    // autoplay: {
    //   delay: delay,
    //   disableOnInteraction: false,
    // },
    autoplay: false,

    observeParents: true,
    observeSlideChildren: true,
  });
}
