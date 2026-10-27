import Link from "next/link";
import { profile } from "@/lib/profile-data";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-ink/10 bg-paper py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-ink/62 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Elvis Bitolo Khanyanga. Built with Next.js and Firebase.</p>
        {profile.iknuvaCode ? (
          <p className="text-xs text-ink/40">IKNUVA: {profile.iknuvaCode}</p>
        ) : null}
        <Link href="/admin" aria-label="Admin" className="block h-2.5 w-2.5 rounded-full bg-ink/30 transition hover:bg-copper" />
      </div>
    </footer>
  );
}
