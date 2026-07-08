"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }, []);

  return [dark, toggle];
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dark, toggleTheme] = useTheme();

  return (
    <header className="no-print sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring rounded-md text-sm font-black uppercase tracking-wide">
          Elvis Bitolo
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink/70 hover:text-ink">
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="focus-ring rounded-md p-2 text-ink/70 hover:text-ink"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="https://github.com/elvisbitolo" aria-label="GitHub" className="text-ink/70 hover:text-ink">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/elvis-bitolo/" aria-label="LinkedIn" className="text-ink/70 hover:text-ink">
            <Linkedin size={20} />
          </Link>
          <Link
            href="#resume"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-moss dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
          >
            <Download size={17} />
            CV
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="focus-ring rounded-md p-2 text-ink/70 hover:text-ink"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
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
        <div className="section-shell grid gap-2 pb-4 md:hidden">
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
          <Link href="/admin" className="rounded-md px-2 py-3 text-sm font-semibold hover:bg-surface">
            Admin
          </Link>
        </div>
      ) : null}
    </header>
  );
}
