import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FieldLabel,
  Input,
  NativeSelect,
  Textarea,
} from "@/components/ui/input";
import {
  closedWeekday,
  loadReservations,
  saveReservations,
  sittingFitsDate,
  todayIso,
  type Reservation,
} from "@/lib/reservations";
import { ADDRESS, HOURS, PARTY_SIZES, SITTINGS, SITE } from "@/lib/site";

export const Route = createFileRoute("/reserve")({ component: ReservePage });

type FormState = {
  name: string;
  email: string;
  date: string;
  time: string;
  party: string;
  notes: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  date: "",
  time: "18:00",
  party: "2",
  notes: "",
};

function ReservePage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [justBooked, setJustBooked] = useState<Reservation | null>(null);
  const [bookings, setBookings] = useState<Reservation[]>([]);

  useEffect(() => {
    setBookings(loadReservations());
  }, []);

  const sittings = useMemo(() => {
    if (!form.date) return [...SITTINGS];
    return SITTINGS.filter((time) => sittingFitsDate(form.date, time));
  }, [form.date]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const party = Number(form.party);

    if (!name || !email || !form.date) {
      setError("Please add your name, email, and a date.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn’t look quite right.");
      return;
    }
    if (form.date < todayIso()) {
      setError("Please choose a date from today onwards.");
      return;
    }
    if (closedWeekday(form.date)) {
      setError("The house is closed on Mondays and Tuesdays.");
      return;
    }
    if (!sittingFitsDate(form.date, form.time)) {
      setError("That sitting isn’t offered on the day you chose.");
      return;
    }
    if (party > 8) {
      setError("Tables larger than eight sit in the alcove — write to us.");
      return;
    }

    const reservation: Reservation = {
      id: crypto.randomUUID(),
      name,
      email,
      date: form.date,
      time: form.time,
      party,
      notes: form.notes.trim(),
      createdAt: new Date().toISOString(),
    };
    const next = [reservation, ...bookings];
    saveReservations(next);
    setBookings(next);
    setJustBooked(reservation);
    setForm(EMPTY);
  }

  function cancel(id: string) {
    const next = bookings.filter((item) => item.id !== id);
    saveReservations(next);
    setBookings(next);
    if (justBooked?.id === id) setJustBooked(null);
  }

  return (
    <main id="main" className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="kicker">Reservations</p>
        <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">
          Hold a table
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sage">
          We seat thirty-six. Requests are held on this device so you can come
          back to them — the house will confirm by email in a real dining room.
        </p>

        {justBooked ? (
          <div className="mt-8 rounded-xl bg-moss px-6 py-6 text-cream">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Check className="size-4" />
              Sitting requested
            </p>
            <p className="mt-3 font-display text-3xl">
              {formatDate(justBooked.date)} · {justBooked.time}
            </p>
            <p className="mt-2 text-sm text-cream/75">
              {justBooked.party} {justBooked.party === 1 ? "guest" : "guests"}{" "}
              for {justBooked.name}. We’ll keep the table for{" "}
              {justBooked.email}.
            </p>
            <Button
              variant="cream"
              className="mt-5"
              onClick={() => setJustBooked(null)}
            >
              Request another
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  required
                />
              </div>
              <div>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  required
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <FieldLabel htmlFor="date">Date</FieldLabel>
                <Input
                  id="date"
                  type="date"
                  min={todayIso()}
                  value={form.date}
                  onChange={(event) => {
                    const date = event.target.value;
                    const nextTime = SITTINGS.find((time) =>
                      sittingFitsDate(date, time),
                    );
                    setForm((prev) => ({
                      ...prev,
                      date,
                      time: nextTime ?? prev.time,
                    }));
                  }}
                  required
                />
              </div>
              <div>
                <FieldLabel htmlFor="time">Sitting</FieldLabel>
                <NativeSelect
                  id="time"
                  value={form.time}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, time: event.target.value }))
                  }
                >
                  {(sittings.length ? sittings : SITTINGS).map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <div>
                <FieldLabel htmlFor="party">Guests</FieldLabel>
                <NativeSelect
                  id="party"
                  value={form.party}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, party: event.target.value }))
                  }
                >
                  {PARTY_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </NativeSelect>
              </div>
            </div>
            <div>
              <FieldLabel htmlFor="notes">Notes</FieldLabel>
              <Textarea
                id="notes"
                placeholder="Allergies, a celebration, a walk in the garden first…"
                value={form.notes}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, notes: event.target.value }))
                }
              />
            </div>
            {error ? (
              <p className="text-sm text-moss-deep" role="alert">
                {error}
              </p>
            ) : null}
            <Button type="submit" size="lg">
              Request the table
            </Button>
            <p className="text-xs leading-relaxed text-sage">
              Closed Monday and Tuesday. Sunday is lunch only. Parties larger
              than eight belong in the alcove — write to {SITE.email}.
            </p>
          </form>
        )}

        {bookings.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-display text-3xl">Your requests</h2>
            <ul className="mt-5 divide-y divide-ink/8">
              {bookings.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-medium">
                      {formatDate(item.date)} · {item.time}
                    </p>
                    <p className="text-sm text-sage">
                      {item.party} {item.party === 1 ? "guest" : "guests"} ·{" "}
                      {item.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex size-11 items-center justify-center rounded-md text-sage transition-colors duration-150 hover:bg-parchment hover:text-ink"
                    aria-label={`Cancel ${item.date} at ${item.time}`}
                    onClick={() => cancel(item.id)}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <aside className="h-fit rounded-xl bg-parchment p-6 sm:p-8 lg:sticky lg:top-24">
        <p className="kicker">The house</p>
        <h2 className="mt-3 font-display text-3xl">{ADDRESS.line1}</h2>
        <p className="mt-2 text-sm leading-relaxed text-sage">
          {ADDRESS.line2}
          <br />
          {ADDRESS.city}
        </p>
        <p className="mt-4 text-sm text-sage">
          {SITE.phone}
          <br />
          {SITE.email}
        </p>
        <div className="hairline my-6" />
        <ul className="space-y-2 text-sm">
          {HOURS.map((row) => (
            <li key={row.day} className="flex justify-between gap-4">
              <span className="text-sage">{row.day}</span>
              <span>{row.note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-sage">
          Arrive forty-five minutes early to walk the garden. Jackets are
          welcome; the house is warm under glass.
        </p>
      </aside>
    </main>
  );
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
}
