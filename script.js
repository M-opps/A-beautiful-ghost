document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar");

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(8, 6, 7, 0.92)";
            navbar.style.padding = "14px 0";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
        } else {
            navbar.style.background = "rgba(8, 6, 7, 0.45)";
            navbar.style.padding = "22px 0";
            navbar.style.boxShadow = "none";
        }
    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =========================================
       MOBILE NAVBAR AUTO CLOSE
    ========================================= */

    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const navbarMenu = document.querySelector("#navbarMenu");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (
                window.innerWidth < 992 &&
                navbarMenu.classList.contains("show")
            ) {
                const collapse = bootstrap.Collapse.getInstance(navbarMenu);

                if (collapse) {
                    collapse.hide();
                }
            }

        });

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-text, .quote-box, " +
        ".special-card, .gallery-main, .gallery-small, " +
        ".gallery-caption, .letter-box, .final-section .container"
    );

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition =
            "opacity 0.9s ease, transform 0.9s ease";
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================================
       SPECIAL CARDS STAGGER ANIMATION
    ========================================= */

    const specialCards = document.querySelectorAll(".special-card");

    specialCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.12}s`;

    });


    /* =========================================
       GALLERY IMAGE PARALLAX
    ========================================= */

    const hero = document.querySelector(".hero");

    if (hero && window.innerWidth > 768) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition < window.innerHeight) {

                hero.style.backgroundPosition =
                    `center calc(25% + ${scrollPosition * 0.15}px)`;

            }

        });

    }


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const target = link.getAttribute("href");

            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =========================================
       BUTTON CLICK EFFECT
    ========================================= */

    const mainButton = document.querySelector(".main-btn");

    if (mainButton) {

        mainButton.addEventListener("click", function () {

            this.style.transform = "translateY(0)";

            setTimeout(() => {
                this.style.transform = "";
            }, 200);

        });

    }


    /* =========================================
       IMAGE LOADING EFFECT
    ========================================= */

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        img.addEventListener("load", () => {
            img.classList.add("image-loaded");
        });

    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const footerYear = document.querySelector("footer span");

    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()}`;
    }

});
