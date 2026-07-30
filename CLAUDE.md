# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A Tesla-branded website project — not just a single landing page.

- **Main page**: mostly complete for desktop, including the footer.
- **Current priority**: building out subpages.
- **Next phase**: once all subpages are complete, responsive work will be done across the entire site (main page + subpages).

Do not start responsive/mobile work while subpages are still being built, unless explicitly asked to.

- `index.html` — the main page, section by section (visual hero, FSD, safety, software scroll animation, vehicle lineup swiper, charging, quick links, footer).
- `css/style.css` — styles.
- `script/main.js` — behavior: scroll-driven animations for the software section, a Swiper carousel for the vehicle lineup, a counter, and header scroll effects.
- `img/` — images and video assets used directly by the HTML/CSS.

External dependencies (Swiper, Pretendard font, Google Fonts) are loaded from CDN in `<head>` — there is nothing to install.

## Working rules

- Before making edits, always inspect the relevant HTML, CSS, and JavaScript files first, and preserve the existing coding style. Do not perform large-scale refactoring unless explicitly requested.
- Do not modify the existing main page's design, class names, animations, or functionality unless explicitly asked to.
- When building new subpages, reuse the main page's header, footer, colors, fonts, spacing, and class-naming conventions so the whole site stays visually and structurally consistent.
- When generating new HTML or CSS, follow the existing project's naming convention, indentation, formatting, and code style so new code matches the existing codebase.
- Keep the current file structure and design system; modify only what the task actually requires.
- Use plain HTML/CSS and vanilla JavaScript by default. jQuery and Swiper are already used in this project — follow their existing usage patterns rather than introducing new patterns or libraries.
- UI copy and descriptions are written in Korean by default.

## Previewing changes

Serve the folder with a local static server (e.g. `npx serve`, VS Code Live Server, `python -m http.server`) rather than opening files via `file://`.

## Known issue: Swiper CDN version mismatch

`index.html` loads Swiper's CSS from `swiper@12` but the JS bundle from `swiper@14.0.1`. Recommended fix: align both to `swiper@12`.
