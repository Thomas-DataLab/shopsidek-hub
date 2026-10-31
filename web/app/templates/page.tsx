import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRO Templates Catalog — Shopify CRO Resource Hub",
  description:
    "Curated collection of high-converting, tested Shopify product page bundle templates for Dawn (OS 2.0).",
};

interface TemplateCard {
  id: string;
  badge: string;
  badgeStyle: string;
  liftStyle: string;
  name: string;
  niche: string;
  lift: string;
  description: string;
  psychology: string[];
  recommendedApp: {
    name: string;
    deal: string;
    url: string;
  };
  demoHref: string;
}

const templates: TemplateCard[] = [
  {
    id: "t01",
    badge: "Most Popular",
    badgeStyle: "bg-[rgba(62,207,110,0.12)] text-[#3ecf6e] border-[rgba(62,207,110,0.25)]",
    liftStyle: "text-[#3ecf6e] bg-[rgba(62,207,110,0.08)] border border-[rgba(62,207,110,0.2)]",
    name: "01 · Tiered Supply-Pack (1-3-6 Bottles)",
    niche: "Supplements, Skincare, Functional Foods, Consumables",
    lift: "+35% to +55% AOV",
    description:
      "A battle-tested 3-tier quantity break box designed to anchor high volume. Pre-selects the 3-month supply tier with a distinct 'Most Popular' badge while highlighting extreme savings on the 6-month tier.",
    psychology: [
      "Decoy effect: 1-bottle tier anchors the unit price high ($49/ea)",
      "Default nudge: 3-bottle tier pre-selected by default (reduces choice friction)",
      "Greed trigger: 6-bottle tier unlocks free shipping + lowest per-unit cost",
    ],
    recommendedApp: {
      name: "Kaching Bundles",
      deal: "20% OFF (code SAVE20)",
      url: "https://apps.shopify.com/kaching-bundles?utm_source=cro-hub&coupon=SAVE20",
    },
    demoHref: "/#teardown",
  },
  {
    id: "t02",
    badge: "High Engagement",
    badgeStyle: "bg-[rgba(139,92,246,0.12)] text-[#a78bfa] border-[rgba(139,92,246,0.25)]",
    liftStyle: "text-[#a78bfa] bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.2)]",
    name: "02 · Tiered Free Gift Progress Bar (BXGY)",
    niche: "Fashion, Cosmetics, Streetwear, Jewelry",
    lift: "+22% to +38% AOV",
    description:
      "A dynamic milestone-based cart unlocker. Shows customers an animated progress bar indicating how close they are to unlocking Free Shipping, Free Sample, or Premium Gift Box.",
    psychology: [
      "Goal gradient effect: Customers buy more as they get closer to the next reward milestone",
      "Gamification: Visual unlock triggers dopamine release before checkout",
      "Loss aversion: Refusing to abandon order because they already 'earned' a gift",
    ],
    recommendedApp: {
      name: "WideBundle",
      deal: "14-Day Extended Trial",
      url: "https://apps.shopify.com/widebundle?utm_source=cro-hub",
    },
    demoHref: "/#teardown",
  },
  {
    id: "t03",
    badge: "High Retention",
    badgeStyle: "bg-[rgba(245,158,11,0.12)] text-[#f59e0b] border-[rgba(245,158,11,0.25)]",
    liftStyle: "text-[#f59e0b] bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)]",
    name: "03 · Mix & Match Custom Box Builder",
    niche: "Beverages, Coffee, Pet Treats, Snacks, Fragrances",
    lift: "+40% to +60% AOV",
    description:
      "Allows shoppers to build their own custom box (e.g., pick any 4 flavors for $50). Empowers customer autonomy while enforcing a high minimum basket size.",
    psychology: [
      "IKEA effect: Shoppers place higher subjective value on products they assemble themselves",
      "Flavor exploration: Eliminates fear of disliking a single large bulk flavor",
      "Volume floor: Minimum purchase threshold guarantees profitable unit economics",
    ],
    recommendedApp: {
      name: "Kaching Bundles",
      deal: "20% OFF (code SAVE20)",
      url: "https://apps.shopify.com/kaching-bundles?utm_source=cro-hub&coupon=SAVE20",
    },
    demoHref: "/#teardown",
  },
];

export default function TemplatesPage() {
  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[rgba(239,233,222,0.06)] text-[rgba(239,233,222,0.6)] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[rgba(239,233,222,0.12)] mb-4">
            Theme Templates &amp; CRO Sections
          </span>
          <h1 className="text-4xl font-extrabold text-[#efe9de] tracking-tight">
            High-Converting Shopify Product Page Blueprints
          </h1>
          <p className="mt-4 text-lg text-[rgba(239,233,222,0.5)]">
            Engineered exclusively for Shopify Dawn (OS 2.0). Deploy zero-app native Liquid sections or
            scale with our certified partner apps.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="bg-[#1c1b18] rounded-2xl border border-[rgba(239,233,222,0.1)] hover:border-[rgba(239,233,222,0.18)] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block border px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${tpl.badgeStyle}`}
                  >
                    {tpl.badge}
                  </span>
                  <span className={`text-sm font-extrabold px-2.5 py-1 rounded-lg ${tpl.liftStyle}`}>
                    {tpl.lift}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#efe9de] mb-2">{tpl.name}</h3>
                <p className="text-xs font-medium text-[rgba(239,233,222,0.4)] mb-4 uppercase tracking-wide">
                  Ideal For: {tpl.niche}
                </p>
                <p className="text-sm text-[rgba(239,233,222,0.55)] leading-relaxed mb-6">
                  {tpl.description}
                </p>

                {/* Conversion Tactics */}
                <div className="border-t border-[rgba(239,233,222,0.08)] pt-4 mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[rgba(239,233,222,0.3)] mb-3">
                    Conversion Mechanics:
                  </h4>
                  <ul className="space-y-2">
                    {tpl.psychology.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-[rgba(239,233,222,0.55)]">
                        <span className="text-[rgba(239,233,222,0.3)] mr-2 font-bold shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-[rgba(239,233,222,0.03)] border-t border-[rgba(239,233,222,0.08)] p-6 flex flex-col gap-3">
                <Link
                  href={tpl.demoHref}
                  className="w-full text-center py-2.5 px-4 bg-[#efe9de] hover:bg-[#f5f0e7] text-[#151413] font-bold text-sm rounded-xl transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] active:scale-[0.98]"
                >
                  View Interactive Teardown
                </Link>

                <div className="flex items-center justify-between pt-2 border-t border-[rgba(239,233,222,0.06)] text-xs">
                  <span className="text-[rgba(239,233,222,0.4)] font-medium">Recommended Engine:</span>
                  <a
                    href={tpl.recommendedApp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(239,233,222,0.6)] hover:text-[#efe9de] font-semibold underline underline-offset-2 transition-colors"
                  >
                    {tpl.recommendedApp.name} ({tpl.recommendedApp.deal}) ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#1c1b18] border border-[rgba(239,233,222,0.12)] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#efe9de]">
              Want to build your own custom bundle layout?
            </h2>
            <p className="text-[rgba(239,233,222,0.5)] text-sm max-w-xl">
              Grab our free Dawn Liquid starter section. Zero monthly fees, zero JavaScript bloat, and
              instant integration into your Shopify Admin Theme Editor.
            </p>
          </div>
          <Link
            href="/#teardown"
            className="shrink-0 px-6 py-3 bg-[#efe9de] text-[#151413] font-bold rounded-xl hover:bg-[#f5f0e7] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] active:scale-[0.98]"
          >
            Get Free Liquid Code
          </Link>
        </div>
      </div>
    </div>
  );
}
