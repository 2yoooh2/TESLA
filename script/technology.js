/* =========================
   Header Scroll
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".tech_intro_visual");
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
   AI Hardware : list → visual
========================= */

const hardwareCols = document.querySelectorAll(".ai_hardware_col");
const hardwareVisual = document.querySelector(".ai_hardware_visual");
const hardwareVisualImgs = document.querySelectorAll(".ai_hardware_visual_img");

const HARDWARE_INTERVAL = 4000;

let hardwareAutoTimer = null;

function playHardwareProgress(targetCol) {

    hardwareCols.forEach((col) => {
        const bar = col.querySelector(".ai_hardware_col_progress");

        if (!bar) {
            return;
        }

        bar.style.transition = "none";
        bar.style.width = "0%";
    });

    const targetBar = targetCol.querySelector(".ai_hardware_col_progress");

    if (!targetBar) {
        return;
    }

    void targetBar.offsetWidth;

    targetBar.style.transition = `width ${HARDWARE_INTERVAL}ms linear`;
    targetBar.style.width = "100%";
}

function setActiveHardwareCol(targetCol) {

    if (!targetCol || targetCol.classList.contains("active")) {
        return;
    }

    hardwareCols.forEach((col) => {
        col.classList.toggle("active", col === targetCol);
    });

    playHardwareProgress(targetCol);

    const nextSrc = targetCol.dataset.img;
    const currentImg = hardwareVisual.querySelector(".ai_hardware_visual_img.active");
    const nextImg = Array.from(hardwareVisualImgs).find((img) => img !== currentImg);

    if (!nextSrc || !currentImg || !nextImg || currentImg.getAttribute("src") === nextSrc) {
        return;
    }

    nextImg.src = nextSrc;
    nextImg.classList.add("active");
    currentImg.classList.remove("active");
}

function goToNextHardwareCol() {

    const colsArray = Array.from(hardwareCols);
    const currentIndex = colsArray.findIndex((col) => col.classList.contains("active"));
    const nextIndex = (currentIndex + 1) % colsArray.length;

    setActiveHardwareCol(colsArray[nextIndex]);
}

function startHardwareAutoPlay() {
    clearInterval(hardwareAutoTimer);
    hardwareAutoTimer = setInterval(goToNextHardwareCol, HARDWARE_INTERVAL);
}

if (hardwareCols.length && hardwareVisual && hardwareVisualImgs.length) {

    hardwareCols.forEach((col) => {
        col.addEventListener("click", () => {
            setActiveHardwareCol(col);
            startHardwareAutoPlay();
        });
    });

    playHardwareProgress(hardwareCols[0]);
    startHardwareAutoPlay();
}


/* 전체 초기화 */

window.addEventListener(
    "load",
    () => {
        renderHeaderScroll();
    }
);
