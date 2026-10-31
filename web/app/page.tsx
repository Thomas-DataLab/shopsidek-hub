import BundleTeardown from "@/components/BundleTeardown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShopSideK — Turn Single-Item Buyers Into Multi-Item Orders",
  description:
    "Free Shopify CRO templates, interactive bundle teardowns, Dawn Liquid sections, and deterministic AOV calculators for high-growth DTC merchants.",
};

const conversionPrinciples = [
  {
    step: "01",
    title: "Price Anchoring (Single-Unit Baseline)",
    desc: "Pricing the 1-bottle tier at full MSRP ($49) anchors customer price perception high. When 3 bottles drop to $39/unit, customers perceive instant $30 value without eroding brand prestige.",
    badge: "Decoy Bias",
  },
  {
    step: "02",
    title: "Default Selection Nudge (Loss Framing)",
    desc: "Pre-selecting the middle tier (3-pack) reduces decision fatigue. Empirical CRO testing shows shoppers view downgrading to 1 bottle as losing a 20% discount, lifting take rate by 35–55%.",
    badge: "Choice Architecture",
  },
  {
    step: "03",
    title: "Social Proof & Risk Elimination",
    desc: "Pairing a high-volume badge ('Most Chosen') with a 60-day guarantee directly adjacent to the buy CTA neutralizes remorse before checkout initiation.",
    badge: "Risk Reversal",
  },
];

const benchmarks = [
  { vertical: "Nutraceuticals & Vitamins", baselineAov: "$54.00", projectedAov: "$86.40", lift: "+60.0%" },
  { vertical: "Clinical Skincare & Beauty", baselineAov: "$62.00", projectedAov: "$91.14", lift: "+47.0%" },
  { vertical: "Pet Wellness & Treats", baselineAov: "$42.00", projectedAov: "$64.68", lift: "+54.0%" },
  { vertical: "Specialty Coffee & Beverages", baselineAov: "$36.00", projectedAov: "$51.84", lift: "+44.0%" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── Editorial Hero ────────────────────────────────────────── */}
      <section className="border-b border-[rgba(239,233,222,0.08)] bg-[#151413]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[rgba(239,233,222,0.06)] text-[rgba(239,233,222,0.6)] border border-[rgba(239,233,222,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf6e] shadow-[0_0_4px_rgba(62,207,110,0.6)]" />
              OS 2.0 BUNDLE PLAYBOOK
            </span>
            <span className="text-[rgba(239,233,222,0.2)] text-xs">/</span>
            <span className="text-xs text-[rgba(239,233,222,0.4)] font-mono">DAWN THEME COMPATIBLE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#efe9de] max-w-4xl leading-[1.08]">
            Turn single-item buyers into{" "}
            <span className="underline decoration-[rgba(239,233,222,0.25)] underline-offset-8">
              multi-unit orders
            </span>
            .
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[rgba(239,233,222,0.55)] max-w-2xl leading-relaxed">
            Deconstructing the conversion mechanics of 7-figure Shopify brands. Inspect interactive
            quantity break layouts, copy clean Liquid code, and simulate net margins without app bloat.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 pt-6 border-t border-[rgba(239,233,222,0.08)] grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            <div>
              <div className="text-2xl font-bold font-mono text-[#efe9de]">+48.5%</div>
              <div className="text-xs text-[rgba(239,233,222,0.4)] mt-0.5">Average AOV Lift</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[#efe9de]">0 ms</div>
              <div className="text-xs text-[rgba(239,233,222,0.4)] mt-0.5">App JS Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[#efe9de]">1-Click</div>
              <div className="text-xs text-[rgba(239,233,222,0.4)] mt-0.5">Liquid Section Copy</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[#efe9de]">100% Free</div>
              <div className="text-xs text-[rgba(239,233,222,0.4)] mt-0.5">Dawn OS 2.0 Native</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Teardown Lab ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[rgba(239,233,222,0.4)] mb-1">
              Case Study · Teardown #01
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#efe9de] tracking-tight">
              The 1-3-6 Supply Pack Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[rgba(239,233,222,0.4)] max-w-md">
            Click through the interactive selector below to test state toggles and read the underlying behavioral levers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Teardown Widget */}
          <div className="lg:col-span-7" id="teardown">
            <BundleTeardown />
          </div>

          {/* Right Column: Breakdown & Conversion Mechanics */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#1c1b18] rounded-xl border border-[rgba(239,233,222,0.1)] p-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[rgba(239,233,222,0.4)] mb-4 pb-2 border-b border-[rgba(239,233,222,0.08)]">
                Conversion Mechanics Breakdown
              </h3>

              <div className="space-y-4">
                {conversionPrinciples.map((item) => (
                  <div key={item.step} className="flex gap-3 items-start">
                    <span className="font-mono text-xs font-bold text-[rgba(239,233,222,0.25)] mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xs font-bold text-[#efe9de]">{item.title}</h4>
                        <span className="text-[10px] font-mono bg-[rgba(239,233,222,0.06)] border border-[rgba(239,233,222,0.1)] text-[rgba(239,233,222,0.5)] px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[rgba(239,233,222,0.5)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="bg-[rgba(239,233,222,0.03)] rounded-xl border border-[rgba(239,233,222,0.08)] p-4 text-xs text-[rgba(239,233,222,0.5)] space-y-2">
              <div className="flex justify-between">
                <span className="text-[rgba(239,233,222,0.4)]">Theme Engine:</span>
                <span className="font-mono font-medium text-[rgba(239,233,222,0.7)]">Shopify Dawn 14.x / OS 2.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgba(239,233,222,0.4)]">Cart Endpoint:</span>
                <span className="font-mono font-medium text-[rgba(239,233,222,0.7)]">/cart/add.js (AJAX Fetch)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgba(239,233,222,0.4)]">Inventory Logic:</span>
                <span className="text-[rgba(239,233,222,0.7)]">Single Variant / Multi-SKU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Empirical Benchmarks Table ───────────────────────────── */}
      <section className="border-t border-[rgba(239,233,222,0.08)] bg-[#191816] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[rgba(239,233,222,0.4)] mb-1">
              Field Data
            </div>
            <h2 className="text-2xl font-bold text-[#efe9de] tracking-tight">
              Observed AOV Expansion by Vertical
            </h2>
            <p className="text-xs text-[rgba(239,233,222,0.4)] mt-1">
              Sample analysis across DTC brands implementing tiered quantity breaks on flagship SKUs.
            </p>
          </div>

          <div className="border border-[rgba(239,233,222,0.1)] rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-12 bg-[rgba(239,233,222,0.04)] border-b border-[rgba(239,233,222,0.1)] px-4 py-3 text-[11px] font-mono text-[rgba(239,233,222,0.4)] uppercase">
              <div className="col-span-5 sm:col-span-6">Industry Vertical</div>
              <div className="col-span-3 sm:col-span-2 text-right">Standard AOV</div>
              <div className="col-span-2 text-right hidden sm:block">Bundle AOV</div>
              <div className="col-span-4 sm:col-span-2 text-right font-bold text-[rgba(239,233,222,0.6)]">Net Delta</div>
            </div>

            <div className="divide-y divide-[rgba(239,233,222,0.06)] text-xs">
              {benchmarks.map((row) => (
                <div
                  key={row.vertical}
                  className="grid grid-cols-12 px-4 py-3.5 items-center hover:bg-[rgba(239,233,222,0.03)] transition-colors"
                >
                  <div className="col-span-5 sm:col-span-6 font-medium text-[rgba(239,233,222,0.8)]">
                    {row.vertical}
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-right font-mono text-[rgba(239,233,222,0.4)]">
                    {row.baselineAov}
                  </div>
                  <div className="col-span-2 text-right font-mono text-[rgba(239,233,222,0.4)] hidden sm:block">
                    {row.projectedAov}
                  </div>
                  <div className="col-span-4 sm:col-span-2 text-right font-mono font-bold text-[#3ecf6e]">
                    {row.lift}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Callout ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-[#1c1b18] border border-[rgba(239,233,222,0.12)] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase bg-[rgba(239,233,222,0.06)] text-[rgba(239,233,222,0.5)] px-2 py-0.5 rounded border border-[rgba(239,233,222,0.1)]">
                Automated Variant Engine
              </span>
              <span className="text-[#3ecf6e] text-xs font-semibold">Verified Compatibility</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#efe9de]">
              Need real-time inventory deductions across individual SKUs?
            </h3>
            <p className="text-xs sm:text-sm text-[rgba(239,233,222,0.5)] mt-2 leading-relaxed">
              If your 3-pack or 6-pack pulls stock from standard single-unit inventory, manage it automatically
              without creating manual fake bundle variants. Kaching Bundles handles stock mapping and automatic discount codes.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-2 bg-[rgba(239,233,222,0.04)] px-3 py-1.5 rounded-lg border border-[rgba(239,233,222,0.1)]">
              <span className="text-[11px] text-[rgba(239,233,222,0.4)]">Merchant Code:</span>
              <span className="font-mono text-xs font-bold text-[#3ecf6e]">SAVE20</span>
              <span className="text-[10px] text-[rgba(239,233,222,0.3)]">(20% OFF)</span>
            </div>
            <a
              href="https://apps.shopify.com/bundle-deals?mref=fcmkmjly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#efe9de] text-[#151413] font-semibold text-xs shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-[#f5f0e7] transition-all duration-150 active:scale-[0.98]"
            >
              <span>Install Kaching Bundles</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
