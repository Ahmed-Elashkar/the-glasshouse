import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { EVENINGS } from "@/lib/site";

export const Route = createFileRoute("/evenings")({ component: EveningsPage });

function EveningsPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <p className="kicker">Beyond dinner</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-7xl">
          Evenings in the house
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sage">
          Private tables, a quiet trio, and a Sunday spent cutting herbs. Write
          to us if you would like the conservatory for a day.
        </p>
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-5 pb-20 sm:px-8">
        {EVENINGS.map((event, index) => (
          <article
            key={event.id}
            className="grid items-center gap-8 border-t border-ink/8 pt-12 lg:grid-cols-2 lg:gap-14"
          >
            <Photo
              src={event.image}
              alt={event.alt}
              className={`aspect-[16/10] rounded-xl ${index % 2 === 1 ? "lg:order-2" : ""}`}
              imgClassName="rounded-xl"
            />
            <div>
              <p className="kicker">{event.kicker}</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                {event.name}
              </h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-sage">
                {event.copy}
              </p>
              <p className="mt-3 text-sm font-medium text-moss">{event.meta}</p>
              <Button asChild className="mt-8">
                <Link to="/reserve">Enquire</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
