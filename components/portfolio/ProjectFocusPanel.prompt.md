One-line: the large floating panel for whichever project is focused in the ring.

```jsx
<ProjectFocusPanel name="VisaMitra" category="AI · FastAPI + GPT-4o-mini" onEnlarge={open} />
```

- Exactly one is on screen at a time; it is always the focused element, so its CTA is teal by default.
- Cover art desaturates back to grayscale when the panel is not hovered.
