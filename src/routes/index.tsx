import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { ADDRESS, EVENINGS, GARDENS, SITE, TASTING } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main id="main">
      <section className="relative min-h-[calc(100dvh-4.5rem)]">
        <Photo
          src="/images/hero-dining.jpg"
          alt="The long oak table set among palms under the glass roof at dusk"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/20" />
        <div className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16">
          <div className="stagger-in mx-auto w-full max-w-6xl">
            <p className="kicker text-cream/70">Kew Vale · Conservatory 1894</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
              {SITE.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
              A thirty-six seat restaurant in a restored Victorian glasshouse.
              One sitting. The garden decides the plate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cream" size="lg">
                <Link to="/reserve">
                  Reserve a table
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/menu">This season’s menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <p className="kicker">The house</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Restored iron, replanted beds, a single long table.
          </h2>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-sage">
            The Vale Conservatory stood empty for thirty years. In 2019 chef
            Amelie Voss and botanist Idris Hale took the keys, mended the
            glass, and asked the palms to make room for dinner.
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-sage">
            We still grow what we can inside the house — citrus, herbs, salad
            leaves, and the flowers that finish a plate. The rest comes from
            growers within a morning’s drive.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/garden">
              Walk the garden
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <Photo
          src="/images/exterior.jpg"
          alt="The Victorian glass conservatory at golden hour, ivy on the ironwork"
          className="aspect-[4/5] rounded-xl sm:aspect-[5/4] lg:aspect-[4/5]"
          imgClassName="rounded-xl"
        />
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-28">
          <Photo
            src="/images/dish.jpg"
            alt="Roasted celeriac with hazelnut, pickled elderflower and nasturtium on ceramic"
            className="aspect-[3/2] rounded-xl"
            imgClassName="rounded-xl"
          />
          <div>
            <p className="kicker text-cream/50">{TASTING.season} tasting</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{TASTING.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              {TASTING.note} {TASTING.sitting}.
            </p>
            <p className="mt-6 font-display text-3xl">
              {TASTING.price}
              <span className="ml-2 text-lg text-cream/50">per guest</span>
            </p>
            <p className="mt-1 text-sm text-cream/50">
              Wine pairing {TASTING.wine} · vegetarian on request
            </p>
            <Button asChild variant="cream" className="mt-8">
              <Link to="/menu">
                Read the menu
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="kicker">Four rooms</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              The garden is the larder
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/garden">All collections</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GARDENS.map((room) => (
            <Link
              key={room.id}
              to="/garden"
              hash={room.id}
              className="group block"
            >
              <Photo
                src={room.image}
                alt={room.alt}
                className="aspect-[3/4] rounded-lg"
                imgClassName="rounded-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <p className="mt-3 font-display text-2xl">{room.name}</p>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-sage">
                {room.copy}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/8 bg-parchment/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="kicker">{EVENINGS[0].kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              {EVENINGS[0].name}
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-sage">
              {EVENINGS[0].copy}
            </p>
            <p className="mt-3 text-sm text-sage">{EVENINGS[0].meta}</p>
            <Button asChild className="mt-8">
              <Link to="/evenings">Plan an evening</Link>
            </Button>
          </div>
          <Photo
            src="/images/private-dining.jpg"
            alt="A candlelit private table in a fern grotto"
            className="aspect-[16/10] rounded-xl"
            imgClassName="rounded-xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="rounded-xl bg-moss px-6 py-10 text-cream sm:px-12 sm:py-14">
          <p className="kicker text-cream/55">This week</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
            Thirty-six seats. We hold the table for two weeks ahead.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/75">
            {ADDRESS.line1}, {ADDRESS.line2}. Arrive forty-five minutes early if
            you would like to walk the beds before dinner.
          </p>
          <Button asChild variant="cream" className="mt-8">
            <Link to="/reserve">Request a sitting</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
