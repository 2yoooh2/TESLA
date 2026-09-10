/* =========================
   Software Scroll Animation
========================= */

const softwareWrap =
    document.querySelector(".software_wrap");

const softwareItems = [
    ...document.querySelectorAll(".software_item")
];

const softwareCar =
    document.querySelector(".software_car");

const softwareOverlay =
    document.querySelector(".software_overlay");

const softwareEnd =
    document.querySelector(".software_end");


let softwareMetrics = [];
let softwareTicking = false;


/* 구간 설정값 */

const SOFTWARE_TIMING = {
    cardSections: [
        [0.05, 0.22],
        [0.22, 0.39],
        [0.39, 0.56],
        [0.56, 0.73]
    ],

    cardScaleMin: 0.1,
    cardRotateMaxDeg: 12,

    carScaleSection: [0.68, 0.80],
    carScaleAmount: 0.06,

    overlaySection: [0.76, 0.87],
    endSection: [0.83, 0.91]
};


/* 기본 함수 */

function clamp(value, min = 0, max = 1) {
    return Math.min(
        Math.max(value, min),
        max
    );
}


function easeInOut(value) {
    return value * value * (3 - 2 * value);
}


function getSectionProgress(progress, start, end) {
    return clamp(
        (progress - start) /
        (end - start)
    );
}


/* 카드 이동 거리 계산 */

function setSoftwareMetrics() {

    if (
        !softwareWrap ||
        !softwareCar ||
        softwareItems.length === 0
    ) {
        return;
    }


    softwareItems.forEach((item) => {
        item.style.transform = "none";
        item.style.opacity = "1";
    });


    const carRect =
        softwareCar.getBoundingClientRect();


    const targetX =
        carRect.left +
        carRect.width / 2;


    const targetY =
        carRect.top +
        carRect.height * 0.4;


    softwareMetrics =
        softwareItems.map((item) => {

            const itemRect =
                item.getBoundingClientRect();


            const itemCenterX =
                itemRect.left +
                itemRect.width / 2;


            const itemCenterY =
                itemRect.top +
                itemRect.height / 2;


            return {
                moveX:
                    targetX -
                    itemCenterX,

                moveY:
                    targetY -
                    itemCenterY
            };
        });
}


/* 스크롤 애니메이션 */

function renderSoftwareScroll() {

    if (
        !softwareWrap ||
        !softwareCar ||
        !softwareOverlay ||
        !softwareEnd
    ) {
        softwareTicking = false;
        return;
    }


    const wrapRect =
        softwareWrap.getBoundingClientRect();


    const scrollDistance =
        softwareWrap.offsetHeight -
        window.innerHeight;


    if (scrollDistance <= 0) {
        softwareTicking = false;
        return;
    }


    const progress = clamp(
        -wrapRect.top /
        scrollDistance
    );


    /* 카드 애니메이션 */

    const cardSections =
        SOFTWARE_TIMING.cardSections;


    softwareItems.forEach((item, index) => {

        const section =
            cardSections[index];

        const metric =
            softwareMetrics[index];


        if (!section || !metric) {
            return;
        }


        const rawProgress =
            getSectionProgress(
                progress,
                section[0],
                section[1]
            );


        const itemProgress =
            easeInOut(rawProgress);


        const moveX =
            metric.moveX *
            itemProgress;


        const moveY =
            metric.moveY *
            itemProgress;


        const scale =
            1 -
            itemProgress *
            (1 - SOFTWARE_TIMING.cardScaleMin);


        const opacity =
            1 -
            itemProgress;


        const direction =
            index % 2 === 0
                ? 1
                : -1;


        const rotate =
            itemProgress *
            SOFTWARE_TIMING.cardRotateMaxDeg *
            direction;


        item.style.transform = `
            translate3d(
                ${moveX}px,
                ${moveY}px,
                0
            )
            scale(${scale})
            rotate(${rotate}deg)
        `;


        item.style.opacity =
            opacity;
    });


    /* 자동차 반응 */

    const [carStart, carEnd] =
        SOFTWARE_TIMING.carScaleSection;


    const carProgress =
        easeInOut(
            getSectionProgress(
                progress,
                carStart,
                carEnd
            )
        );


    const carScale =
        1 +
        Math.sin(
            carProgress *
            Math.PI
        ) *
        SOFTWARE_TIMING.carScaleAmount;


    softwareCar.style.transform =
        `scale(${carScale})`;


    /* 검정 배경 등장 */

    const [overlayStart, overlayEnd] =
        SOFTWARE_TIMING.overlaySection;


    const overlayIn =
        easeInOut(
            getSectionProgress(
                progress,
                overlayStart,
                overlayEnd
            )
        );


    /* 엔딩 글자 등장 */

    const [endStart, endEnd] =
        SOFTWARE_TIMING.endSection;


    const endIn =
        easeInOut(
            getSectionProgress(
                progress,
                endStart,
                endEnd
            )
        );


    /* 검정 배경과 엔딩 문구 유지 */

    softwareOverlay.style.opacity =
        overlayIn;

    softwareEnd.style.opacity =
        endIn;


    /* Software 진입 전에는 숨김 */

    if (wrapRect.top >= window.innerHeight) {
        softwareOverlay.style.opacity = "0";
        softwareEnd.style.opacity = "0";
    }


    softwareTicking = false;
}


/* 스크롤 최적화 */

function requestSoftwareRender() {

    if (softwareTicking) {
        return;
    }


    softwareTicking = true;


    requestAnimationFrame(
        renderSoftwareScroll
    );
}


/* Software 초기화 */

function initSoftwareScroll() {

    if (
        !softwareWrap ||
        !softwareCar ||
        !softwareOverlay ||
        !softwareEnd ||
        softwareItems.length === 0
    ) {
        return;
    }


    setSoftwareMetrics();
    renderSoftwareScroll();
}


/* Software 이벤트 */

window.addEventListener(
    "scroll",
    requestSoftwareRender,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    () => {

        if (
            !softwareWrap ||
            !softwareCar ||
            softwareItems.length === 0
        ) {
            return;
        }


        setSoftwareMetrics();
        renderSoftwareScroll();
    }
);


/* =========================
   Model Lineup Swiper
========================= */

function initLineupSwiper() {

    const lineupSwiperElement =
        document.querySelector(".lineup_swiper");


    if (
        !lineupSwiperElement ||
        typeof Swiper === "undefined"
    ) {
        return;
    }


    new Swiper(".lineup_swiper", {
        slidesPerView: 1,
        spaceBetween: 300,
        speed: 800,

        pagination: {
            el: ".lineup_pagination",
            clickable: true,

            renderBullet: function (
                index,
                className
            ) {
                return `
                    <button
                        type="button"
                        class="${className}"
                        aria-label="${index + 1}번 모델 보기"
                    >
                        ${String(index + 1).padStart(2, "0")}
                    </button>
                `;
            }
        }
    });
}




/*===count===*/
const counters = document.querySelectorAll(".count");
const chargerSection = document.querySelector(".charger_wrap");

let counted = false;

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
        counted = true;
        startCounter();
        observer.disconnect();
    }
}, {
    threshold: 0.4
});

observer.observe(chargerSection);

function startCounter() {
    counters.forEach(counter => {

        const target = Number(counter.dataset.count);
        const duration = 3600; // 애니메이션 시간(ms)
        const startTime = performance.now();

        function update(now) {

            const progress = Math.min(
                (now - startTime) / duration,
                1
            );

            const eased =
                progress * progress * (3 - 2 * progress);

            // 1000 이상은 10단위씩 증가
            const step =
                target >= 1000 ? 31 : 1;

            let current =
                Math.floor((target * eased) / step) * step;

            // 마지막 값 보정
            if (progress === 1) {
                current = target;
            }

            counter.textContent =
                current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

/* =========================
   Header Scroll
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".visual_wrap");
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
        initSoftwareScroll();
        initLineupSwiper();
    }
);