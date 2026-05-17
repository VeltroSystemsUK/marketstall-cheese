import Image from "next/image";
import Link from "next/link";
import config from "@/site.config";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  PackageCheck,
  Thermometer,
  UtensilsCrossed,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { MOCK_PRODUCTS, MOCK_REVIEWS, MOCK_PRODUCERS } from "@/lib/mock-data";

const FEATURED_PRODUCTS = MOCK_PRODUCTS.filter((p) => p.featured).slice(0, 4);
const PRODUCER = MOCK_PRODUCERS[0];

const MARKETPLACE_STATS = [
  { value: "150+", label: "Local Producers" },
  { value: "2,000+", label: "Products Listed" },
  { value: "12,000+", label: "Happy Customers" },
  { value: "4 Counties", label: "East Midlands" },
];

const STATS = config.stats ?? MARKETPLACE_STATS;

const HOW_IT_WORKS = config.features.multiProducer
  ? [
      {
        icon: UtensilsCrossed,
        title: "Discover local producers",
        body: "Browse farms and artisans across the East Midlands. Read their stories, see their methods, and find your favourites.",
      },
      {
        icon: ShieldCheck,
        title: "Order with confidence",
        body: "Secure checkout, flexible fulfilment — delivery to your door or click & collect from the farm.",
      },
      {
        icon: PackageCheck,
        title: "Taste the difference",
        body: "Food grown and prepared at its best. You'll taste why it matters.",
      },
    ]
  : [
      {
        icon: UtensilsCrossed,
        title: "Choose your cheeses",
        body: "Browse our curated range of British and European artisan cheeses — each one sourced directly from the maker, tasted at maturity before dispatch.",
      },
      {
        icon: ShieldCheck,
        title: "Order securely",
        body: "Checkout with Stripe-powered payment. Choose temperature-controlled delivery or collect from our Matlock shop.",
      },
      {
        icon: PackageCheck,
        title: "Arrives perfectly conditioned",
        body: "We pack every order in insulated, temperature-controlled boxes with ice packs. Every cheese includes a tasting notes card.",
      },
    ];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&q=85"
          alt="Artisan cheese board with a selection of British farmhouse cheeses"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="gradient-hero absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <UtensilsCrossed className="h-3.5 w-3.5 text-harvest-400" />
            {config.brand.location} · British &amp; European · Est.{" "}
            {config.brand.foundedYear}
          </div>
          <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-balance sm:text-6xl lg:text-7xl">
            Cheese the way
            <span className="block italic text-harvest-400">
              the makers intended.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {config.brand.tagline}. Sourced direct from the maker, conditioned
            to perfection, and delivered in insulated packaging.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-2xl bg-harvest-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-harvest-600 hover:shadow-xl"
            >
              Browse our cheeses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/producers/${PRODUCER.slug}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1">
            <div className="h-2 w-full rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-forest-800 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-3xl font-bold text-harvest-400">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-forest-300">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ──────────────────────────────────── */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-harvest-600">
                Cut fresh from the wheel
              </p>
              <h2 className="font-display text-4xl font-bold text-gray-900">
                Our finest selections
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-medium text-forest-700 hover:text-forest-900 sm:flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/shop" className="text-sm font-medium text-forest-700">
              View full range →
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────── */}
      {config.features.multiProducer ? (
        <section className="section-pad relative overflow-hidden bg-forest-950">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-harvest-500">
                The people behind your food
              </p>
              <h2 className="font-display text-4xl font-bold text-white">
                Meet our producers
              </h2>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/producers"
                className="inline-flex items-center gap-2 rounded-2xl border border-forest-700 px-6 py-3 text-sm font-medium text-forest-300 transition-colors hover:border-harvest-500 hover:text-harvest-400"
              >
                See all producers →
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-pad relative overflow-hidden bg-forest-950">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1600&q=60"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-harvest-500">
                  Our story
                </p>
                <h2 className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl">
                  The cheeses supermarkets will never stock.
                </h2>
                <p className="mb-4 text-base leading-relaxed text-forest-300">
                  {PRODUCER.story?.split(". ").slice(0, 3).join(". ")}.
                </p>
                <p className="mb-8 text-base leading-relaxed text-forest-300">
                  {PRODUCER.story?.split(". ").slice(3).join(". ")}
                </p>
                <Link
                  href={`/producers/${PRODUCER.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-harvest-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-harvest-600"
                >
                  Meet the cheesemonger <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-80 overflow-hidden rounded-3xl lg:h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80"
                  alt="A selection of artisan cheeses on a slate board"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-harvest-600">
              From farmhouse to your table
            </p>
            <h2 className="font-display text-4xl font-bold text-gray-900">
              How {config.brand.name} works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-start">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100">
                  <step.icon className="h-6 w-6 text-forest-700" />
                </div>
                <div className="mb-2 text-xs font-bold text-forest-500">
                  STEP {idx + 1}
                </div>
                <h3 className="font-display mb-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ───────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-forest-50 p-3">
                <Thermometer className="h-6 w-6 text-forest-700" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Temperature-controlled delivery
                </h4>
                <p className="text-sm text-gray-500">
                  Every order is packed in insulated boxes with ice packs.
                  Cheese arrives at the correct temperature every time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-forest-50 p-3">
                <RefreshCw className="h-6 w-6 text-forest-700" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Tasted before dispatch
                </h4>
                <p className="text-sm text-gray-500">
                  We taste every cheese at maturity before it leaves us. If
                  it&apos;s not right, we don&apos;t send it — we replace it and
                  wait.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-forest-50 p-3">
                <Truck className="h-6 w-6 text-forest-700" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Next-day UK delivery
                </h4>
                <p className="text-sm text-gray-500">
                  Order before 12 noon for next-day delivery. Dispatched
                  Tuesday, Wednesday, and Thursday to ensure freshness on
                  arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="section-pad bg-earth-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-harvest-600">
              Happy customers
            </p>
            <h2 className="font-display text-4xl font-bold text-gray-900">
              What people say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MOCK_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="mb-3 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {review.consumerName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-800 py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&q=60"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold text-white sm:text-5xl">
            Life is too short for mediocre cheese.
          </h2>
          <p className="mb-8 text-lg text-forest-300">
            Rare, handpicked, perfectly conditioned. Join over 3,500 customers
            who&apos;ve discovered what cheese is really capable of.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-2xl bg-harvest-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-harvest-600"
          >
            Browse our cheeses <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
