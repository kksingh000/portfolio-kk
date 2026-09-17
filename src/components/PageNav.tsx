import React from "react";

import { pages } from "../data/site";

/**
 * The only fixed chrome besides the scroll cue: a mono page index in
 * `mix-blend-mode: difference` so one element survives both the shell-white
 * and near-black grounds.
 */
export function PageNav() {
  const [current, setCurrent] = React.useState(pages[0].id as string);

  React.useEffect(() => {
    const sections = pages
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -20% 0px" },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="page-nav" aria-label="Page index">
      {pages.map((p) => (
        <a
          key={p.id}
          className="page-nav__item"
          href={"#" + p.id}
          data-current={current === p.id}
          aria-current={current === p.id ? "true" : undefined}
        >
          {String(p.index).padStart(2, "0")} {p.nav}
        </a>
      ))}
    </nav>
  );
}
