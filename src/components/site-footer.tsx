import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { ADDRESS, HOURS, NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Mark className="size-7" />
            <span className="font-display text-2xl tracking-tight">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {SITE.blurb} Walk the garden forty-five minutes before your sitting.
          </p>
        </div>
        <div>
          <p className="kicker text-cream/50">Visit</p>
          <p className="mt-3 font-display text-xl">{ADDRESS.line1}</p>
          <p className="mt-1 text-sm leading-relaxed text-cream/70">
            {ADDRESS.line2}
            <br />
            {ADDRESS.city}
          </p>
          <p className="mt-3 text-sm text-cream/70">{SITE.phone}</p>
        </div>
        <div>
          <p className="kicker text-cream/50">Hours</p>
          <ul className="mt-3 space-y-1.5 text-sm text-cream/70">
            {HOURS.filter((row) => row.note !== "Closed").map((row) => (
              <li key={row.day} className="flex justify-between gap-4">
                <span>{row.day}</span>
                <span className="text-cream/90">{row.note.replace(" · ", " ")}</span>
              </li>
            ))}
            <li className="pt-1 text-cream/50">Closed Monday & Tuesday</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-cream">
                {item.label}
              </Link>
            ))}
          </nav>
          <p>Est. 2019 · Conservatory 1894</p>
        </div>
      </div>
    </footer>
  );
}
