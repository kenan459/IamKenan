// Nav Bar
const header = document.querySelector(".nav-wrapper");

setTimeout(function clearHeaderColor() {
  header.classList.remove("nav-scrolled-intro");
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
      link.style.color = "inherit";
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
const landing_name = document.querySelector(".landing-name");
const landing_bar = document.querySelector(".landing-bar");
const landing_pos = document.querySelector(".pos");

function nav_home() {
  section1.scrollIntoView();
  landing_name.classList.toggle("landing-name-animate");
  landing_bar.classList.toggle("landing-bar-load");
  landing_pos.classList.toggle("landing-pos-load");

  setTimeout(() => {
    landing_name.classList.toggle("landing-name-animate");
    landing_bar.classList.toggle("landing-bar-load");
    landing_pos.classList.toggle("landing-pos-load");
  }, 10);
}

function nav_intro() {
  section2.scrollIntoView();
}
function nav_backg() {
  section3.scrollIntoView();
}
function nav_skills() {
  section4.scrollIntoView();
}
function nav_projects() {
  section5.scrollIntoView();
}
function nav_experience() {
  section6.scrollIntoView();
}
function nav_contact() {
  section7.scrollIntoView();
}

//Link Effects

const buttons = document.querySelectorAll("a");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      console.log("mobile");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
      btnNavSlide();
    } else {
      console.log("desktop");
    }

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
const section5 = document.querySelector("#projects-section");
const section6 = document.querySelector("#experience-section");
const section7 = document.querySelector("#contact-section");

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
      header.classList.remove("nav-scrolled-projects");
      header.classList.remove("nav-scrolled-experience");
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
      header.classList.remove("nav-scrolled-projects");
      header.classList.remove("nav-scrolled-experience");
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
      header.classList.remove("nav-scrolled-projects");
      header.classList.remove("nav-scrolled-experience");
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
      header.classList.add("nav-scrolled-projects");
    } else {
      header.classList.remove("nav-scrolled-projects");
      header.classList.remove("nav-scrolled-experience");
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
      header.classList.add("nav-scrolled-experience");
    } else {
      header.classList.remove("nav-scrolled-experience");
    }
  });
},
sectionScrollOptions);

section5Observer.observe(section5);

// Modals

//Demo/Code Btns

function lmnhsDemo() {
  window.open("http://www.lmnhs-demo.tk/");
}

function lmnhsCode() {
  window.open(
    "https://github.com/kenan459/Portfolio-Projects/blob/master/Guidance_System_Demo.zip"
  );
}

function saddamDemo() {
  alert(
    "Saddams Shawarma is a Desktop Application, you have to download the zip from my Git Hub repositories if you wish to test it."
  );
}

function saddamCode() {
  window.open(
    "https://github.com/kenan459/Portfolio-Projects/blob/master/Saddams%20Shawarma%202.8%20Demo.zip"
  );
}

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
