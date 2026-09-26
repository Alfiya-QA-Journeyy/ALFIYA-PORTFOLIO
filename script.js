// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// 1. Typing effect
const roles = [
    "Software Tester",
    "QA Tester",
    "API Tester",
    "Manual Tester"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero h2");

function typeRole() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1500);
            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeRole, deleting ? 50 : 100);
}

typeRole();


// ===============================
// 2. Scroll reveal animation
// ===============================

const cards = document.querySelectorAll(
    ".project-card, .skill"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.classList.add("hidden");

    observer.observe(card);

});


// ===============================
// 3. Navbar active section
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(
    ".nav-links a"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// 4. Mouse movement effect
// ===============================

const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (event) => {

    if (!circle) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 20;

    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    circle.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ===============================
// 5. Current year in footer
// ===============================

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Alfiya Khan`;

}