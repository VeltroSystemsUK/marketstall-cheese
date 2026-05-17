import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "The Walled Garden Cheese",
    tagline: "Handpicked artisan cheeses from British farmhouses and caves",
    description:
      "We source directly from small-scale British cheesemakers — rare clothbound cheddars, cave-aged blues, and seasonal soft cheeses you won't find in any supermarket. Delivered in temperature-controlled packaging, perfectly conditioned.",
    email: "hello@walledgardencheese.co.uk",
    location: "Matlock, Derbyshire",
    foundedYear: 2015,
    socialInstagram: "https://instagram.com/walledgardencheese",
    socialFacebook: "https://facebook.com/walledgardencheese",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "60+", label: "Cheese Varieties" },
    { value: "30+", label: "UK Producers" },
    { value: "4.9★", label: "Average Rating" },
    { value: "Est. 2015", label: "Derbyshire" },
  ],
};

export default config;
