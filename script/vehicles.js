/* =========================
   Interior Accordion + Visual Sync
========================= */

const interiorAccItems =
    [...document.querySelectorAll(".interior_acc_item")];

const interiorVisualImgs =
    [...document.querySelectorAll(".interior_visual_img")];


interiorAccItems.forEach((item) => {

    const head = item.querySelector(".interior_acc_head");

    head.addEventListener("click", () => {

        const target = item.dataset.target;

        interiorAccItems.forEach((el) => {
            el.classList.toggle("is_active", el === item);
        });

        interiorVisualImgs.forEach((img) => {
            img.classList.toggle("is_active", img.dataset.visual === target);
        });

    });

});


/* =========================
   Comfort & Quiet Swiper
========================= */

function initComfortSwiper() {

    const comfortSwiperElement =
        document.querySelector(".comfort_swiper");

    const comfortInfoItems =
        [...document.querySelectorAll(".comfort_info_item")];


    if (
        !comfortSwiperElement ||
        typeof Swiper === "undefined"
    ) {
        return;
    }


    const comfortSwiper = new Swiper(".comfort_swiper", {
        loop: true,
        speed: 600,
        grabCursor: true
    });

    comfortSwiper.on("slideChange", () => {

        const activeIndex = comfortSwiper.realIndex;

        comfortInfoItems.forEach((item, index) => {
            item.classList.toggle("is_active", index === activeIndex);
        });

    });
}

initComfortSwiper();


/* =========================
   Model 3 Performance Accordion + Visual Sync
   (interior 아코디언과 동일한 로직, class만 분리하여 재사용)
========================= */

const performanceAccItems =
    [...document.querySelectorAll(".performance_acc_item")];

const performanceVisualImgs =
    [...document.querySelectorAll(".performance_visual_img")];


performanceAccItems.forEach((item) => {

    const head = item.querySelector(".performance_acc_head");

    head.addEventListener("click", () => {

        const target = item.dataset.target;

        performanceAccItems.forEach((el) => {
            el.classList.toggle("is_active", el === item);
        });

        performanceVisualImgs.forEach((img) => {
            img.classList.toggle("is_active", img.dataset.visual === target);
        });

    });

});


/* =========================
   Specifications Tabs + Visual Sync
========================= */

const SPECS_DATA = {
    standard: {
        image: "",
        specifications: {
            range: "382 km",
            accel: "0–100 km/h / 6.2초",
            drive: "RWD",
            wheel: "18인치",
            cargo: "682 L",
            weight: "1,760 kg",
            dimensions: "4,720 × 1,933 × 1,440 mm",
            supercharging: "175 kW"
        }
    },
    premium: {
        image: "",
        specifications: {
            range: "538 km",
            accel: "0–100 km/h / 5.2초",
            drive: "RWD",
            wheel: "18인치 또는 19인치",
            cargo: "682 L",
            weight: "1,735 kg",
            dimensions: "4,720 × 1,933 × 1,440 mm",
            supercharging: "250 kW"
        }
    },
    performance: {
        image: "",
        specifications: {
            range: "450 km",
            accel: "0–100 km/h / 약 3.1초",
            drive: "듀얼 모터 AWD",
            wheel: "20인치 워프 휠",
            cargo: "682 L",
            weight: "1,855 kg",
            dimensions: "4,724 × 1,933 × 1,431 mm",
            supercharging: "250 kW"
        }
    }
};

const specsTabs =
    [...document.querySelectorAll(".specs_tab")];

const specsValues =
    [...document.querySelectorAll(".specs_item_value")];

const specsVisualImgs =
    [...document.querySelectorAll(".specs_visual_img")];


specsTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        const trim = tab.dataset.trim;
        const data = SPECS_DATA[trim];

        specsTabs.forEach((el) => {
            el.classList.toggle("is_active", el === tab);
        });

        specsValues.forEach((value) => {
            value.textContent = data.specifications[value.dataset.field];
        });

        specsVisualImgs.forEach((img) => {
            img.classList.toggle("is_active", img.dataset.trimVisual === trim);
        });

    });

});


/* =========================
   Header Scroll
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".model3_intro_visual");
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
