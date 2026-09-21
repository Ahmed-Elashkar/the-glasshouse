import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { TASTING, TEA } from "@/lib/site";

export const Route = createFileRoute("/menu")({ component: MenuPage });

function MenuPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-6xl px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
        <p className="kicker">{TASTING.season}</p>
        <h1 className="mt-3 font-display text-5xl leading-tight sm:text-7xl">
          {TASTING.name}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sage">
          {TASTING.note} We change the plate as the beds change — usually every
          three weeks.
        </p>
        <p className="mt-6 font-display text-3xl">
          {TASTING.price}{" "}
          <span className="text-lg text-sage">· pairing {TASTING.wine}</span>
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-10">
          {TASTING.courses.map((course) => (
            <section key={course.title}>
              <h2 className="font-display text-2xl italic text-moss">
                {course.title}
              </h2>
              <ul className="mt-4 divide-y divide-ink/8">
                {course.plates.map((plate) => (
                  <li
                    key={plate.name}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="font-medium">{plate.name}</span>
                    <span className="text-sm text-sage sm:text-right">
                      {plate.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="space-y-5">
          <Photo
            src="/images/dish.jpg"
            alt="A tasting plate of celeriac, hazelnut and nasturtium"
            className="aspect-[3/2] rounded-xl"
            imgClassName="rounded-xl"
          />
          <Photo
            src="/images/wine.jpg"
            alt="A glass of amber wine beside olive oil and herbs"
            className="hidden aspect-[3/4] rounded-xl lg:block"
            imgClassName="rounded-xl"
          />
        </div>
      </div>

      <section className="border-t border-ink/8 bg-parchment/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Photo
            src="/images/tea.jpg"
            alt="Celadon teapot with lemon verbena and mint"
            className="aspect-square max-w-md rounded-xl"
            imgClassName="rounded-xl"
          />
          <div>
            <p className="kicker">After pudding</p>
            <h2 className="mt-3 font-display text-4xl">Infusions from the house</h2>
            <ul className="mt-6 space-y-4">
              {TEA.map((cup) => (
                <li key={cup.name}>
                  <p className="font-medium">{cup.name}</p>
                  <p className="text-sm text-sage">{cup.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-sage">
              Please tell us about allergies when you reserve. We can cook a
              vegetarian tasting; vegan and gluten-free need a week’s notice.
            </p>
            <Button asChild className="mt-8">
              <Link to="/reserve">Reserve a sitting</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
