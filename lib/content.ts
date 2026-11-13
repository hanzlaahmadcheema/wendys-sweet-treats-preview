/**
 * Wendy's Sweet Treats — site content.
 *
 * VERIFIED = from the bakery's real Facebook page and directory listings
 * (checked 2026-11-13).
 * UNIVERSAL = standard content every home-bakery website has, added at the
 * owner's request. The disclaimer banner on the site tells the business owner
 * to correct anything that is wrong.
 *
 * NOTE: Wendy posted on 27 Oct 2026 that the bakery would close temporarily
 * for surgery on 6 Nov 2026. No reopening post was found. This site does not
 * claim she is open or closed — the owner corrects it.
 */

export const clinic = {
  name: "Wendy's Sweet Treats",
  shortName: "Wendy's",
  tagline: "Home baker · Kyle, Texas",
  phoneDisplay: "",
  phoneTel: "",
  address: "4701 Staggerbrush Road, Austin, TX 78749",
  area: "Amberwood, Kyle, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Wendy%27s+Sweet+Treats+4701+Staggerbrush+Road+Austin+TX+78749",
  facebookText: "Wendy's Sweet Treats — find us on Facebook",
  facebookUrl: "https://www.facebook.com/102440194546859/",
  owner: {
    name: "Wendy Guajardo Gonzalez",
    title: "Home baker",
    bio: "Wendy is a home baker in the Amberwood area of Kyle, Texas. She specializes in empanadas, cakes, cupcakes, and anything sweet — all made from scratch, and all ordered by DM.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top bakery sites group it.
 *  VERIFIED groups are marked; prices are shown ONLY where a real post
 *  states them — everything else says "DM for price". */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Cakes",
    blurb:
      "Made for your occasion — birthdays, weddings, baby showers, or just because. Tell Wendy the theme and she will bake it.",
    items: ["Birthdays & celebrations", "Weddings", "Any occasion, big or small"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Slice of layered cake topped with fresh raspberries",
    verified: true,
  },
  {
    title: "Cupcakes",
    blurb:
      "Soft, sweet, and made to order — including chocolate cupcakes with cream cheese frosting.",
    items: ["Chocolate + cream cheese frosting", "Made to order", "Singles or by the dozen"],
    price: "DM for price",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Row of cupcakes with mint frosting and rainbow sprinkles",
    verified: true,
  },
  {
    title: "Empanadas",
    blurb:
      "Baked to perfection and filled with deliciousness — sweet fillings are the house specialty.",
    items: ["Dulce de leche", "Pineapple", "Sweet & savory fillings"],
    price: "DM for price",
    verified: true,
  },
  {
    title: "Hojarascas Norteñas",
    blurb:
      "Traditional hojarascas, freshly baked, tossed in cinnamon sugar — and they melt in your mouth.",
    items: ["Freshly baked", "Cinnamon sugar", "210 g bag"],
    price: "$10",
    verified: true,
  },
  {
    title: "Mini Cookies",
    blurb:
      "Soft-baked mini chocolate chip cookies in cute lunchbox-ready bags — a perfect little treat.",
    items: ["Soft-baked mini chocolate chip", "Backpack gift bags", "$7 each or $12 for a combo of two"],
    price: "$7 · $12 combo",
    verified: true,
  },
  {
    title: "The Golosa Box",
    blurb:
      "One box, a little bit of everything — the best way to taste the whole menu at once.",
    items: ["Buñuelos", "Alfajores — chocolate & pecan, or regular", "Dulce de leche & pineapple empanadas"],
    price: "DM for price",
    verified: true,
  },
];

/** UNIVERSAL — standard on every home-bakery site; DM to confirm. */
export const faqs = [
  {
    q: "How do I order?",
    a: "Send us a DM on Facebook — that is how every order starts. Tell us what you want, when you need it, and how many, and Wendy will confirm your order and the price.",
  },
  {
    q: "How far ahead should I order a custom cake?",
    a: "Message us as early as you can — a few days ahead is best for custom cakes, so there is time to bake and decorate it properly. For cookies and empanadas, ask — same-week orders are often possible.",
  },
  {
    q: "Where do I pick up my order?",
    a: "Pickup is in Kyle, Texas, near Staggerbrush Road in the Amberwood area. The exact pickup time and details are arranged by DM when you order.",
  },
  {
    q: "Do you deliver?",
    a: "Ask when you order. Delivery depends on the day and the size of the order — DM us and we will tell you what is possible.",
  },
  {
    q: "What about allergies?",
    a: "Tell us about any allergies when you order, and we will tell you honestly what we can and cannot make safely. Everything is baked in a home kitchen.",
  },
  {
    q: "Can I get a cake for a wedding or a big party?",
    a: "Yes — custom cakes are made for birthdays, weddings, baby showers and any celebration, big or small. Send us a DM with the date and how many people, and we will plan it with you.",
  },
];

/** UNIVERSAL — the standard home-bakery ordering flow. */
export const orderSteps = [
  {
    title: "DM us on Facebook",
    body: "Tell us what you want, when you need it, and how many. A photo of the cake you have in mind helps a lot.",
  },
  {
    title: "We confirm & price it",
    body: "Wendy confirms your order, the price, and the pickup time — before anything is baked.",
  },
  {
    title: "Pick up in Kyle",
    body: "Your sweets are baked fresh and ready at the agreed time. Pickup is in the Amberwood area of Kyle.",
  },
];
