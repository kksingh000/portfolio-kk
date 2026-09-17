One-line: the site's only text action — mono uppercase, teal strictly on hover/press.

```jsx
<Button variant="primary" href="https://schoolsaavy.com" iconRight={<Icon name="arrow-up-right" />}>
  Visit live
</Button>
```

- `primary` ink-filled, flips to teal fill + glow on hover. Use once per view.
- `secondary` hairline outline for paired actions (Live / GitHub).
- `ghost` for dismiss, back, and in-panel navigation.
- Never render a teal-filled button in its default state — that breaks the accent rule.
