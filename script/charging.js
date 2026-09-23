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


/* =========================
   Trip Planner Scroll Color
========================= */

const tripPlannerWrap = document.querySelector(".trip_planner_wrap");

const tripPlannerTextEls = tripPlannerWrap
    ? [
        ...tripPlannerWrap.querySelectorAll(
            ".trip_planner_title, .trip_planner_desc, .trip_planner_col_title, .trip_planner_col_desc"
        )
    ]
    : [];

const TRIP_PLANNER_BG_FROM = [255, 255, 255];
const TRIP_PLANNER_BG_TO = [17, 17, 17];
const TRIP_PLANNER_TEXT_TO = [255, 255, 255];
const TRIP_PLANNER_TRANSITION_RATIO = 0.6;

let tripPlannerTextFromColors = [];
let tripPlannerTicking = false;

function parseRgb(colorStr) {
    const matched = colorStr.match(/\d+/g);
    return matched ? matched.slice(0, 3).map(Number) : [0, 0, 0];
}

function lerpColor(from, to, progress) {
    const r = Math.round(from[0] + (to[0] - from[0]) * progress);
    const g = Math.round(from[1] + (to[1] - from[1]) * progress);
    const b = Math.round(from[2] + (to[2] - from[2]) * progress);
    return `rgb(${r}, ${g}, ${b})`;
}

function measureTripPlannerColors() {
    tripPlannerTextFromColors = tripPlannerTextEls.map((el) =>
        parseRgb(getComputedStyle(el).color)
    );
}

function renderTripPlannerColor() {
    tripPlannerTicking = false;

    if (!tripPlannerWrap) {
        return;
    }

    const rect = tripPlannerWrap.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const transitionDistance = viewportHeight * TRIP_PLANNER_TRANSITION_RATIO;

    const progress = Math.min(
        1,
        Math.max(
            0,
            (viewportHeight - rect.top) / transitionDistance
        )
    );

    tripPlannerWrap.style.backgroundColor = lerpColor(
        TRIP_PLANNER_BG_FROM,
        TRIP_PLANNER_BG_TO,
        progress
    );

    tripPlannerTextEls.forEach((el, index) => {
        const from = tripPlannerTextFromColors[index] || TRIP_PLANNER_BG_TO;
        el.style.color = lerpColor(from, TRIP_PLANNER_TEXT_TO, progress);
    });
}

function requestTripPlannerColorUpdate() {
    if (tripPlannerTicking) {
        return;
    }

    tripPlannerTicking = true;
    requestAnimationFrame(renderTripPlannerColor);
}

if (tripPlannerWrap) {
    window.addEventListener(
        "scroll",
        requestTripPlannerColorUpdate,
        {
            passive: true
        }
    );
}


/* 전체 초기화 */

window.addEventListener(
    "load",
    () => {
        renderHeaderScroll();

        if (tripPlannerWrap) {
            measureTripPlannerColors();
            renderTripPlannerColor();
        }
    }
);
