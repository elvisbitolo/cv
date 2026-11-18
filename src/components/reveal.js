"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  style,
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !document.documentElement.classList.contains("js-motion")) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.revealVisible = "true";
        observer.unobserve(node);
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      delete node.dataset.revealVisible;
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
