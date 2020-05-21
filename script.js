// Nav Bar
const header = document.querySelector(".nav-wrapper");

setTimeout(function clearHeaderColor() {
  header.classList.remove("nav-scrolled-background");
  header.classList.remove("nav-scrolled-skills");
  header.classList.remove("nav-scrolled-experience");
  header.classList.remove("nav-scrolled-projects");
  console.log("header cleared");
}, 850);

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-wrapper-links");
const navLinks = document.querySelectorAll(".nav-wrapper-links a");
//Burger

const navSlide = () => {
  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    btnNavSlide();
    //links animate
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 500ms ease forwards ${
    //       index / 5 + 0.2
    //     }s`;

    //     link.style.color = "white";
    //     // console.log(index / 5 + 0.05);
    //   }
    // });
    //Burger animate
    burger.classList.toggle("toggle");
  });
};

function btnNavSlide() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 500ms ease forwards ${
        index / 9 + 0.1
      }s`;

      link.style.color = "white";
      // console.log(index / 5 + 0.05);
    }
  });
}

navSlide();

// Nav Button Click
function nav_introTrans() {
  setTimeout(function () {
    header.classList.remove("nav-scrolled-background");
    header.classList.remove("nav-scrolled-skills");
    header.classList.remove("nav-scrolled-experience");
    header.classList.remove("nav-scrolled-projects");
    header.classList.add("nav-scrolled-intro");
  }, 500);
}

function nav_backgTrans() {
  setTimeout(function () {
    header.classList.remove("nav-scrolled-skills");
    header.classList.remove("nav-scrolled-experience");
    header.classList.remove("nav-scrolled-projects");
    header.classList.add("nav-scrolled-background");
  }, 800);
}

function nav_skillsTrans() {
  setTimeout(function () {
    header.classList.remove("nav-scrolled-experience");
    header.classList.remove("nav-scrolled-projects");
  }, 800);
}

const buttons = document.querySelectorAll("a");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    btnNavSlide();

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    console.log("ripples fired");
    setTimeout(() => {
      ripples.remove();
    }, 600);
  });
});

// Scroll

const section1 = document.querySelector(".landing-page-section");
const section2 = document.querySelector("#intro-section");
const section3 = document.querySelector("#background-section");
const section4 = document.querySelector("#skills-section");
const section5 = document.querySelector("#experience-section");

const sectionScrollOptions = {
  rootMargin: "-10px 0px 0px 0px",
};

// const sectionOneOptions = {
//   rootMargin: "0px 0px 0px 0px",
// };

// const sectionTwoOptions = {
//   rootMargin: "0px 0px 0px 0px",
// };

//Landing Page

const section1Observer = new IntersectionObserver(function (
  entries,
  section1Observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled-intro");
    } else {
      header.classList.remove("nav-scrolled-intro");
      header.classList.remove("nav-scrolled-background");
      header.classList.remove("nav-scrolled-skills");
      header.classList.remove("nav-scrolled-experience");
      header.classList.remove("nav-scrolled-projects");
    }
  });
},
sectionScrollOptions);

section1Observer.observe(section1);

//Intro Page

const section2Observer = new IntersectionObserver(function (
  entries,
  section2Observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled-background");
    } else {
      header.classList.remove("nav-scrolled-background");
      header.classList.remove("nav-scrolled-skills");
      header.classList.remove("nav-scrolled-experience");
      header.classList.remove("nav-scrolled-projects");
    }
  });
},
sectionScrollOptions);

section2Observer.observe(section2);

// Background Page

const section3Observer = new IntersectionObserver(function (
  entries,
  section3Observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled-skills");
    } else {
      header.classList.remove("nav-scrolled-skills");
      header.classList.remove("nav-scrolled-experience");
      header.classList.remove("nav-scrolled-projects");
    }
  });
},
sectionScrollOptions);

section3Observer.observe(section3);

// Skills Page

const section4Observer = new IntersectionObserver(function (
  entries,
  section4Observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled-experience");
    } else {
      header.classList.remove("nav-scrolled-experience");
      header.classList.remove("nav-scrolled-projects");
    }
  });
},
sectionScrollOptions);

section4Observer.observe(section4);

// Experience Page

const section5Observer = new IntersectionObserver(function (
  entries,
  section5Observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled-projects");
    } else {
      header.classList.remove("nav-scrolled-projects");
    }
  });
},
sectionScrollOptions);

section5Observer.observe(section5);

// Modals

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("modal-overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
