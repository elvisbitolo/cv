import Link from "next/link";

export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-moss dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
      : "border border-ink/15 bg-surface/70 text-ink hover:border-copper hover:text-copper";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
