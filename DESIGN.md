---
name: Tesla (클론 프로젝트)
description: 실제 Tesla.com의 시각 언어를 그대로 재현한 포트폴리오용 정적 사이트
colors:
  tesla-red: "#e82127"
  signature-maroon: "#b93f44"
  ink: "#333333"
  near-black: "#0a0a0a"
  void: "#000000"
  header-scrim: "rgba(8, 8, 8, 0.82)"
  paper: "#ffffff"
  steel: "#aaaaaa"
  slate: "#777777"
  smoke: "#999999"
  fog: "#cccccc"
  cloud: "#ededed"
typography:
  display:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "clamp(80px, 9vw, 130px)"
    fontWeight: 900
    lineHeight: 1
  headline:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "64px"
    fontWeight: 900
    lineHeight: 1.1
  title:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
  eyebrow:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    letterSpacing: "normal"
  eyebrow-tech:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "24px"
    fontWeight: 500
  body:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "24px"
  caption:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  full: "50%"
spacing:
  xs: "10px"
  sm: "20px"
  md: "40px"
  lg: "60px"
  xl: "100px"
  section-gap: "200px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "50px"
    width: "140px"
  button-primary-hover:
    backgroundColor: "{colors.tesla-red}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "50px"
    width: "150px"
  button-invert:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.tesla-red}"
    rounded: "{rounded.none}"
    height: "50px"
    width: "150px"
  pagination-bullet:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    rounded: "{rounded.full}"
    height: "34px"
    width: "34px"
  pagination-bullet-active:
    backgroundColor: "{colors.tesla-red}"
    textColor: "{colors.paper}"
---

# Design System: Tesla (클론 프로젝트)

## Overview

**Creative North Star: "Tesla의 오리지널 시그니처"**

이 프로젝트는 새로운 비주얼 아이덴티티를 발명하는 것이 아니라, 실제 Tesla.com의 시각 언어 — 붉은 강조색, 블랙/화이트의 극단적 대비, 시네마틱한 풀블리드 영상/이미지, 기술적 서체(Orbitron)와 인문적 본문 서체(Pretendard)의 조합 — 를 최대한 충실하게 재현하는 것을 원칙으로 한다. `PRODUCT.md`에 명시된 대로, 이 시스템의 가치는 창의적 재해석이 아니라 실제 브랜드에 대한 충실도에서 나온다.

레이아웃은 데스크톱 전용(최소 폭 1500px)으로 고정되어 있으며, 섹션 사이의 넉넉한 200px 여백과 1392~1440px 콘텐츠 컨테이너가 만드는 여유로운 리듬이 전체를 관통한다. 표면은 기본적으로 플랫하지만, 헤더가 스크롤 시 반투명 블랙 + 블러로 떠오르는 순간만큼은 예외적으로 입체감을 준다.

**Key Characteristics:**
- 레드(`#e82127`)는 액션·강조·활성 상태에만 쓰이는 희소 색상이다.
- Orbitron은 큰 숫자·타이틀·모델명에, Pretendard는 본문·설명에 역할이 분리되어 있다.
- 버튼은 예외 없이 각진 사각형(radius 0)이다.
- 원형(circle)은 소프트웨어 카드, 페이지네이션, 궤도 애니메이션 등 "기술적 움직임"을 나타내는 전용 모티프다.

## Colors

레드 한 가지 강조색과 블랙-화이트-그레이 스케일로 구성된 극단적 대비 팔레트. 다채로운 보조색은 없다.

### Primary
- **Tesla Red** (`#e82127`): CTA 호버, 활성 상태(스와이퍼 불릿, 폰트/텍스트 강조), 섹션 eyebrow 라벨, 숫자 스펙(충전 속도 등)의 핵심 강조색. 화면 전체에서 차지하는 비중은 낮게 유지된다.

### Secondary
- **Signature Maroon** (`#b93f44`): 톤 다운된 딥 레드. 라인업 섹션의 대형 모델명(`lineup_model h3`)과 소프트웨어 원형 카드 배경에 쓰인다. Tesla Red보다 무겁고 차분한 인상으로, 대형 타이포/면적에 배치된다.

### Neutral
- **Paper** (`#ffffff`): 기본 배경, 다크 섹션 위의 본문/타이틀 텍스트, 인버트 버튼 배경.
- **Ink** (`#333333`): 라이트 배경 위 기본 본문 텍스트 색, 아웃라인 버튼 테두리/텍스트.
- **Near-Black** (`#0a0a0a`): 푸터 배경.
- **Void** (`#000000`): 이미지/영상 위 딤(dim) 오버레이의 베이스 컬러.
- **Header Scrim** (`rgba(8, 8, 8, 0.82)`): 스크롤 시 헤더에 깔리는 반투명 블랙, `backdrop-filter: blur(16px)`와 함께 사용.
- **Steel** (`#aaaaaa`): 구분선(FSD 섹션), 궤도 애니메이션 링, 도트.
- **Slate** (`#777777`): 스와이퍼 페이지네이션 텍스트, 스펙 라벨.
- **Smoke** (`#999999`): 스와이퍼 페이지네이션 불릿 테두리(비활성).
- **Fog** (`#cccccc`): 푸터 내비게이션/본문 텍스트(기본), 호버 시 Tesla Red로 전환.
- **Cloud** (`#ededed`): 라인업 섹션 배경 데코 블록.

### Named Rules
**The One Red Rule.** Tesla Red는 액션 요소(CTA 호버, 활성 상태, 숫자 강조)에만 쓴다. 정적인 배경이나 큰 면적을 레드로 채우지 않는다 — 큰 면적의 붉은 톤이 필요하면 톤 다운된 Signature Maroon을 쓴다.

## Typography

**Display/Headline/Title Font:** Orbitron (400~900), 대체 서체: sans-serif
**Body/Label Font:** Pretendard Variable (400), 대체 서체: system-ui, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, sans-serif

**Character:** Orbitron은 각지고 기하학적인 형태로 "기술적·미래적" 톤을 담당하며 모든 `h2`(섹션 타이틀), 모델명, 숫자 스펙에 쓰인다. Pretendard는 본문과 설명, 그리고 대부분의 eyebrow 라벨을 맡아 가독성과 한글 대응을 책임진다.

### Hierarchy
- **Display** (weight 900, `clamp(80px, 9vw, 130px)`, line-height 1, Orbitron, Signature Maroon): 라인업 섹션의 대형 모델명(`lineup_model h3`) 전용.
- **Headline** (weight 900/700, 64px, line-height ~1.1, Orbitron): 히어로 타이틀(흰색)과 세이프티 타이틀(Tesla Red).
- **Title** (weight 700~900, 36px, line-height 1.2, Orbitron): FSD·소프트웨어·라인업·충전·퀵링크 섹션 타이틀.
- **Body** (weight 400, 18px, line-height 24px, Pretendard): 섹션 설명 문단. 좁은 컬럼(약 400~430px)에서 `word-break: keep-all`로 한글 줄바꿈을 제어.
- **Eyebrow** (weight 400, 16px, Pretendard, 주로 Tesla Red): 대부분의 섹션 상단 라벨.
- **Eyebrow-Tech** (weight 500, 24px, Orbitron, 흰색): 히어로 섹션 eyebrow만 예외적으로 Orbitron을 사용.
- **Caption** (weight 400, 14px/12px, Pretendard, Fog): 푸터 내비게이션·정보·저작권 텍스트.

### Named Rules
**The Two-Voice Rule.** Orbitron은 "숫자·타이틀·모델명"에만, Pretendard는 "설명·본문·대부분의 라벨"에만 쓴다. 두 서체를 같은 텍스트 블록 안에서 섞지 않는다.

## Layout

데스크톱 전용 고정 레이아웃(`min-width: 1500px`, `body`/`.header_inner`/`.software_wrap` 등에 명시). 반응형 대응은 아직 하지 않는다 — `CLAUDE.md`에 명시된 대로 모든 서브페이지 완료 후 별도 단계에서 진행 예정이다.

- **콘텐츠 컨테이너:** 대부분의 섹션은 `max-width: 1392px` (히어로, FSD, 세이프티, 충전, 퀵링크, 푸터). 라인업·소프트웨어 섹션만 `max-width: 1440px`로 약간 더 넓다.
- **섹션 간격:** 주요 섹션 사이에 `margin-top: 200px`가 반복되는 강한 리듬(FSD, 세이프티, 소프트웨어, 퀵링크). 이 값이 사실상 섹션 단위 "여백 그리드"다.
- **헤더:** `position: fixed`, 기본 높이 140px → 스크롤 시(`.active`) 85px로 축소, 로고·내비게이션 gap도 비례해 함께 줄어든다.
- **내부 그리드/갭 예시:** FSD 콘텐츠 3분할 11px 갭 + 1px 구분선, 라인업 스펙 2열 그리드(212px × 2, gap 30px 24px), 퀵링크 리스트 100px 갭, 푸터 내비 56px 갭.

## Elevation & Depth

시스템 전반이 플랫하다 — 그림자는 거의 쓰이지 않는다. 깊이감은 그림자가 아니라 **딤(dim) 오버레이와 블러**로 표현한다: 비디오/이미지 위의 반투명 블랙 딤 레이어(`rgba(0,0,0,.6)` 등), 그리고 스크롤 시 헤더에만 등장하는 `backdrop-filter: blur(16px)` + 옅은 그림자.

### Shadow Vocabulary
- **Header Scroll Shadow** (`box-shadow: 0 8px 30px rgba(0,0,0,.15)`): 헤더가 `.active` 상태(스크롤 시)일 때만 등장. 프로젝트 전체에서 유일하게 확인되는 box-shadow 사용처.

### Named Rules
**The Flat-Until-Scroll Rule.** 표면은 정지 상태에서 그림자를 갖지 않는다. 그림자는 헤더가 스크롤 상태로 전환될 때의 반응으로만 나타난다.

## Shapes

- **버튼은 예외 없이 직각(`border-radius: 0`)이다.** 히어로 CTA, 아웃라인 버튼, 인버트 버튼 모두 라운드가 전혀 없다.
- **원형(`border-radius: 50%`)은 "기술적 동작"을 나타내는 전용 형태다:** 소프트웨어 섹션의 겹쳐진 원형 카드(350px, 흰 테두리 7px), 대시(dashed) 궤도 링(900px), 궤도를 도는 점(dot), 라인업 스와이퍼의 원형 페이지네이션 불릿(34px). 콘텐츠 카드나 버튼에는 원형/라운드를 쓰지 않는다.
- **대각선 클리핑:** 세이프티 섹션의 딤 레이어는 `clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)`로 잘려 사선 분할된 실루엣을 만든다 — 이 프로젝트에서 유일한 각진 대각선 모티프.

### Named Rules
**The Square-or-Circle Rule.** 형태는 완전한 직각이거나 완전한 원이다. 그 사이의 중간 라운드(예: 8px, 12px radius)는 쓰지 않는다.

## Components

### Buttons
세 가지 변형이 확인되며, 셋 다 각진 사각형(50px 높이)이다.

- **Shape:** 직각 (radius 0), 높이 50px 고정, 텍스트 수직 중앙 정렬(`line-height: 50px`).
- **Primary** (히어로 CTA, `.visual_btn a`): 폭 140px, 흰색 텍스트. 평상시엔 배경이 절반만 채워진 레드 그라디언트(`scaleX(.5)`)이고, 호버 시 `scaleX(1)`로 확장되며 단색 Tesla Red(`#e82127`)로 전환된다 — "차오르는" 인터랙션.
- **Outline** (`.fsd_btn a`): 폭 150px, 배경 없음, `1px solid #333333` 테두리, Ink 텍스트. 보조/조용한 CTA.
- **Invert** (`.safety_btn a`): 폭 150px, 흰색 배경, Tesla Red 텍스트. 어두운 이미지 배경 위에서 쓰는 고대비 CTA.
- 아웃라인·인버트 버튼에는 아직 hover 트랜지션이 정의되어 있지 않다 — 새로 만들 때 프라이머리 버튼과 동일한 "색 반전/전환" 문법을 따르는 것을 권장하되, 기존 코드에 없는 애니메이션을 임의로 추가하지는 않는다.

### Circular Cards (시그니처 컴포넌트)
- **형태:** 지름 350px 원, `border: 7px solid #fff`.
- **배경:** Signature Maroon(`#b93f44`).
- **배치:** 4개가 `margin-left: -40px`로 서로 겹치며 z-index로 앞뒤 순서를 부여 — 벤 다이어그램처럼 연결된 클러스터를 형성.
- **내부 텍스트:** 흰색, 타이틀 32px/600, 본문 18px/24px.

### Navigation (헤더)
- 로고(`h1`)는 절대 위치로 항상 헤더 중앙에 고정, 내비게이션 링크는 로고를 중심으로 좌우 대칭 배치(`gap: 150px`, 두 번째 항목에만 추가 `margin-right`로 로고 공간 확보).
- 기본 상태: 배경 없음, 흰색 텍스트, 투명 헤더가 히어로 영상 위에 겹쳐진다.
- 스크롤 상태(`.active`): 배경 `rgba(8,8,8,.82)` + `blur(16px)`, 그림자 등장, 헤더 높이 140px→85px, 로고·gap이 비례 축소.
- 링크 자체에 `position: relative`는 지정돼 있지만 호버 인디케이터(밑줄 등)는 아직 구현되어 있지 않다 — 향후 확장 지점으로 존재만 기록.

### Pagination (라인업 스와이퍼)
- **기본:** 34px 원형, `1px solid #999` 테두리, Slate(`#777`) 텍스트, 배경 투명.
- **활성(active):** 테두리·배경 모두 Tesla Red, 텍스트 흰색.
- 색상/테두리 전환에 `0.3s` 트랜지션.

### Quick Links
- 상하 헤어라인(`border-block: 1.5px solid #333`)을 가진 212×70px 리스트 아이템, 아이콘 48px + 라벨 텍스트를 가로 정렬.
- 현재 4개 항목(견적·시승·충전·서비스)이 모두 동일한 아이콘 파일(`file-_invoice.svg`)을 임시로 공유하고 있다 — 최종 아이콘 세트로 교체가 필요한 미완성 상태다.

### Footer
- 배경 Near-Black(`#0a0a0a`), 컨테이너 1392px.
- 상단/중단/하단 구역이 `1px solid rgba(255,255,255,.2)` 헤어라인으로 분리된 3단 구조.
- 링크 기본색 Fog(`#ccc`) → 호버 시 Tesla Red로 전환(`transition: color .2s ease`), 전 링크 그룹(gnb, info, legal)에서 동일 패턴 반복.
- `CLAUDE.md`에 명시된 대로 이 헤더/푸터는 서브페이지에도 그대로 재사용해야 하는 공통 자산이다.

## Do's and Don'ts

### Do:
- **Do** 새 섹션 타이틀에는 Orbitron, 본문/설명에는 Pretendard를 쓴다 (The Two-Voice Rule).
- **Do** 섹션 간 여백은 200px 리듬을 따른다.
- **Do** Tesla Red는 액션/활성 상태에만 희소하게 쓰고, 넓은 면적이 필요하면 Signature Maroon(`#b93f44`)을 대신 쓴다.
- **Do** 새 서브페이지는 기존 헤더/푸터 마크업과 클래스 네이밍(스네이크/언더스코어 접두사 패턴, 예: `xxx_wrap`, `xxx_inner`, `xxx_title`)을 그대로 재사용한다.
- **Do** 버튼은 직각(radius 0), 장식적 카드/인디케이터는 완전한 원(radius 50%)으로 — 그 중간값의 radius는 쓰지 않는다.

### Don't:
- **Don't** 버튼이나 콘텐츠 카드에 중간 크기 border-radius(예: 8px, 12px)를 쓰지 않는다 — 이 시스템엔 없다.
- **Don't** `beige`, `darkmagenta`, `teal`, `sienna`, `royalblue` 같은 라인업 카드의 현재 색상을 정식 브랜드 팔레트로 취급하지 않는다 — 이들은 실차 이미지/브랜드 컬러 적용 전까지의 **임시 플레이스홀더**이며, 이 DESIGN.md의 정식 컬러 토큰에는 포함하지 않았다.
- **Don't** 반응형/모바일 스타일을 지금 추가하지 않는다 — `CLAUDE.md`에 명시된 대로 모든 서브페이지가 완성된 뒤 별도 단계에서 사이트 전체를 대상으로 진행한다.
- **Don't** Orbitron과 Pretendard를 한 텍스트 블록 안에서 섞어 쓰지 않는다.
