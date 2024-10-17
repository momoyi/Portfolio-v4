gsap.registerPlugin(ScrollTrigger);

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight,
  );
}

function initPage() {
  // Intro Section & Session Storage

  let introBlockContainer = document.querySelector(".intro_blocks");
  let introText = document.querySelector(".intro_text");
  let introBlocks = document.querySelectorAll(".intro_block");

  let navbar = document.querySelector(".navbar");
  let footer = document.querySelector(".footer");
  let main = document.querySelector(".page-main");

  gsap.set(introBlockContainer, {
    autoAlpha: 0,
  });

  function calculateIntroHeight() {
    calculatedHeight =
      (introBlockContainer.clientHeight / 2) + 24 + (introText.clientHeight / 2);
  }

  calculateIntroHeight();

  let enterTl = gsap.timeline({ paused: true });
  let enterPersistedTl = gsap.timeline({ paused: true });
  let introTl = gsap.timeline({
    delay: 0.5,
    paused: true,
    onComplete: () => {
      enterTl.play();
    },
  });
  introTl.to(".intro", {
    autoAlpha: 1,
    duration: 0.4,
    ease: "power2.out",
  });
  introTl.to(introText, {
    y: calculatedHeight,
    duration: 0.75,
    ease: "power3.inOut",
  });
  introTl.to(
    introBlockContainer,
    {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power2.inOut",
    },
    "<+0.3",
  );
  introTl.set(
    introBlocks[1],
    {
      autoAlpha: 1,
    },
    ">+0.5",
  );
  introTl.set(
    introBlocks[2],
    {
      autoAlpha: 1,
    },
    ">+0.5",
  );
  introTl.set(
    introBlocks[3],
    {
      autoAlpha: 1,
    },
    ">+0.5",
  );
  introTl.to(".intro", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power2.inOut",
  });

  // ---------Enter Animation
  // Initial setters
  enterTl.set(".navbar_links li", {
    autoAlpha: 0,
    y: "-100%",
  });
  enterTl.set(".navbar_fact", {
    autoAlpha: 0,
    y: "-100%",
  });
  enterTl.set(".navbar_availability", {
    autoAlpha: 0,
    y: "-100%",
  });
  enterTl.set(".menu-button", {
    autoAlpha: 0,
    y: "-100%",
  });
  gsap.set(".project_heading", {
    y: "100%",
  });
  gsap.set(".project-header_item", {
    y: "140%",
  });
  gsap.set(".project-hero_media", {
    filter: "blur(10px)",
    autoAlpha: 0,
  });

  enterTl.set(navbar, {
    autoAlpha: 1,
  });

  if (getWidth() < 480) {
    enterTl.to(".navbar_availability", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    enterTl.to(
      ".menu-button",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "<+0.1",
    );
  } else {
    enterTl.to(".navbar_links li", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.05,
    });
    enterTl.to(
      ".navbar_fact",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "<+0.1",
    );
    enterTl.to(
      ".navbar_availability",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.05,
      },
      "<+0.05",
    );
  }
  enterTl.to(
    main,
    {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "<",
  );
  enterTl.to(
    footer,
    {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "<",
  );
  enterTl.to(
    ".project_heading",
    {
      y: 0,
      duration: 0.75,
      ease: "power3.inOut",
    },
    "<-0.3",
  );
  enterTl.to(
    ".project-header_item",
    {
      y: 0,
      duration: 0.4,
      ease: "power3.inOut",
    },
    "<+0.25",
  );
  enterTl.to(
    ".project-hero_media",
    {
      autoAlpha: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.inOut",
    },
    "<+0.2",
  );

  // Persistent enter animation

  enterPersistedTl.set(navbar, {
    autoAlpha: 1,
  });
  enterPersistedTl.to(
    main,
    {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "<",
  );
  enterPersistedTl.to(
    footer,
    {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "<",
  );
  enterPersistedTl.to(
    ".project_heading",
    {
      y: 0,
      duration: 0.75,
      ease: "power3.inOut",
    },

    "<",
  );
  enterPersistedTl.to(
    ".project-header_item",
    {
      y: 0,
      duration: 0.4,
      ease: "power3.inOut",
    },
    "<+0.25",
  );
  enterPersistedTl.to(
    ".project-hero_media",
    {
      autoAlpha: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.inOut",
    },
    "<+0.2",
  );

  // ----------End of enter animation

  // Function to check if the preloader has been shown
  function hasPreloaderBeenShown() {
    return sessionStorage.getItem("preloaderShown") === "true";
  }

  // Function to set the flag indicating that the preloader has been shown
  function setPreloaderShown() {
    sessionStorage.setItem("preloaderShown", "true");
  }

  function handlePreloader() {
    if (!hasPreloaderBeenShown()) {
      introTl.play();
      // Set the flag to indicate that the preloader has been shown
      setPreloaderShown();
    } else {
      document.querySelector(".intro").style.display = "none";
      enterPersistedTl.play();
    }
  }

  handlePreloader();

  // --------- Page animations
  let shots = document.querySelectorAll(".project-shot_img");
  shots.forEach((shot) => {
    gsap.from(shot, {
      scale: 1.07,
      duration: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: shot,
        start: "top 80%",
        scrub: false,
      },
    });
  });

  // Event Listeners
  document.addEventListener("resize", calculateIntroHeight());
}

window.addEventListener("runsWhenReady", initPage());
