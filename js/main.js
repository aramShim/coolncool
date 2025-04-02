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

  // let $count = $(".main-experiences-wrap .count"); // 카운트할 부분

  // $count.counterUp({
  //   delay: 40,
  //   time: 1000,
  // });
  const counterUp = window.counterUp.default;

  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 2000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 1 });

  document.querySelectorAll(".count").forEach((el) => IO.observe(el));
});

function brandVisualSlider() {
  let delay = 5000;
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
