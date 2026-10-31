"use client";

import { useState } from "react";
import { AovBundleCalculator, BreakEvenCalculator } from "@/components/AovCalculator";

const tabs = [
  {
    id: "aov",
    label: "AOV & Bundle Margin",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: "Model how bundle take rate and discount depth impact your projected AOV, monthly revenue, and net profit delta.",
  },
  {
    id: "breakeven",
    label: "Discount Break-Even",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Find exactly how many extra sales you need to offset a discount — before you run that sitewide promo.",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("aov");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Page header */}
      <div className="mb-10">
        <span className="inline-block bg-[rgba(239,233,222,0.06)] text-[rgba(239,233,222,0.6)] text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded border border-[rgba(239,233,222,0.12)] mb-3">
          FINANCIAL SIMULATION ENGINE
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#efe9de] tracking-tight">
          AOV &amp; Discount Unit Economics
        </h1>
        <p className="mt-2 text-sm text-[rgba(239,233,222,0.5)] max-w-2xl leading-relaxed">
          Model gross profit lift, cannibalization risks, and break-even sales volume required before launching
          volume tier promotions on your Shopify storefront.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-150 flex-1 ${
              activeTab === tab.id
                ? "border-[rgba(239,233,222,0.3)] bg-[rgba(239,233,222,0.08)] text-[#efe9de] shadow-[0_0_0_1px_rgba(239,233,222,0.08)]"
                : "border-[rgba(239,233,222,0.1)] bg-[rgba(239,233,222,0.03)] text-[rgba(239,233,222,0.6)] hover:border-[rgba(239,233,222,0.15)] hover:bg-[rgba(239,233,222,0.05)]"
            }`}
          >
            <span className={activeTab === tab.id ? "text-[#efe9de]" : "text-[rgba(239,233,222,0.3)]"}>
              {tab.icon}
            </span>
            <div>
              <p className="font-bold text-xs">{tab.label}</p>
              <p className="text-[11px] text-[rgba(239,233,222,0.4)] mt-0.5 hidden sm:block">
                {tab.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Active tab description */}
      <div className="bg-[rgba(239,233,222,0.04)] border border-[rgba(239,233,222,0.1)] text-[rgba(239,233,222,0.6)] rounded-xl px-4 py-2.5 flex items-start gap-2.5 mb-8 text-xs font-mono">
        <span className="text-[rgba(239,233,222,0.3)] font-bold">INFO:</span>
        <p className="text-[rgba(239,233,222,0.5)]">{active.description}</p>
      </div>

      {/* Calculator */}
      {activeTab === "aov" ? <AovBundleCalculator /> : <BreakEvenCalculator />}

      {/* Partner callout */}
      <div className="mt-12 bg-[#1c1b18] border border-[rgba(239,233,222,0.12)] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-[#efe9de] font-bold text-base">
            Ready to deploy automated tiered bundles on Shopify?
          </p>
          <p className="text-[rgba(239,233,222,0.5)] text-xs mt-1 leading-relaxed">
            Kaching Bundles automates SKU inventory sync and checkout discount logic without breaking theme code.
            Use code{" "}
            <strong className="text-[#3ecf6e] font-mono">SAVE20</strong> for 20% off.
          </p>
        </div>
        <a
          href="https://apps.shopify.com/bundle-deals?mref=fcmkmjly"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 bg-[#efe9de] text-[#151413] font-semibold text-xs rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-[#f5f0e7] transition-all duration-150 active:scale-[0.98]"
        >
          Get Kaching Bundles (20% OFF) ↗
        </a>
      </div>
    </div>
  );
}
