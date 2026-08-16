/* ==========================================
   EXCLUSIVE BABIES
   MAIN WEBSITE JAVASCRIPT
========================================== */

const WHATSAPP_NUMBER = "23230637736";


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon =
      menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {

      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

    } else {

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });


  navLinks
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon =
          menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      });

    });

}


/* ==========================================
   DARK MODE
========================================== */

const themeToggle =
  document.getElementById("themeToggle");


const savedTheme =
  localStorage.getItem("exclusiveBabiesTheme");


if (savedTheme === "dark") {

  document.body.classList.add("dark-mode");

}


function updateThemeIcon() {

  if (!themeToggle) return;

  const icon =
    themeToggle.querySelector("i");


  const darkMode =
    document.body.classList.contains(
      "dark-mode"
    );


  if (darkMode) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

}


updateThemeIcon();


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark-mode"
      );


      const darkMode =
        document.body.classList.contains(
          "dark-mode"
        );


      localStorage.setItem(
        "exclusiveBabiesTheme",
        darkMode
          ? "dark"
          : "light"
      );


      updateThemeIcon();

    }
  );

}


/* ==========================================
   WHATSAPP HELPER
========================================== */

function openWhatsApp(message) {

  const encodedMessage =
    encodeURIComponent(message);


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


  window.open(
    url,
    "_blank"
  );

}


/* ==========================================
   SERVICE ENQUIRY
========================================== */

document
  .querySelectorAll(
    ".service-enquire[data-service]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const service =
          button.dataset.service;


        const message =
`Hello Exclusive Babies 👋

I'm interested in your ${service}.

Please can you send me more information about the available options, pricing and customization?

Thank you.`;


        openWhatsApp(message);

      }
    );

  });


/* ==========================================
   COLLECTION ENQUIRY
========================================== */

document
  .querySelectorAll(
    ".collection-btn[data-service]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const packageName =
          button.dataset.service;


        const message =
`Hello Exclusive Babies 👋

I'm interested in the ${packageName}.

Please can you tell me more about the available hamper options, current prices and customization?

Thank you.`;


        openWhatsApp(message);

      }
    );

  });


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("in-view");

          revealObserver
            .unobserve(
              entry.target
            );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


reveals.forEach(element => {

  revealObserver.observe(element);

});


/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollTopButton =
  document.getElementById("scrollTop");


window.addEventListener(
  "scroll",
  () => {

    if (!scrollTopButton) return;


    if (window.scrollY > 500) {

      scrollTopButton
        .classList
        .add("visible");

    } else {

      scrollTopButton
        .classList
        .remove("visible");

    }

  }
);


if (scrollTopButton) {

  scrollTopButton.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* ==========================================
   FOOTER YEAR
========================================== */

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const heroCard =
  document.querySelector(
    ".hero-main-card"
  );


if (
  heroCard &&
  window.innerWidth > 900
) {

  document.addEventListener(
    "mousemove",
    event => {

      const x =
        (
          event.clientX /
          window.innerWidth
          -
          0.5
        ) * 6;


      const y =
        (
          event.clientY /
          window.innerHeight
          -
          0.5
        ) * 6;


      heroCard.style.transform =
        `rotate(2deg)
         rotateY(${x}deg)
         rotateX(${-y}deg)`;

    }
  );


  document.addEventListener(
    "mouseleave",
    () => {

      heroCard.style.transform =
        "rotate(2deg)";

    }
  );

}