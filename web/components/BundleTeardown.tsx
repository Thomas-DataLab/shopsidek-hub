"use client";

import { useState } from "react";
import LiquidModal from "./LiquidModal";

interface BundleTier {
  qty: number;
  label: string;
  sub: string;
  price: number;
  perUnit: number;
  badge?: string;
  savings?: string;
}

const tiers: BundleTier[] = [
  {
    qty: 1,
    label: "1 Month Supply",
    sub: "1 Bottle · Standard delivery",
    price: 49,
    perUnit: 49,
  },
  {
    qty: 3,
    label: "3 Months Supply",
    sub: "3 Bottles · Most chosen protocol",
    price: 117,
    perUnit: 39,
    badge: "Most Popular",
    savings: "Save 20%",
  },
  {
    qty: 6,
    label: "6 Months Supply",
    sub: "6 Bottles · Free Priority Shipping",
    price: 174,
    perUnit: 29,
    badge: "Best Value",
    savings: "Save 41%",
  },
];

export default function BundleTeardown() {
  const [selected, setSelected] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const current = tiers[selected];

  return (
    <>
      <div className="bg-[#1c1b18] rounded-xl border border-[rgba(239,233,222,0.1)] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        {/* Top Control Bar */}
        <div className="px-5 py-3 border-b border-[rgba(239,233,222,0.08)] bg-[rgba(239,233,222,0.03)] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3ecf6e] shadow-[0_0_6px_rgba(62,207,110,0.6)]" />
            <span className="font-mono text-[rgba(239,233,222,0.5)]">LIVE PREVIEW</span>
            <span className="text-[rgba(239,233,222,0.2)]">/</span>
            <span className="text-[rgba(239,233,222,0.4)]">Dawn Theme OS 2.0</span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[rgba(239,233,222,0.05)] border border-[rgba(239,233,222,0.12)] text-[rgba(239,233,222,0.7)] font-medium hover:bg-[rgba(239,233,222,0.08)] hover:text-[#efe9de] hover:border-[rgba(239,233,222,0.2)] transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy Liquid</span>
          </button>
        </div>

        {/* Product Box Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono tracking-wider text-[rgba(239,233,222,0.4)] uppercase">
                Daily Nootropic
              </p>
              <h3 className="font-bold text-[#efe9de] text-lg tracking-tight mt-0.5">
                Cellular Energy &amp; Focus
              </h3>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-[rgba(239,233,222,0.6)]">
                <div className="flex text-amber-400 text-xs">{"★".repeat(5)}</div>
                <span className="font-semibold text-[#efe9de]">4.9</span>
                <span className="text-[rgba(239,233,222,0.2)]">·</span>
                <span className="text-[rgba(239,233,222,0.5)] underline underline-offset-2 cursor-pointer">
                  4,812 reviews
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-[rgba(239,233,222,0.4)] block font-mono">AS LOW AS</span>
              <span className="text-xl font-bold font-mono text-[#efe9de]">
                $29
                <span className="text-xs text-[rgba(239,233,222,0.4)] font-sans font-normal">/mo</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3-Tier Selector */}
        <div className="px-6 space-y-2.5">
          {tiers.map((tier, idx) => {
            const isSelected = selected === idx;
            return (
              <div
                key={tier.qty}
                onClick={() => setSelected(idx)}
                className={`relative rounded-xl border p-3.5 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-[rgba(239,233,222,0.3)] bg-[rgba(239,233,222,0.06)] shadow-[0_0_0_1px_rgba(239,233,222,0.15),0_0_20px_rgba(239,233,222,0.04)]"
                    : "border-[rgba(239,233,222,0.08)] bg-[rgba(239,233,222,0.02)] hover:border-[rgba(239,233,222,0.15)] hover:bg-[rgba(239,233,222,0.04)]"
                }`}
              >
                {tier.badge && (
                  <span
                    className={`absolute -top-2.5 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                      tier.savings === "Save 20%"
                        ? "bg-[rgba(62,207,110,0.15)] text-[#3ecf6e] border border-[rgba(62,207,110,0.3)]"
                        : "bg-[rgba(239,233,222,0.1)] text-[#efe9de] border border-[rgba(239,233,222,0.2)]"
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Radio indicator */}
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isSelected
                          ? "border-[rgba(239,233,222,0.6)] bg-[rgba(239,233,222,0.15)]"
                          : "border-[rgba(239,233,222,0.2)] bg-transparent"
                      }`}
                    >
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#efe9de]" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${isSelected ? "text-[#efe9de]" : "text-[rgba(239,233,222,0.7)]"}`}>
                          {tier.label}
                        </span>
                        {tier.savings && (
                          <span className="text-[11px] font-semibold text-[#3ecf6e] bg-[rgba(62,207,110,0.1)] px-1.5 py-0.5 rounded border border-[rgba(62,207,110,0.2)]">
                            {tier.savings}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[rgba(239,233,222,0.4)] mt-0.5">{tier.sub}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`font-mono text-sm font-bold ${isSelected ? "text-[#efe9de]" : "text-[rgba(239,233,222,0.6)]"}`}>
                      ${tier.price}
                    </div>
                    <div className="text-[11px] text-[rgba(239,233,222,0.4)] font-mono">
                      ${tier.perUnit}/ea
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA & Delivery guarantee */}
        <div className="p-6 pt-4">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-3.5 px-4 rounded-xl bg-[#efe9de] hover:bg-[#f5f0e7] text-[#151413] font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] active:scale-[0.98]"
          >
            <span>Claim Offer · ${current.price}</span>
            <span className="text-[rgba(21,20,19,0.5)] font-mono text-xs font-normal">
              ({current.qty} Units)
            </span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[rgba(239,233,222,0.4)]">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[rgba(239,233,222,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              60-Day Guarantee
            </span>
            <span className="text-[rgba(239,233,222,0.15)]">·</span>
            <span>Ships Next Business Day</span>
          </div>
        </div>

        {/* Partner Hook Footer */}
        <div className="border-t border-[rgba(239,233,222,0.08)] bg-[rgba(239,233,222,0.02)] p-4 flex items-center justify-between text-xs text-[rgba(239,233,222,0.5)]">
          <div>
            <span className="font-semibold text-[rgba(239,233,222,0.8)]">Need dynamic multi-SKU sync?</span>
            <span className="text-[rgba(239,233,222,0.4)] block text-[11px]">
              Deploy with Kaching Bundles to automate stock deducts.
            </span>
          </div>
          <a
            href="https://apps.shopify.com/bundle-deals?mref=fcmkmjly"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-2.5 py-1 rounded-lg border border-[rgba(239,233,222,0.12)] bg-[rgba(239,233,222,0.05)] font-medium text-[rgba(239,233,222,0.7)] hover:bg-[rgba(239,233,222,0.08)] hover:text-[#efe9de] hover:border-[rgba(239,233,222,0.2)] transition-all duration-150"
          >
            Use SAVE20 ↗
          </a>
        </div>
      </div>

      {modalOpen && <LiquidModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
