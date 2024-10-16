function init() {
  // Random fact
  const factIndex = Math.floor(Math.random() * 7);
  let facts = document.querySelectorAll(".navbar-fact");
  let mobileFacts = document.querySelectorAll(".mobile-fact");

  facts[factIndex].style.display = "block";
  mobileFacts[factIndex].style.display = "block";

  const fadeUpElements = document.querySelectorAll("[data-fade-up]");

  fadeUpElements.forEach((element) => {
    gsap.from(element, {
      y: 24,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: element,
        start: "top 75%",
      },
    });
  });

  let leaveTl = gsap.timeline({ paused: true });
  leaveTl.to(".page-main", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power4.inOut",
  });
  leaveTl.to(
    ".footer",
    {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power4.inOut",
    },
    "<",
  );

  document.querySelectorAll("[data-delay]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      //alert("clicked");
      leaveTl.play();
      var url = link.getAttribute("href");
      setTimeout(function () {
        window.location.href = url;
      }, 1000);
    });
  });

  // Mobile menu animations
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".mobile-overlay");
  const mobileLinks = document.querySelectorAll("[close-nav]");

  let mobileOpen = false;

  gsap.set(menu, {
    height: 0,
  });
  gsap.set(menuOverlay, {
    autoAlpha: 0,
  });

  menu.style.display = "flex";
  menuOverlay.style.display = "flex";
  let mobileTl = gsap.timeline({ paused: true });

  mobileTl.to(menu, {
    height: "auto",
    duration: 0.75,
    ease: "power4.inOut",
  });
  mobileTl.to(
    menuOverlay,
    {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power2.out",
    },
    "<",
  );
  mobileTl.from(
    ".mobile-link",
    {
      y: "-100%",
      duration: 0.65,
      ease: "power3.inOut",
      stagger: 0.07,
    },
    ">-0.225",
  );
  mobileTl.from(
    ".mobile-nav_random-fact",
    {
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.inOut",
    },
    ">-0.15",
  );
  mobileTl.from(
    ".mobile-navbar_contact-container",
    {
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.inOut",
    },
    "<+0.15",
  );

  function handleMobileMenu() {
    if (mobileOpen) {
      //alert("closing");
      mobileTl.timeScale(1.5).reverse();
      mobileOpen = false;
    } else {
      //alert("opening");
      mobileTl.play();
      mobileOpen = true;
    }
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileOpen) {
        mobileTl.timeScale(1.5).reverse();
        mobileOpen = false;
      }
    });
  });

  menuButton.addEventListener("click", () => {
    handleMobileMenu();
  });

  //About link auto scroll.
  let aboutLink = document.querySelector("[about-scroll]");

  aboutLink.onclick = function () {
    lenis.scrollTo("#about");
  };
}

document.addEventListener("DOMContentLoaded", init());
