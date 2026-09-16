/* =========================
   Header Scroll
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".charging_intro_visual");
const headerLogo = document.querySelector("header h1 img");

function renderHeaderScroll() {

    if (!header || !hero || !headerLogo) {
        return;
    }

    const triggerPoint = hero.offsetHeight / 2;

    if (window.scrollY >= triggerPoint) {
        header.classList.add("active");
        headerLogo.src = "./img/tesla_t_logo.png";
    } else {
        header.classList.remove("active");
        headerLogo.src = "./img/tesla_logo.svg";
    }
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
