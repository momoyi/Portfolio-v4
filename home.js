function initHome() {
  let heroHeading = document.querySelector(".hero_heading-container");
  let heroMedia = document.querySelector(".hero_media");

  function calculateMediaPosition() {
    let distanceFromTop =
      document.querySelector(".hero_container").offsetHeight -
      (heroHeading.offsetTop + heroHeading.offsetHeight) -
      108;

    console.log(distanceFromTop);
    return distanceFromTop;
  }
  gsap.set(heroMedia, {
    y: -1 * calculateMediaPosition(),
  });

  let mediaTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_media-container",
      start: "top bottom",
      end: "180% top",
      scrub: true,
    },
  });

  mediaTl.to(heroMedia, {
    y: 0,
    width: "100%",
  });
  mediaTl.to(
    ".hero_contact",
    {
      autoAlpha: 0,
    },
    "<",
  );
  mediaTl.fromTo(
    ".hero-media_link",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
    },
    "<+0.2",
  );
}

document.addEventListener("DOMContentLoaded", initHome());
