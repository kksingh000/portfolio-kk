# Assets

**Nothing here yet — no visual assets were supplied with the brief.**

Missing, and needed to finish the system:
- **Logo / brand mark.** None provided, so none was drawn. Everywhere a mark would sit, the system
  sets the name in Fraunces (see `guidelines/brand-wordmark.html`). Do not invent one.
- **Portrait photo** for the hero's 3D plane (Page 1). Placeholder plane in the UI kit.
- **Project cover images** (7). `ProjectFocusPanel` renders a labelled placeholder without `cover`.
- **Font binaries.** Fraunces and JetBrains Mono load from Google Fonts (`tokens/fonts.css`).

## Icons
Lucide (`lucide@0.454.0`, UMD from unpkg) — **a flagged substitution**: the brief named no icon set.
Lucide's 2px round-cap stroke is the closest match to the hairline/mono character of this system.
Load it and call `lucide.createIcons()`, then use `<i data-lucide="x">` inside `IconButton`.
If the real site uses a different set, replace this and drop the SVGs into `assets/icons/`.
