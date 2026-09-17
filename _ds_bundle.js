/* @ds-bundle: {"format":4,"namespace":"KKPortfolioDesignSystem_b5704f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ContactLink","sourcePath":"components/portfolio/ContactLink.jsx"},{"name":"ProjectFocusPanel","sourcePath":"components/portfolio/ProjectFocusPanel.jsx"},{"name":"ScrollCue","sourcePath":"components/portfolio/ScrollCue.jsx"},{"name":"SectionLabel","sourcePath":"components/portfolio/SectionLabel.jsx"},{"name":"TechChip","sourcePath":"components/portfolio/TechChip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"636cf0b20735","components/core/Button.jsx":"a0e2e7e46df0","components/core/Card.jsx":"e11172757673","components/core/Dialog.jsx":"86e2581d3ed9","components/core/IconButton.jsx":"734e375bf1b8","components/core/Tooltip.jsx":"489305fb5050","components/forms/Input.jsx":"c3e689cc5cdb","components/forms/Textarea.jsx":"827d96a9c01f","components/portfolio/ContactLink.jsx":"76875f0d7ed7","components/portfolio/ProjectFocusPanel.jsx":"795263bd8f39","components/portfolio/ScrollCue.jsx":"97809cb785ef","components/portfolio/SectionLabel.jsx":"41e49e6a8199","components/portfolio/TechChip.jsx":"0987962d00e6","ui_kits/portfolio-site/ExperienceContact.jsx":"98088ef2e407","ui_kits/portfolio-site/Hero.jsx":"4f846fef33b5","ui_kits/portfolio-site/IcebergScene.jsx":"fcb94ee10fd6","ui_kits/portfolio-site/ProjectRing.jsx":"4ffee97d1106","ui_kits/portfolio-site/projects.js":"831b97934a1a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KKPortfolioDesignSystem_b5704f = window.KKPortfolioDesignSystem_b5704f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "neutral",
  active = false,
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || interactive && hover;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      padding: "5px 10px",
      borderRadius: "var(--radius-xs)",
      border: "var(--border-hair) solid " + (lit ? "var(--accent)" : "var(--border-subtle)"),
      background: lit ? "var(--accent-wash)" : tone === "solid" ? "var(--bg-sunken)" : "transparent",
      color: lit ? "var(--accent-on-light)" : "var(--text-secondary)",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-interactive)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: "8px 14px",
  md: "12px 22px",
  lg: "16px 30px"
};
const fs = {
  sm: "var(--text-micro)",
  md: "var(--text-label)",
  lg: "var(--text-body-sm)"
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const on = hover && !disabled;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    font: "inherit",
    fontFamily: "var(--font-mono)",
    fontSize: fs[size],
    fontWeight: "var(--weight-medium)",
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: pad[size],
    borderRadius: "var(--radius-sm)",
    border: "var(--border-hair) solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-interactive)",
    minHeight: size === "sm" ? "34px" : "var(--hit-min)",
    transform: down && !disabled ? "translateY(1px)" : "none",
    opacity: disabled ? 0.38 : 1,
    whiteSpace: "nowrap"
  };
  const looks = {
    primary: {
      background: on ? "var(--accent)" : "var(--text-primary)",
      color: on ? "var(--ink-900)" : "var(--text-inverse)",
      boxShadow: on ? "var(--glow-md)" : "var(--shadow-contact)"
    },
    secondary: {
      background: "transparent",
      color: on ? "var(--accent-on-light)" : "var(--text-primary)",
      borderColor: on ? "var(--accent)" : "var(--border-strong)",
      boxShadow: on ? "var(--glow-sm)" : "none"
    },
    ghost: {
      background: on ? "var(--accent-wash)" : "transparent",
      color: on ? "var(--accent-on-light)" : "var(--text-secondary)",
      padding: size === "lg" ? "12px 16px" : "8px 12px"
    }
  }[variant];
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...base,
      ...looks,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  elevation = "contact",
  interactive = false,
  focused = false,
  padding = "var(--space-5)",
  theme,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = focused || interactive && hover;
  const shadow = {
    flat: "none",
    contact: "var(--shadow-contact)",
    raised: "var(--shadow-raised)",
    float: "var(--shadow-float)"
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": theme,
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      border: "var(--border-hair) solid " + (lit ? "var(--accent)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: lit ? "var(--glow-md)," + (shadow === "none" ? "var(--shadow-raised)" : shadow) : shadow,
      transform: lit ? "translateY(-2px)" : "none",
      transition: "var(--transition-interactive)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = {
  sm: 34,
  md: 44,
  lg: 52
};
function IconButton({
  children,
  label,
  size = "md",
  variant = "outline",
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  const s = box[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s,
      height: s,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: variant === "circle" ? "var(--radius-pill)" : "var(--radius-sm)",
      border: "var(--border-hair) solid " + (on ? "var(--accent)" : variant === "bare" ? "transparent" : "var(--border-strong)"),
      background: variant === "bare" ? on ? "var(--accent-wash)" : "transparent" : "var(--surface-card)",
      color: on ? "var(--accent-on-light)" : "var(--text-secondary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      boxShadow: on ? "var(--glow-sm)" : "none",
      transition: "var(--transition-interactive)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  onClose,
  footer,
  children,
  width = 720,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      background: "var(--scene-fog)",
      backdropFilter: "var(--blur-scrim)",
      animation: "none"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    "data-theme": "deep",
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(" + width + "px, 100%)",
      maxHeight: "86vh",
      overflow: "auto",
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      border: "var(--border-hair) solid var(--accent)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--glow-md),var(--shadow-float)",
      padding: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "var(--space-3)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-display)",
      fontVariationSettings: "var(--fraunces-text)"
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    variant: "bare",
    size: "sm",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-secondary)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = "top",
  children,
  style
}) {
  const [on, setOn] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      opacity: on ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-out)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      padding: "6px 9px",
      borderRadius: "var(--radius-xs)",
      background: "var(--ink-900)",
      color: "var(--shell-000)",
      border: "var(--border-hair) solid var(--accent)",
      boxShadow: "var(--glow-sm)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type = "text",
  invalid = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent-on-light)" : "var(--text-muted)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-primary)",
      background: "transparent",
      padding: "12px 0",
      minHeight: "var(--hit-min)",
      border: "none",
      borderBottom: "var(--border-hair) solid " + (invalid ? "var(--gray-800)" : focus ? "var(--accent)" : "var(--border-strong)"),
      boxShadow: focus ? "0 1px 0 0 var(--accent)" : "none",
      outline: "none",
      borderRadius: 0,
      transition: "border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent-on-light)" : "var(--text-muted)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-primary)",
      background: "transparent",
      padding: "12px",
      resize: "vertical",
      border: "var(--border-hair) solid " + (focus ? "var(--accent)" : "var(--border-strong)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "var(--glow-sm)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ContactLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactLink({
  label,
  value,
  href,
  copyable = false,
  theme,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const copy = e => {
    if (!copyable) return;
    e.preventDefault();
    navigator.clipboard && navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    "data-theme": theme,
    href: href,
    onClick: copy,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      alignItems: "baseline",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      textDecoration: "none",
      borderBottom: "var(--border-hair) solid " + (hover ? "var(--accent)" : "var(--border-subtle)"),
      color: "var(--text-primary)",
      transition: "var(--transition-interactive)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: hover ? "var(--accent-on-light)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-subheading)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-display)",
      fontVariationSettings: "var(--fraunces-text)",
      overflowWrap: "anywhere"
    }
  }, value)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: hover ? "var(--accent-on-light)" : "var(--text-muted)",
      transform: hover ? "translateX(3px)" : "none",
      transition: "var(--transition-interactive)",
      whiteSpace: "nowrap"
    }
  }, copied ? "copied" : copyable ? "copy" : "open ↗"));
}
Object.assign(__ds_scope, { ContactLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ContactLink.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectFocusPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectFocusPanel({
  name,
  category,
  cover,
  coverAlt = "",
  onEnlarge,
  width = 420,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": "deep",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onEnlarge,
    style: {
      width,
      cursor: "pointer",
      padding: "var(--space-3)",
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      border: "var(--border-hair) solid " + (hover ? "var(--accent)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: (hover ? "var(--glow-md)," : "") + "var(--shadow-float)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "var(--transition-interactive)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--gray-800)",
      display: "grid",
      placeItems: "center"
    }
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: coverAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: hover ? "none" : "var(--desaturate-photo)",
      transition: "filter var(--dur-base) var(--ease-out)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--gray-400)"
    }
  }, "cover image")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-3) var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-display)",
      fontVariationSettings: "var(--fraunces-text)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--accent)",
      textShadow: hover ? "0 0 16px var(--teal-a35)" : "none",
      transition: "text-shadow var(--dur-base) var(--ease-out)"
    }
  }, "click to enlarge", /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? "rotate(90deg)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, "+"))));
}
Object.assign(__ds_scope, { ProjectFocusPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectFocusPanel.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ScrollCue.jsx
try { (() => {
function ScrollCue({
  label = "scroll",
  theme = "deep",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 44,
      background: "linear-gradient(to bottom,var(--gray-400),transparent)"
    }
  }));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SectionLabel.jsx
try { (() => {
function SectionLabel({
  index,
  children,
  align = "left",
  theme,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      ...style
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "var(--space-6)",
      height: 1,
      background: "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TechChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const zoneMeta = {
  peak: {
    note: "Daily driver",
    submerged: false
  },
  upper: {
    note: "Shipped in production",
    submerged: false
  },
  "below-shallow": {
    note: "Working knowledge",
    submerged: true
  },
  "below-deep": {
    note: "Exploring",
    submerged: true
  }
};
function TechChip({
  children,
  zone = "peak",
  leader = 64,
  leaderSide = "left",
  active = false,
  onHoverChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;
  const meta = zoneMeta[zone] || zoneMeta.peak;
  const line = /*#__PURE__*/React.createElement("span", {
    style: {
      width: leader,
      height: 1,
      flex: "0 0 auto",
      background: lit ? "var(--accent)" : "var(--gray-400)",
      boxShadow: lit ? "var(--glow-waterline)" : "none",
      transition: "var(--transition-interactive)"
    }
  });
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "var(--radius-pill)",
      flex: "0 0 auto",
      background: lit ? "var(--accent)" : "var(--gray-400)",
      boxShadow: lit ? "0 0 0 4px var(--teal-a35)" : "none",
      transition: "var(--transition-interactive)"
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => {
      setHover(true);
      onHoverChange && onHoverChange(true);
    },
    onMouseLeave: () => {
      setHover(false);
      onHoverChange && onHoverChange(false);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), leaderSide === "left" && /*#__PURE__*/React.createElement(React.Fragment, null, dot, line), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 2,
      padding: "7px 11px",
      borderRadius: "var(--radius-sm)",
      background: meta.submerged ? "rgba(126,138,140,.16)" : "rgba(245,244,240,.08)",
      backdropFilter: "var(--blur-chip)",
      border: "var(--border-hair) solid " + (lit ? "var(--accent)" : meta.submerged ? "rgba(154,154,158,.35)" : "rgba(212,212,214,.45)"),
      boxShadow: lit ? "var(--glow-md)" : "none",
      color: lit ? "var(--teal-300)" : meta.submerged ? "var(--gray-200)" : "var(--shell-000)",
      opacity: meta.submerged && !lit ? 0.74 : 1,
      transition: "var(--transition-interactive)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "0.04em",
      fontWeight: "var(--weight-medium)"
    }
  }, children), lit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, meta.note)), leaderSide === "right" && /*#__PURE__*/React.createElement(React.Fragment, null, line, dot));
}
Object.assign(__ds_scope, { TechChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TechChip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ExperienceContact.jsx
try { (() => {
const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};
const roles = [{
  role: "Software Developer Intern",
  org: "SchoolSaavy",
  when: "2025 — present",
  stack: ["Laravel", "React", "MySQL"]
}, {
  role: "Frontend Intern",
  org: "Dabster SoftTech",
  when: "Aug 2025",
  stack: ["React", "Tailwind"]
}, {
  role: "B.Tech CSE, final year",
  org: "NIET Greater Noida",
  when: "2026",
  stack: []
}];
function ExperienceContact() {
  const {
    SectionLabel,
    Card,
    Badge,
    ContactLink,
    Input,
    Textarea,
    Button
  } = __ds();
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "04 Experience + contact",
    style: {
      minHeight: "100vh",
      padding: "var(--page-pad-y) var(--page-pad-x)",
      display: "grid",
      gap: "var(--space-8)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 4
  }, "Experience & contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-display)",
      fontWeight: "var(--weight-semibold)",
      fontVariationSettings: "var(--fraunces-text)"
    }
  }, "Where I have shipped"), roles.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.role,
    interactive: true,
    elevation: "contact",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-subheading)",
      letterSpacing: "var(--tracking-display)",
      fontVariationSettings: "var(--fraunces-text)"
    }
  }, r.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, r.org)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, r.when)), r.stack.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "var(--space-4)"
    }
  }, r.stack.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactLink, {
    label: "Email",
    value: "kkandsingh000@gmail.com",
    copyable: true
  }), /*#__PURE__*/React.createElement(ContactLink, {
    label: "GitHub",
    value: "github.com/kksingh000",
    href: "https://github.com/kksingh000"
  }), /*#__PURE__*/React.createElement(ContactLink, {
    label: "LinkedIn",
    value: "11K+ followers",
    href: "https://www.linkedin.com/"
  }), /*#__PURE__*/React.createElement(ContactLink, {
    label: "Live site",
    value: "kksrizzz.online",
    href: "https://kksrizzz.online"
  })), /*#__PURE__*/React.createElement(Card, {
    elevation: "contact",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Who is this?"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 4,
    placeholder: "What are you building?"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      justifySelf: "start"
    }
  }, "Send it"))))));
}
Object.assign(window, {
  ExperienceContact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ExperienceContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Hero.jsx
try { (() => {
const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};
function Hero() {
  const {
    SectionLabel,
    ScrollCue
  } = __ds();
  const [m, setM] = React.useState({
    x: 0,
    y: 0
  });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setM({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5
    });
  };
  const layer = mult => ({
    transform: "translate3d(" + (-m.x * mult * 100).toFixed(2) + "px," + (-m.y * mult * 60).toFixed(2) + "px,0)"
  });
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Hero",
    onMouseMove: onMove,
    onMouseLeave: () => setM({
      x: 0,
      y: 0
    }),
    style: {
      minHeight: "100vh",
      padding: "var(--page-pad-y) var(--page-pad-x)",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      gap: "var(--space-7)",
      perspective: "1200px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 1
  }, "Krishna Kumar Singh \xB7 portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.95fr) minmax(0,.9fr)",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-hero)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-hero)",
      fontWeight: "var(--weight-semibold)",
      fontVariationSettings: "var(--fraunces-display)",
      ...layer(0.14)
    }
  }, "Krishna", /*#__PURE__*/React.createElement("br", null), "Kumar", /*#__PURE__*/React.createElement("br", null), "Singh"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer(0.08),
      transformStyle: "preserve-3d"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 5",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: "linear-gradient(160deg,var(--gray-200),var(--gray-600) 70%,var(--gray-800))",
      filter: "var(--desaturate-photo)",
      boxShadow: "var(--shadow-plane)",
      transform: "rotateY(" + (m.x * 9).toFixed(2) + "deg) rotateX(" + (-m.y * 9).toFixed(2) + "deg)",
      transition: "transform var(--dur-fast) var(--ease-out)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      color: "var(--shell-000)"
    }
  }, "PORTRAIT PLANE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer(0.03),
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-subheading)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-primary)",
      fontVariationSettings: "var(--fraunces-text)",
      maxWidth: "26ch"
    }
  }, "Building software that ships, scales & earns trust."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, "Full-stack & AI engineer \xB7 India"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ScrollCue, {
    theme: undefined,
    label: "Scroll into the water"
  })));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/IcebergScene.jsx
try { (() => {
const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};
function IcebergScene() {
  const {
    SectionLabel,
    TechChip,
    Tooltip,
    IconButton
  } = __ds();
  const [rot, setRot] = React.useState(-8);
  const drag = React.useRef(null);
  const zones = window.KK_STACK;
  const down = e => {
    drag.current = {
      x: e.clientX,
      r: rot
    };
  };
  const move = e => {
    if (drag.current) setRot(drag.current.r + (e.clientX - drag.current.x) * 0.25);
  };
  const up = () => {
    drag.current = null;
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-theme": "deep",
    "data-screen-label": "02 Ocean + iceberg",
    onMouseDown: down,
    onMouseMove: move,
    onMouseUp: up,
    onMouseLeave: up,
    style: {
      minHeight: "100vh",
      position: "relative",
      background: "var(--ink-900)",
      color: "var(--text-primary)",
      padding: "var(--page-pad-y) var(--page-pad-x)",
      overflow: "hidden",
      cursor: drag.current ? "grabbing" : "grab"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "52% 0 0 0",
      background: "linear-gradient(to bottom,var(--scene-water),var(--scene-water-deep))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "52%",
      height: 1,
      background: "var(--waterline)",
      boxShadow: "var(--glow-waterline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
      gap: "var(--space-8)",
      alignItems: "center",
      minHeight: "78vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 2,
    theme: "deep"
  }, "Tech stack \xB7 the iceberg"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      fontWeight: "var(--weight-semibold)",
      fontVariationSettings: "var(--fraunces-display)"
    }
  }, "What I know,", /*#__PURE__*/React.createElement("br", null), "and how deep"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-secondary)",
      maxWidth: "44ch"
    }
  }, "Above the waterline is what I reach for daily. Below it is what I have used, read and debugged \u2014 honestly ordered, not flattened into one list."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Drag to rotate"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Rotate the iceberg",
    variant: "circle"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "rotate-3d",
    style: {
      width: 18,
      height: 18
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Y-axis locked \xB7 ", Math.round(rot), "\xB0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "72vh",
      display: "grid",
      alignContent: "center",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "8%",
      width: 260,
      height: "84%",
      transform: "rotateY(" + rot * 0.4 + "deg)",
      transformStyle: "preserve-3d",
      background: "linear-gradient(to bottom,var(--scene-ice-above) 0%,var(--scene-ice-above) 44%,var(--scene-ice-below) 45%,rgba(126,138,140,.35) 100%)",
      clipPath: "polygon(48% 0%,66% 18%,58% 40%,84% 44%,72% 74%,50% 100%,28% 72%,16% 44%,40% 40%,32% 17%)",
      filter: "saturate(.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gap: "var(--space-4)",
      width: "100%"
    }
  }, zones.map((z, zi) => /*#__PURE__*/React.createElement("div", {
    key: z.zone,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      justifyContent: zi % 2 ? "flex-end" : "flex-start"
    }
  }, z.items.map(t => /*#__PURE__*/React.createElement(TechChip, {
    key: t,
    zone: z.zone,
    leader: zi % 2 ? 34 : 48,
    leaderSide: zi % 2 ? "right" : "left"
  }, t))))))));
}
Object.assign(window, {
  IcebergScene
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/IcebergScene.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ProjectRing.jsx
try { (() => {
const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};
function ProjectRing() {
  const {
    SectionLabel,
    ProjectFocusPanel,
    Dialog,
    Button,
    Badge
  } = __ds();
  const projects = window.KK_PROJECTS;
  const n = projects.length;
  const [angle, setAngle] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const paused = hover != null || open;
  React.useEffect(() => {
    let raf,
      last = performance.now();
    const tick = t => {
      const dt = t - last;
      last = t;
      if (!paused) setAngle(a => a + dt * 0.006);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);
  const step = 360 / n;
  const nearest = (Math.round(-angle / step) % n + n) % n;
  const focused = hover != null ? hover : nearest;
  const project = projects[focused];
  return /*#__PURE__*/React.createElement("section", {
    "data-theme": "deep",
    "data-screen-label": "03 Project ring",
    style: {
      minHeight: "100vh",
      background: "var(--ink-900)",
      color: "var(--text-primary)",
      padding: "var(--page-pad-y) var(--page-pad-x)",
      overflow: "hidden",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 3,
    theme: "deep"
  }, "Selected work \xB7 ", n, " projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      perspective: "1100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "62%",
      transformStyle: "preserve-3d",
      transform: "translate(-50%,-50%) rotateX(-58deg) rotateZ(" + angle + "deg)"
    }
  }, projects.map((p, i) => {
    const a = i * step;
    const lit = i === focused;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      onClick: () => setOpen(true),
      style: {
        position: "absolute",
        width: 170,
        height: 106,
        marginLeft: -85,
        marginTop: -53,
        cursor: "pointer",
        transform: "rotateZ(" + a + "deg) translateY(-300px) rotateZ(" + -a + "deg) rotateZ(" + -angle + "deg)",
        transformStyle: "preserve-3d"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        borderRadius: "var(--radius-md)",
        background: "linear-gradient(140deg,var(--gray-600),var(--gray-800))",
        border: "var(--border-hair) solid " + (lit ? "var(--accent)" : "var(--border-subtle)"),
        boxShadow: lit ? "var(--glow-md)" : "var(--shadow-contact)",
        filter: lit ? "none" : "var(--desaturate-thumb)",
        opacity: lit ? 1 : 0.6,
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "var(--space-3)",
        transition: "var(--transition-interactive)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-micro)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: lit ? "var(--teal-300)" : "var(--gray-200)"
      }
    }, p.name)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      transform: "translateY(-6%)"
    }
  }, /*#__PURE__*/React.createElement(ProjectFocusPanel, {
    name: project.name,
    category: project.category,
    width: 400,
    onEnlarge: () => setOpen(true)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, paused ? "Ring paused" : "Drag or hover a card to focus it")), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    eyebrow: project.category,
    title: project.name,
    width: 640,
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, project.live && /*#__PURE__*/React.createElement(Button, {
      href: project.live
    }, "Live site"), project.repo && /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      href: "https://" + project.repo
    }, "GitHub"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Close"))
  }, project.blurb, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "var(--space-5)"
    }
  }, project.stack.map((t, i) => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    active: i === 0
  }, t)))));
}
Object.assign(window, {
  ProjectRing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ProjectRing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/projects.js
try { (() => {
window.KK_PROJECTS = [{
  name: "SchoolSaavy",
  category: "SAAS · LARAVEL + REACT",
  blurb: "Multi-tenant school management SaaS. Tenant isolation via JWT middleware plus a global Eloquent scope.",
  stack: ["Laravel", "React", "MySQL", "JWT", "Docker"],
  live: "https://schoolsaavy.com",
  repo: null
}, {
  name: "VisaMitra",
  category: "AI · FASTAPI + GPT-4o-MINI",
  blurb: "AI visa navigator covering 10 corridors, with SSE-streamed answers over a MongoDB Atlas knowledge base.",
  stack: ["FastAPI", "OpenAI API", "MongoDB Atlas", "SSE"],
  live: null,
  repo: "github.com/kksingh000"
}, {
  name: "LabMitra",
  category: "HEALTH · PYTHON + LLM",
  blurb: "Blood report PDF parser: deterministic regex extraction against ICMR/WHO ranges, then LLM narration.",
  stack: ["FastAPI", "Regex", "OpenAI API", "Render"],
  live: null,
  repo: "github.com/kksingh000"
}, {
  name: "Tasque",
  category: "PRODUCTIVITY · REACT + LARAVEL",
  blurb: "Dark-themed team task manager with a drag-and-drop kanban board.",
  stack: ["React", "Laravel", "MySQL", "Railway"],
  live: null,
  repo: "github.com/kksingh000"
}, {
  name: "QuickShow",
  category: "TICKETING · MERN + STRIPE",
  blurb: "Movie ticket booking with trailers, Clerk auth and a Stripe sandbox checkout.",
  stack: ["MongoDB", "Express", "React", "Clerk", "Stripe"],
  live: null,
  repo: "github.com/kksingh000"
}, {
  name: "KK Validator",
  category: "AI · NODE + SUPABASE",
  blurb: "AI startup-idea validator that scores a pitch and returns a structured critique.",
  stack: ["Node.js", "Supabase", "OpenAI API"],
  live: null,
  repo: "github.com/kksingh000"
}, {
  name: "Reyva",
  category: "COMMERCE · NEXT.JS + NESTJS",
  blurb: "Sneaker and sportswear storefront built as a Next.js / NestJS / PostgreSQL monorepo.",
  stack: ["Next.js", "NestJS", "PostgreSQL", "Monorepo"],
  live: "https://reyva.co.in",
  repo: null
}];
window.KK_STACK = [{
  zone: "peak",
  label: "Peak · above the waterline",
  items: ["React", "JavaScript / TypeScript", "Node.js", "Laravel", "Tailwind"]
}, {
  zone: "upper",
  label: "Upper body · just above",
  items: ["Next.js", "Express", "FastAPI", "MongoDB", "Supabase"]
}, {
  zone: "below-shallow",
  label: "Submerged · upper",
  items: ["Spring Boot", "PostgreSQL", "MySQL", "Redis", "Docker / CI-CD"]
}, {
  zone: "below-deep",
  label: "Submerged · deep",
  items: ["LangChain", "RAG", "Prompt Engineering", "OpenAI API", "AWS"]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/projects.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ContactLink = __ds_scope.ContactLink;

__ds_ns.ProjectFocusPanel = __ds_scope.ProjectFocusPanel;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.TechChip = __ds_scope.TechChip;

})();
