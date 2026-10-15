
document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  function closeMenu() {
    nav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
  });

  // CLOSE MENU WHEN LINK IS CLICKED
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // CLOSE MENU ON DESKTOP
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });

  // SCROLL REVEAL
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px 40px 0px"
    });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

});
