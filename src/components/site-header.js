"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/#projects" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" }
];

function useTheme() {
  const dark = useSyncExternalStore(
    (callback) => {
      const observer = new MutationObserver(callback);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, []);

  return [dark, toggle];
}

function ThemeIcon({ dark }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <Sun
        size={20}
        className={`absolute inset-0 transition duration-300 ${dark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
      />
      <Moon
        size={20}
        className={`absolute inset-0 transition duration-300 ${dark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`no-print sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-soft" : ""}`}>
      <div className={`section-shell flex items-center justify-between transition-[height] duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <Link href="/" className="focus-ring rounded-md text-sm font-black uppercase tracking-wide">
          Elvis Bitolo
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="focus-ring rounded-md p-2 text-ink/70 hover:text-ink"
          >
            <ThemeIcon dark={dark} />
          </button>
          <Link href="https://github.com/elvisbitolo" aria-label="GitHub" className="text-ink/70 hover:text-ink">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/elvis-bitolo/" aria-label="LinkedIn" className="text-ink/70 hover:text-ink">
            <Linkedin size={20} />
          </Link>
          <Link
            href="/#resume"
            aria-label="Download CV"
            className="focus-ring rounded-md p-2 text-ink/70 hover:text-ink"
          >
            <Download size={18} />
          </Link>
          <Link
            href="/#contact"
            className="focus-ring inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-moss dark:bg-copper dark:text-white dark:hover:bg-moss"
          >
            Get a quote
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="focus-ring rounded-md p-2 text-ink/70 hover:text-ink"
          >
            <ThemeIcon dark={dark} />
          </button>
          <button
            aria-label="Toggle menu"
            className="focus-ring rounded-md border border-ink/15 p-2"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="section-shell animate-fade-up grid gap-2 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-3 text-sm font-semibold hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="focus-ring mt-2 inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-bold text-white dark:bg-copper dark:text-white"
          >
            Get a quote
          </Link>
        </div>
      ) : null}
    </header>
  );
}
