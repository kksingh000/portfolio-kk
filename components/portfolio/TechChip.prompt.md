One-line: the floating HTML label used for every technology on the iceberg (drei `<Html>` in the real build).

```jsx
<TechChip zone="peak" leader={72}>React</TechChip>
<TechChip zone="below-deep" leaderSide="right" leader={48}>LangChain</TechChip>
```

- Submerged zones render cooler and dimmer; they do not get a different hue, only tint + opacity.
- The hover sub-note ("Daily driver", "Exploring") is derived from `zone`; don't hand-write it.
- Only ONE chip should be `active` at a time — it is the "currently-focused tech" state.
