export const SITE = {
  name: "The Glasshouse",
  tagline: "A table among the palms",
  blurb:
    "Thirty-six seats in a restored 1894 conservatory. The garden is the larder.",
  email: "table@theglasshouse.vale",
  phone: "020 7946 0148",
  instagram: "@theglasshouse.vale",
};

export const ADDRESS = {
  line1: "The Vale Conservatory",
  line2: "14 Riverwalk, Kew Vale",
  city: "London",
};

export const HOURS = [
  { day: "Monday", note: "Closed" },
  { day: "Tuesday", note: "Closed" },
  { day: "Wednesday", note: "Dinner · 18:00 & 20:30" },
  { day: "Thursday", note: "Dinner · 18:00 & 20:30" },
  { day: "Friday", note: "Dinner · 18:00 & 20:30" },
  { day: "Saturday", note: "Dinner · 18:00 & 20:30" },
  { day: "Sunday", note: "Lunch · 12:30" },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/garden", label: "Garden" },
  { to: "/evenings", label: "Evenings" },
  { to: "/reserve", label: "Reserve" },
] as const;

export const TASTING = {
  name: "The Late Garden",
  season: "Autumn",
  price: "92",
  wine: "58",
  sitting: "Approximately two and a half hours",
  note: "One sitting. The kitchen sends eight courses from the beds, the fernery, and the fire.",
  courses: [
    {
      title: "First earth",
      plates: [
        { name: "Pumpkin-seed cracker", detail: "smoked trout roe" },
        { name: "Warm olive", detail: "lemon leaf" },
        { name: "Radish", detail: "brown butter, fennel pollen" },
      ],
    },
    {
      title: "The glasshouse",
      plates: [
        { name: "Celeriac", detail: "hazelnut, pickled elderflower" },
        { name: "Charred leek", detail: "hen of the woods, whey" },
        { name: "Beetroot", detail: "blackcurrant leaf, goat’s curd" },
      ],
    },
    {
      title: "Fire",
      plates: [
        { name: "Line-caught pollock", detail: "citrus butter, sea herbs" },
        { name: "Hispi cabbage", detail: "aged cheese, malt" },
        {
          name: "Dexter beef",
          detail: "fermented pepper, bone sauce · supplement 18",
        },
      ],
    },
    {
      title: "Sweet leaf",
      plates: [
        { name: "Quince", detail: "bay, brown-butter ice" },
        { name: "Dark chocolate", detail: "olive, rosemary" },
      ],
    },
  ],
};

export const TEA = [
  { name: "Lemon verbena", detail: "from the citrus walk, poured after pudding" },
  { name: "Jasmine pearl", detail: "night-garden blossom, Friday evenings" },
  { name: "Smoked hay", detail: "with honey from the municipal hives" },
];

export const GARDENS = [
  {
    id: "palm-court",
    name: "Palm Court",
    image: "/images/palms.jpg",
    alt: "Looking up through kentia palms to the iron-and-glass roof",
    copy: "The original 1894 planting. Kentia and howea palms rise to the ridge, their fronds filtering the evening light onto the long table.",
  },
  {
    id: "fernery",
    name: "The Fernery",
    image: "/images/garden-walk.jpg",
    alt: "A gravel path through citrus trees and ferns in terracotta pots",
    copy: "A cooler north room of maidenhair, tree fern, and moss. Guests walk through on the way to the alcove; the air smells of wet stone.",
  },
  {
    id: "citrus",
    name: "Citrus Walk",
    image: "/images/harvest.jpg",
    alt: "Harvesting lemon thyme and nasturtium at a potting bench",
    copy: "Meyer lemon, bergamot, and finger lime in terracotta. The kitchen cuts zest to order; the rest of the plant stays in the house.",
  },
  {
    id: "night",
    name: "Night Garden",
    image: "/images/night-garden.jpg",
    alt: "Moonflower and jasmine in the conservatory after dark",
    copy: "Moonflower, jasmine, and night-scented stock. On Fridays the doors stay open after the last sitting, and the house is lit only by lanterns.",
  },
];

export const EVENINGS = [
  {
    id: "alcove",
    name: "The Alcove",
    kicker: "Private table",
    image: "/images/private-dining.jpg",
    alt: "A candlelit table for two tucked into a fern alcove",
    copy: "A round table for eight to twelve, screened by ferns. The kitchen sends the tasting, or a shorter four-course if you prefer to talk.",
    meta: "From 780 · Wednesday to Saturday",
  },
  {
    id: "jazz",
    name: "Jazz under glass",
    kicker: "Monthly",
    image: "/images/hero-dining.jpg",
    alt: "The long oak table set among palms under the glass roof",
    copy: "A trio plays from the palm court on the first Thursday. No amplified sound — the iron roof carries the room.",
    meta: "First Thursday · 20:30 sitting",
  },
  {
    id: "botanicals",
    name: "Botanicals at the bench",
    kicker: "Sunday morning",
    image: "/images/tea.jpg",
    alt: "A celadon teapot with lemon verbena and mint",
    copy: "Idris walks the beds with twelve guests, then we infuse what we cut. Tea, bread, and a seat in the fernery afterwards.",
    meta: "Sunday 11:00 · 45",
  },
];

export const SITTINGS = ["12:30", "18:00", "20:30"] as const;
export const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8] as const;
