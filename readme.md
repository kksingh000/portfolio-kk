# KK Portfolio — design system

The visual + interaction system for **kksrizzz.online**, the personal portfolio of **Krishna Kumar Singh ("KK")** — final-year B.Tech CSE at NIET Greater Noida, full-stack & AI engineer. One product, one surface: a four-page, scroll-driven 3D portfolio site (React · React Three Fiber + drei · GSAP/Framer Motion · Vite, deployed static on Vercel).

The site's job is not decoration: it is a hiring artifact. Every page argues one thing — *this person ships*. The system is therefore austere (shell white, near-black, gray) with a single teal accent that is reserved, absolutely, for things the visitor is touching.

## Sources I was given

- **Written build brief** — "3D PORTFOLIO — MASTER BUILD BRIEF (v2)", pasted into chat. This is the sole source of truth for the palette, type pairing, page structure, tech tiers, project list, and interaction defaults.
- **Reference/replacement site:** https://kksrizzz.online (not fetched — treated as the thing being replaced; the brief supersedes it, including its gold accent, which is dropped).
- **Named deploy target:** Vercel, account `kksingh000`. Project links referenced in content: `schoolsaavy.com`, `reyva.co.in`, `github.com/kksingh000`.

**Not provided** (and therefore not present): no codebase, no Figma file, no logo, no photography, no project cover art, no font binaries, and **not the ring-carousel reference screenshot** the brief's Page 3 section refers to. Page 3 here is built from the brief's *written* description of that screenshot. See `assets/README.md`.

---

## CONTENT FUNDAMENTALS

**Voice: first person, past tense, load-bearing.** KK writes as a builder describing work that exists. Claims are always attached to a mechanism — the mechanism *is* the credential.

- ✅ "Tenant isolation via JWT middleware plus a global Eloquent scope."
- ✅ "Deterministic regex extraction against ICMR/WHO ranges, then LLM narration."
- ❌ "Leveraging cutting-edge AI to revolutionise healthcare."

**Headline register: serif, declarative, no verb inflation.** The hero line from the brief sets the ceiling for how promotional the copy is ever allowed to be: *"Building software that ships, scales & earns trust."* Short clauses, ampersand over "and" in display type, full stop at the end.

**Labels: mono, uppercase, letter-spaced, separated by `·`.** This is the system's connective tissue. `FULL-STACK & AI ENGINEER · INDIA` · `SAAS · LARAVEL + REACT` · `02 —— TECH STACK` · `DRAG TO ROTATE`. Never sentence-case a mono label; never set body prose in uppercase mono.

**Honesty is a content mechanic.** The iceberg exists to *rank* skills rather than flatten them into a wall of logos. Depth tiers are labelled plainly — "Daily driver", "Shipped in production", "Working knowledge", "Exploring". Do not write copy that promotes a submerged technology into a strength.

**Casing:** display and prose in sentence case; mono labels in uppercase; project names as their real wordmarks (`SchoolSaavy`, `VisaMitra`, `KK Validator`). Numbers zero-padded in section eyebrows (`01`–`04`).

**"You" appears only in interface prompts** — "What are you building?", "Who is this?" — never in the narrative copy about KK.

**No emoji. Anywhere.** Not in copy, not in labels, not as icons. The only non-alphabetic marks in use are `·` (separator), `—` (em dash), `&` (in display), `+` (the enlarge CTA), and `↗` (open-link affordance).

**Length discipline:** project blurbs are one sentence. Page intros are two at most. If a paragraph needs a third sentence, it belongs in the popup, not the scene.

---

## VISUAL FOUNDATIONS

### The one rule
**If it is not hovered, pressed, focused, or currently highlighted, it renders in shell white, black, or gray.** Teal `#2DD4CF` is a *state*, never a decoration. A teal-filled button sitting at rest, a teal section heading, or a teal-tinted card is a bug. Corollary: only one thing on screen is teal at a time — the thing the visitor is touching.

### Color
Shell white `#F5F4F0` (never `#FFFFFF`) and near-black `#0A0A0A` (never `#000000`) are the two grounds; pure values are avoided because the 3D scenes need headroom for lighting and foam. A four-step gray ramp (`#D4D4D6 / #9A9A9E / #5C5C61 / #2B2B2E`) carries all chrome, borders, secondary text and shadow. Scene colors (charcoal water, shell-white foam, cool `#7E8A8C` ice below the waterline) are separate tokens so scene tuning never leaks into UI. `data-theme="deep"` flips surfaces/text for anything sitting over a dark scene. Derived values (`--shell-100`, `--teal-600`, `--teal-300`) are marked as derived in `tokens/colors.css` — the brief supplied only the seven base colors.

### Type
Two families, no third. **Fraunces** (variable, `WONK 1`, low `SOFT`) for anything that speaks — hero name, page headings, project names, contact values. **JetBrains Mono** for everything that labels, measures, or names a technology. Tracking is tight and negative in display (`-0.03em` at hero scale), wide and positive in mono (`0.14em`–`0.2em`). Body copy in this system is mono at 15–17px — it reads as terminal output, which is the point. Line-height: `0.96` for the stacked hero name, `1.06` display, `1.6` body.

### Space & layout
4px base scale, but the *page* rhythm jumps to the editorial end (`--space-9` 96px → `--space-12` 200px) so each of the four pages breathes as a full viewport. `--page-pad-x` is fluid `24–88px`. The hero is a fixed three-column grid (name / photo plane / statement); the iceberg and ring pages are two-column with the scene occupying the optical center. Fixed elements are deliberately minimal: a mono page-index nav top-right in `mix-blend-mode: difference` so it survives both grounds, and a bottom-center scroll cue.

### Corners, borders, cards
Chrome is nearly square: `2px` on badges, `4px` on buttons and inputs, `8px` on thumbnails, `14px` only on cards and floating panels, full pill reserved for anchor dots and circular icon buttons. **Every surface is defined by a 1px hairline, not by fill** — `--border-subtle` at rest, `--accent` when live. Cards: shell (or deep) fill, hairline, `--radius-lg`, and a *neutral* contact shadow; they never carry a colored edge or a left-border accent stripe.

### Shadow & glow
Two separate systems. Neutral shadows (`--shadow-contact` → `--shadow-raised` → `--shadow-float`, plus `--shadow-plane` for the hero photo's in-space drop) describe physical height; they are pure black at low alpha and never tinted. The teal glow system (`--glow-sm/md/waterline`, `--ring-focus`) is the *only* colored shadow and exists exclusively in live states. Focus is a 2px teal ring offset by the page color — never a browser outline.

### Transparency & blur
Used in exactly two places: iceberg tech chips (`backdrop-filter: saturate(120%) blur(10px)` — they float in front of a moving scene and must stay legible without becoming solid cards), and the popup scrim (`rgba(10,10,10,.72)` + `blur(24px)`). Elsewhere, surfaces are opaque. Scrim gradients (`--scrim-top/bottom`) protect text over scenes; capsules are not used for that job.

### Imagery
Monochrome-first. The hero portrait is a textured plane at `grayscale(.72) contrast(1.04)`; off-ring project thumbnails are fully desaturated and dimmed to `0.6`; **only the focused panel's cover returns to full color**, and only while hovered. Cool-toned, no warmth, no grain overlay by default (`--grain-opacity: .035` exists for the scenes if the shader needs tooth).

### Animation
Weighted and inertial — this is a 3D world, so nothing bounces and nothing overshoots. `--ease-out` `cubic-bezier(.16,1,.3,1)` for entrances and hover lift; `--ease-in-out` for camera/scene transitions; `--ease-drag` for the release of a dragged iceberg or ring. Durations: 90ms (color), 180ms (hover), 320ms (transform/shadow), 640ms (panel swap), 1200ms (scene). Idle motion is slow and continuous: the ring auto-rotates at ~0.55 rpm and pauses on hover or drag. Parallax is per-z-layer (`0.14 / 0.08 / 0.03`); photo tilt caps at `9deg`.

### States
- **Hover:** border → teal, text → teal, glow appears, `translateY(-2px)` lift. Never a darker/lighter fill shift alone.
- **Press:** `translateY(1px)`, teal steps down to `--teal-600`. No scale.
- **Focus:** the 2px teal offset ring; inputs light their hairline rule instead.
- **Disabled:** `opacity: .38`, no glow, `not-allowed`.
- **Current/active** (a matched tech badge, the front-center ring card): the same teal treatment as hover — because it is the same idea. Hover and "current" are never visually distinguished.

### Contrast note
Teal on shell white is used for *text* only via `--accent-on-light` (`#1FAFAB`); the raw `--teal-500` is for glow, borders, and text on dark grounds, where it passes comfortably.

---

## ICONOGRAPHY

No icon set was supplied. **Lucide** (`lucide@0.454.0`, UMD via unpkg) is used as a flagged substitution — its 2px round-cap stroke is the closest match to this system's hairline/mono character. There is no icon font, no sprite sheet, and no PNG icons.

- Load `https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js`, then `lucide.createIcons()`; author as `<i data-lucide="rotate-3d">` inside `IconButton`.
- Icons are gray at rest and teal on hover, like everything else. They are never filled and never colored decoratively.
- Icons are **sparse by design** — this site labels with mono text, not glyphs. Real uses: close (`x`), external link (`arrow-up-right`), rotate/drag affordance (`rotate-3d`), ring step (`chevron-left/right`).
- Emoji are never used as icons. A small set of typographic marks does light affordance work instead: `+` (enlarge), `↗` (opens externally), `·` (separator), `—` (rule).
- **If the real site uses a different set, swap it:** drop the SVGs into `assets/icons/` and update this section.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Consumer entry point — `@import` list only |
| `tokens/fonts.css` | Fraunces + JetBrains Mono (Google Fonts; no binaries supplied) |
| `tokens/colors.css` | Base ramp, accent, semantic aliases, scene colors, `[data-theme="deep"]` |
| `tokens/typography.css` | Families, scale, tracking, leading, Fraunces variation axes |
| `tokens/spacing.css` | Space scale, page padding, radii, hit target |
| `tokens/effects.css` | Shadows, glows, scrims, image filters |
| `tokens/motion.css` | Durations, easings, parallax/tilt/ring constants |
| `guidelines/*.html` | 19 specimen cards (Colors, Type, Spacing, Effects, Motion, Brand) |
| `assets/README.md` | What's missing and why nothing was invented |
| `ui_kits/portfolio-site/` | The four-page site recreation + its own README |
| `SKILL.md` | Agent-Skills entry point for use outside this project |

### Components

| Group | Components |
| --- | --- |
| `components/core/` | `Button`, `IconButton`, `Badge`, `Card`, `Dialog`, `Tooltip` |
| `components/forms/` | `Input`, `Textarea` |
| `components/portfolio/` | `SectionLabel`, `TechChip`, `ProjectFocusPanel`, `ContactLink`, `ScrollCue` |

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).

**Intentional additions.** No source defined a component inventory, so the set above was authored from the brief. The four in `components/portfolio/` are not generic primitives — they exist because the brief specifies them by behavior: `TechChip` (billboarded iceberg label + leader line), `ProjectFocusPanel` (the card that breaks off the ring's front-center slot), `SectionLabel` (numbered page eyebrow), `ScrollCue` (scene scroll hint). `Input`/`Textarea` exist only for the Page 4 contact form. Deliberately **not** built: Tabs, Toast, Select, Checkbox/Radio/Switch, Avatar — the site has no surface for them.

### UI kit

`ui_kits/portfolio-site/` — Hero, IcebergScene, ProjectRing, ExperienceContact, plus `projects.js` (the 7 projects and 4 stack tiers as data). Scenes are approximated with CSS 3D transforms, not WebGL; see that folder's README for exactly what is and isn't recreated.
