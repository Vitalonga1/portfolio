 // Hamburger menu toggle
      document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector("nav ul");
        const navLinks = document.querySelectorAll(".nav-link");

        // Toggle menu on hamburger click
        menuToggle.addEventListener("click", (e) => {
          e.stopPropagation(); // prevent triggering document click
          navMenu.classList.toggle("show");
        });

        // Close menu when a nav link is clicked
        navLinks.forEach((link) => {
          link.addEventListener("click", () => {
            navMenu.classList.remove("show");
          });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
          if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove("show");
          }
        });

        // Scroll highlight
        const sections = document.querySelectorAll("section");

        window.addEventListener("scroll", function () {
          let current = "";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
            }
          });
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
              link.classList.add("active");
            }
          });
        });
      });