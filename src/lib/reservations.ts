export type Reservation = {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  party: number;
  notes: string;
  createdAt: string;
};

const KEY = "glasshouse.reservations";

export function loadReservations(): Reservation[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isReservation);
  } catch {
    return [];
  }
}

export function saveReservations(items: Reservation[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function closedWeekday(isoDate: string): boolean {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return true;
  const date = new Date(year, month - 1, day);
  const weekday = date.getDay();
  return weekday === 1 || weekday === 2;
}

export function sittingFitsDate(isoDate: string, time: string): boolean {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return false;
  const weekday = new Date(year, month - 1, day).getDay();
  if (weekday === 0) return time === "12:30";
  if (weekday >= 3 && weekday <= 6) return time === "18:00" || time === "20:30";
  return false;
}

export function todayIso(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function isReservation(value: unknown): value is Reservation {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.email === "string" &&
    typeof item.date === "string" &&
    typeof item.time === "string" &&
    typeof item.party === "number"
  );
}
