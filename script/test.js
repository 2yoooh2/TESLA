/* =========================================================
   1. HERO 스크립트
   ========================================================= */
(function () {
  const hero = document.getElementById('hero');
  const box = document.getElementById('risingBox');
  const title = document.getElementById('title');
  const badge = document.getElementById('progressBadge');

  function clamp01(v) {
    return Math.min(1, Math.max(0, v));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function remap(v, inMin, inMax, outMin, outMax) {
    const t = clamp01((v - inMin) / (inMax - inMin));
    return lerp(outMin, outMax, t);
  }


  /* =========================
     조절값
  ========================= */

  // 박스가 다 올라오기까지 필요한 스크롤 거리
  // 작을수록 빠르게 올라옴
  const SCROLL_DISTANCE = 450;

  // 박스가 다 올라온 뒤 잠깐 유지되는 거리
  // 작을수록 다음 섹션이 빨리 나옴
  const HOLD_PX = 50;


  let boxStartPx = 0;


  /* =========================
     위치 측정
  ========================= */

  function measure() {

    // 박스 시작 위치:
    // 타이틀 아래 20px
    boxStartPx =
      title.getBoundingClientRect().bottom + 20;

    // HERO 전체 높이
    // 기존에는 boxStartPx(약 800px)를 그대로 더해서
    // HERO가 너무 길어졌음.
    //
    // 이제 실제 스크롤 거리를 따로 지정
    hero.style.height =
      `calc(100vh + ${SCROLL_DISTANCE + HOLD_PX}px)`;
  }


  /* =========================
     스크롤 애니메이션
  ========================= */

  function update() {

    const rect = hero.getBoundingClientRect();

    // HERO 안에서 현재 얼마나 스크롤했는지
    const scrolled = -rect.top;


    /* -------------------------
       전체 진행도
    ------------------------- */

    const progress = clamp01(
      scrolled / SCROLL_DISTANCE
    );


    /* -------------------------
       박스 상승
    ------------------------- */

    // 시작:
    // 타이틀 아래

    // 끝:
    // 화면 최상단

    const boxTranslateY = remap(
      progress,
      0,
      1,
      boxStartPx,
      0
    );

    box.style.transform =
      `translateY(${boxTranslateY}px)`;


    /* -------------------------
       타이틀 축소
    ------------------------- */

    // 박스가 어느 정도 올라온 뒤
    // 타이틀을 살짝 축소

    const titleScale = remap(
      progress,
      0.65,
      0.8,
      1,
      0.85
    );

    title.style.transform =
      `translateX(-50%) scale(${titleScale})`;


    /* -------------------------
       진행도 표시
    ------------------------- */

    if (badge) {
      badge.textContent =
        `hero progress: ${Math.round(progress * 100)}%`;
    }
  }


  /* =========================
     실행
  ========================= */

  measure();
  update();


  window.addEventListener(
    'scroll',
    update,
    { passive: true }
  );


  window.addEventListener(
    'resize',
    () => {
      measure();
      update();
    }
  );

})();

/* =========================================================
   2. IDEA TO SHELF 스크립트
   ========================================================= */
(function () {
  document.querySelectorAll('.its-title .line').forEach(line => {
    const text = line.textContent;
    line.innerHTML = text.split('').map(c =>
      c === ' ' ? ' ' : `<span class="char">${c}</span>`
    ).join('');

    const chars = line.querySelectorAll('.char');
    chars.forEach((el, i) => { el.style.transitionDelay = `${i * 30}ms`; });

    const lineDelay = Number(line.dataset.delay);
    setTimeout(() => line.classList.add('is-done'), 200 + lineDelay);
  });

  const CARDS = [
    { name: 'FORMULA INNOVATION', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
      desc: '새로운 제형과 원료를 연구하는 혁신적 R&D 역량. 글로벌 뷰티 트렌드를 앞서가는 기술 개발로 파트너의 제품 경쟁력을 높입니다.' },
    { name: 'BEAUTY FOUNDRY', img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&q=80',
      desc: '아이디어부터 완제품까지 이어지는 통합 생산 시스템. 스마트 팩토리 기반의 Beauty Foundry 체계로 일관된 품질과 안정적인 생산을 구현합니다.' },
    { name: 'PRODUCT STRATEGY', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
      desc: '파트너의 브랜드 방향에 맞춘 맞춤형 제품 기획. 시장 분석부터 제품 컨셉, 포뮬러 선정까지 전 과정을 함께합니다.' }
  ];

  const track = document.getElementById('track');
  const carousel = document.getElementById('carousel');

  const SETS = 3;
  const fragment = document.createDocumentFragment();
  for (let s = 0; s < SETS; s++) {
    CARDS.forEach(c => {
      const card = document.createElement('div');
      card.className = 'its-card';
      card.innerHTML = `
        <div class="its-card-img-wrap">
          <img class="its-card-img" src="${c.img}" alt="${c.name}">
        </div>
        <div class="its-card-info">
          <span class="its-card-name">${c.name}</span>
          <p class="its-card-desc">${c.desc}</p>
        </div>
      `;
      fragment.appendChild(card);
    });
  }
  track.appendChild(fragment);

  const imgs = track.querySelectorAll('.its-card');
  imgs.forEach((card, i) => {
    setTimeout(() => card.classList.add('is-visible'), 300 + (i % CARDS.length) * 120);
  });

  let cardWidth = 0;
  let setWidth = 0;
  let currentX = 0;
  let startX = 0;
  let startTranslate = 0;
  let isDragging = false;

  function measure() {
    const card = track.querySelector('.its-card');
    const gap = 20;
    cardWidth = card.offsetWidth + gap;
    setWidth = cardWidth * CARDS.length;
    currentX = -setWidth;
    track.style.transition = 'none';
    track.style.transform = `translateX(${currentX}px)`;
  }
  measure();
  window.addEventListener('resize', measure);

  function onDown(clientX) {
    isDragging = true;
    startX = clientX;
    startTranslate = currentX;
    track.style.transition = 'none';
    carousel.classList.add('dragging');
  }
  function onMove(clientX) {
    if (!isDragging) return;
    const delta = clientX - startX;
    currentX = startTranslate + delta;
    track.style.transform = `translateX(${currentX}px)`;
  }
  function onUp() {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove('dragging');

    const snapped = Math.round(currentX / cardWidth) * cardWidth;
    currentX = snapped;
    track.style.transition = 'transform 0.35s ease';
    track.style.transform = `translateX(${currentX}px)`;

    setTimeout(() => {
      if (currentX <= -setWidth * 2) {
        currentX += setWidth;
        track.style.transition = 'none';
        track.style.transform = `translateX(${currentX}px)`;
      } else if (currentX >= 0) {
        currentX -= setWidth;
        track.style.transition = 'none';
        track.style.transform = `translateX(${currentX}px)`;
      }
    }, 360);
  }

  carousel.addEventListener('mousedown', e => onDown(e.clientX));
  window.addEventListener('mousemove', e => onMove(e.clientX));
  window.addEventListener('mouseup', onUp);
  carousel.addEventListener('touchstart', e => onDown(e.touches[0].clientX), { passive: true });
  window.addEventListener('touchmove', e => onMove(e.touches[0].clientX), { passive: true });
  window.addEventListener('touchend', onUp);
})();

/* =========================================================
   3. FOUR VALUES 스크립트
   ========================================================= */
(function () {
  const titleEl = document.getElementById('valuesTitle');
  titleEl.innerHTML = titleEl.innerHTML
    .split('<br>')
    .map(line => {
      const words = line.trim().split(' ');
      return words.map(word =>
        `<span style="display:inline-block;white-space:nowrap;">${
          word.split('').map(c => `<span class="char">${c}</span>`).join('')
        }</span>`
      ).join(' ');
    })
    .join('<br>');

  const chars = titleEl.querySelectorAll('.char');
  chars.forEach((el, i) => { el.style.transitionDelay = `${i * 30}ms`; });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.value-card').forEach(card => io.observe(card));

  titleEl.classList.add('is-done');

  /* ---------- 마지막 카드(PERFORMANCE)가 완전히 지나가면 다크모드 전환 ---------- */
  const valuesWrap = document.getElementById('valuesWrap');
  const cardPerf = document.getElementById('cardPerf');
  function updateDarkMode() {
    const perfRect = cardPerf.getBoundingClientRect();
    // 카드 아랫면이 화면 위로 완전히 넘어갔으면(bottom <= 0) 다 지나간 것
    valuesWrap.classList.toggle('is-dark', perfRect.bottom <= 0);
  }
  window.addEventListener('scroll', updateDarkMode, { passive: true });
  window.addEventListener('resize', updateDarkMode);
  updateDarkMode();
})();

/* =========================================================
   4. MAKE MORE THAN PRODUCTS 스크립트
   ========================================================= */
(function () {
  const titleEl = document.getElementById('makeTitle');
  titleEl.innerHTML = titleEl.innerHTML
    .split('<br>')
    .map(line => {
      const words = line.trim().split(' ');
      return words.map(word =>
        `<span style="display:inline-block;white-space:nowrap;">${
          word.split('').map(c => `<span class="char">${c}</span>`).join('')
        }</span>`
      ).join(' ');
    })
    .join('<br>');

  const chars = titleEl.querySelectorAll('.char');
  chars.forEach((el, i) => { el.style.transitionDelay = `${i * 25}ms`; });
  setTimeout(() => titleEl.classList.add('is-done'), 150);

  const listItems = document.querySelectorAll('.co-make-item');
  const images = document.querySelectorAll('.co-make-img');

  function activateIndex(idx) {
    listItems.forEach(li => li.classList.toggle('is-active', Number(li.dataset.index) === idx));
    images.forEach((img, i) => img.classList.toggle('is-active', i === idx));
  }

  listItems.forEach(li => {
    li.addEventListener('mouseenter', () => activateIndex(Number(li.dataset.index)));
    li.addEventListener('click', () => activateIndex(Number(li.dataset.index)));
  });

  const wayCards = document.querySelectorAll('.co-way-card');
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay);
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        io2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  wayCards.forEach(card => io2.observe(card));
})();
