/* =========================
   Header Scroll
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".charging_intro_visual");
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


/* 전체 초기화 */

window.addEventListener(
    "load",
    () => {
        renderHeaderScroll();
    }
);
