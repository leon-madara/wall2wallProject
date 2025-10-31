# Frontend – Changes and TODOs

Date: 2025-10-31

## What’s changed
- Header (desktop): centered pill nav with active underline; logo on left.
- Header (mobile): logo (left) + “Nexus” (center) + hamburger (right).
  - Full-screen overlay menu on open; gradient background (#d7887b → #a64737), text #fef5df, slide-down animation; page scroll disabled.
- Hero: responsive background images (`src/imag1.png` desktop, `src/imag2mobyl.png` mobile).
  - Desktop title offset ~15vh; mobile CTAs stacked at ~80vh.
- Buttons: primary `#b95340`; secondary border `#b95340`, text `#fdf4dd`.
- Mobile CTAs animate in (fade + slide-up, staggered).

## TODOs / Next steps
- Typography polish to match reference exactly (sizes/weights/spacing per breakpoint).
- Improve mobile menu: focus trap, ESC to close, restore focus to hamburger.
- Hover/active styles for nav + buttons; aria-current for active link.
- Optional: overlay blur/drop-shadow, slower easing on menu.
- Make brand title “Nexus” configurable.
- Verify 320–375px widths: ensure CTAs don’t overlap content; adjust from 80vh if needed.
- Add route/page scaffolds for Products/Projects/About/Contact (or anchor targets).

## How to run
- Dev server: `npm start`
- Lint/tests: `npm test`

