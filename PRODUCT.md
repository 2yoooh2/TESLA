# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters/evaluators reviewing this as a frontend portfolio piece. Secondary: general visitors, in that the experience should read the way a real Tesla.com visitor's would — but they are not who the project is built for.

## Product Purpose

A portfolio/self-study project that recreates the Tesla.com website (main page plus subpages) to demonstrate frontend build skill. Not affiliated with, endorsed by, or representing the real Tesla, Inc.

## Positioning

Proof of the builder's ability to reproduce a high-production real-world site faithfully using plain HTML/CSS and vanilla JS — no framework, no build step — covering layout, scroll-driven animation, and carousel/interaction work at a level a recruiter can evaluate directly from the code and the rendered page.

## Operating Context

Static site, no build tooling. `index.html` is the main page (desktop-complete, including footer: hero, FSD, safety, software scroll animation, vehicle lineup swiper, charging, quick links, footer). Subpages (e.g. `about.html`) are being built out one at a time and must reuse the main page's header, footer, colors, fonts, spacing, and class-naming conventions. Current phase is subpage construction; responsive/mobile work is explicitly deferred until all subpages are complete.

## Capabilities and Constraints

Plain HTML/CSS/vanilla JS only; jQuery and Swiper are already in use and should be followed in their existing patterns rather than replaced. Swiper, Pretendard, and Google Fonts load from CDN — nothing to install. No responsive/mobile layout work yet by design, not by oversight.

## Brand Commitments

Reproduce Tesla's actual design system (colors, layout, typography, logo/asset usage) as closely as possible — this project's value as a portfolio piece depends on fidelity to the real site, not creative reinterpretation. UI copy is written in Korean.

## Evidence on Hand

The real Tesla.com is the visual and content reference (external, not stored in-repo). Brand assets already in `img/` (Tesla logos, hero video, safety/software imagery) are treated as authoritative. No real product, pricing, or customer data exists behind this site — content should mirror what Tesla's public site communicates, not invent new claims.

## Product Principles

1. Fidelity to the real Tesla design system outranks creative reinterpretation.
2. Desktop completion precedes responsive work — do not blend the two phases.
3. Vanilla HTML/CSS/JS craftsmanship is the skill on display; avoid framework shortcuts.
4. New subpages stay visually and structurally consistent with the main page (shared header, footer, tokens, naming).
