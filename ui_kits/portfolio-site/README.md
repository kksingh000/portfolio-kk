# UI kit — kksrizzz.online portfolio (4 pages)

A flat-DOM recreation of the four-page 3D portfolio described in the build brief. The real site is
React Three Fiber + drei + GSAP/Framer Motion on Vite; this kit stands in for the scenes with CSS 3D
transforms so the *visual system* (palette, type, chip/panel/popup treatments, accent rule) can be
reviewed without a WebGL build.

| File | Screen |
| --- | --- |
| `Hero.jsx` | 01 — three-column hero, mouse parallax by z-layer, tilting portrait plane |
| `IcebergScene.jsx` | 02 — monochrome ocean, teal waterline, drag-rotated iceberg, `TechChip` labels in four depth tiers |
| `ProjectRing.jsx` | 03 — tilted elliptical ring (`rotateX(-58deg)`), auto-rotation, front-center card breaking off into `ProjectFocusPanel`, popup via `Dialog` |
| `ExperienceContact.jsx` | 04 — light landing: experience cards, contact rows, contact form |
| `projects.js` | the 7 projects and the 4 stack tiers as plain data |

## Knowingly not recreated
- Real shaders (ocean, fresnel/refraction below the waterline), real geometry, real lighting.
- GSAP ScrollTrigger camera pushes between pages — here the pages simply stack and scroll.
- The lite/mobile fallback path (capability detection); this kit is desktop-width only.
- Photography and project covers: **no image assets were supplied**, so covers render as labelled placeholders.
