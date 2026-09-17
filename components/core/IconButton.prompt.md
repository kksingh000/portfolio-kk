One-line: icon-only control for popup close, ring nudge, and external links.

```jsx
<IconButton label="Close project" variant="bare" onClick={close}>
  <Icon name="x" />
</IconButton>
```

- `outline` default; `bare` inside popups and over scenes; `circle` for ring/scene overlays.
- Always 44px min except `sm` inside dense panel headers.
