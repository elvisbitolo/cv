import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-ink/10 bg-paper py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-ink/62 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Elvis Bitolo Khanyanga. Built with Next.js and Firebase.</p>
        <Link href="/admin" className="font-bold text-ink hover:text-copper">
          Admin
        </Link>
      </div>
    </footer>
  );
}
