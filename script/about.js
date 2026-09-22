/* =========================
   AOS
========================= */

if (window.AOS) {
    AOS.init({
        duration: 800,
        once: false,
        offset: 80
    });
}


/* =========================
   Header Scroll
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".about_intro_visual");
const headerLogo = document.querySelector("header h1 img");

const HEADER_SCROLL_TRIGGER = 50;

let isHeaderActive = false;
let isHeaderScrolled = false;
let logoSwapTimer = null;

function swapHeaderLogo(active) {
    if (!headerLogo) {
        return;
    }

    clearTimeout(logoSwapTimer);
    headerLogo.style.opacity = "0";

    logoSwapTimer = setTimeout(() => {
        headerLogo.src = active ? "./img/tesla_t_logo.png" : "./img/tesla_logo.svg";
        headerLogo.style.opacity = "1";
    }, 200);
}

function renderHeaderScroll() {

    if (!header) {
        return;
    }

    const shouldBeScrolled = window.scrollY > HEADER_SCROLL_TRIGGER;

    if (shouldBeScrolled !== isHeaderScrolled) {
        isHeaderScrolled = shouldBeScrolled;
        header.classList.toggle("scrolled", isHeaderScrolled);
    }

    if (!hero) {
        return;
    }

    const triggerPoint = hero.offsetHeight / 2;
    const shouldBeActive = window.scrollY >= triggerPoint;

    if (shouldBeActive === isHeaderActive) {
        return;
    }

    isHeaderActive = shouldBeActive;
    header.classList.toggle("active", isHeaderActive);
    swapHeaderLogo(isHeaderActive);
}

window.addEventListener(
    "scroll",
    renderHeaderScroll,
    {
        passive: true
    }
);


/* =========================
   Impact Counter
========================= */

const counters = document.querySelectorAll(".count");
const impactSection = document.querySelector(".impact_wrap");

let counted = false;

if (impactSection && counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
            counted = true;
            startCounter();
            counterObserver.disconnect();
        }
    }, {
        threshold: 0.4
    });

    counterObserver.observe(impactSection);
}

function startCounter() {
    counters.forEach((counter) => {

        const target = parseFloat(counter.dataset.count);
        const isDecimal = counter.dataset.count.includes(".");
        const duration = 1800;
        const startTime = performance.now();

        function update(now) {

            const progress = Math.min(
                (now - startTime) / duration,
                1
            );

            const eased =
                progress * progress * (3 - 2 * progress);

            const current = target * eased;

            counter.textContent = isDecimal
                ? current.toFixed(1)
                : Math.floor(current).toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = isDecimal
                    ? target.toFixed(1)
                    : target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    });
}


/* 전체 초기화 */

window.addEventListener(
    "load",
    () => {
        renderHeaderScroll();
    }
);
