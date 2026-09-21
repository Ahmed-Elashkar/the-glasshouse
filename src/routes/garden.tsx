import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { GARDENS } from "@/lib/site";

export const Route = createFileRoute("/garden")({ component: GardenPage });

function GardenPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <p className="kicker">The Vale Conservatory</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-7xl">
          Four rooms under glass
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sage">
          The municipal palm house was built in 1894. We restored the iron,
          kept every original howea that would take, and planted the rest as a
          working kitchen garden.
        </p>
      </header>

      <div className="mx-auto max-w-6xl space-y-20 px-5 pb-20 sm:px-8">
        {GARDENS.map((room, index) => (
          <article
            key={room.id}
            id={room.id}
            className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <Photo
              src={room.image}
              alt={room.alt}
              className={`aspect-[4/5] rounded-xl sm:aspect-[5/4] ${index % 2 === 1 ? "lg:order-2" : ""}`}
              imgClassName="rounded-xl"
            />
            <div>
              <p className="kicker">Room {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                {room.name}
              </h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-sage">
                {room.copy}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="border-t border-ink/8 bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker text-cream/50">Before service</p>
            <h2 className="mt-3 font-display text-4xl">Walk the beds</h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-cream/70">
              The garden opens to diners forty-five minutes before each sitting.
              Come early. There is nowhere to rush under this roof.
            </p>
            <Button asChild variant="cream" className="mt-8">
              <Link to="/reserve">Hold a table</Link>
            </Button>
          </div>
          <Photo
            src="/images/night-garden.jpg"
            alt="The night garden lit by lanterns and moonlight"
            className="aspect-[16/10] rounded-xl"
            imgClassName="rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
