"use client";

import { useState, useCallback } from "react";

// ─── AOV & Bundle Margin Calculator ────────────────────────────────────────────

function clamp(val: number, min: number, max: number) {
  return Math.min(max, Math.max(min, val));
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function formatPercent(n: number, decimals = 1) {
  return `${n.toFixed(decimals)}%`;
}

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  unit?: string;
  prefix?: string;
  tooltip: string;
}

function SliderInput({ label, value, min, max, step, onChange, unit = "", prefix = "", tooltip }: SliderInputProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-[rgba(239,233,222,0.7)] flex items-center gap-1.5">
          {label}
          <span
            className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[rgba(239,233,222,0.08)] border border-[rgba(239,233,222,0.12)] text-[rgba(239,233,222,0.4)] text-[10px] cursor-help font-mono"
            title={tooltip}
          >
            ?
          </span>
        </label>
        <div className="flex items-center gap-1 bg-[rgba(239,233,222,0.06)] border border-[rgba(239,233,222,0.12)] rounded-lg px-2 py-0.5">
          {prefix && <span className="text-[rgba(239,233,222,0.4)] font-mono text-xs">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(clamp(parseFloat(e.target.value) || min, min, max))}
            className="w-14 bg-transparent text-right text-xs font-mono font-bold text-[#efe9de] focus:outline-none"
          />
          {unit && <span className="text-[rgba(239,233,222,0.4)] font-mono text-xs">{unit}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-[10px] font-mono text-[rgba(239,233,222,0.3)]">
        <span>{prefix}{min}{unit}</span>
        <span>{prefix}{max}{unit}</span>
      </div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  highlight?: boolean;
}

function MetricCard({ label, value, delta, positive, highlight }: MetricCardProps) {
  return (
    <div
      className={`rounded-xl p-4 border transition-all ${
        highlight
          ? "bg-[rgba(239,233,222,0.08)] border-[rgba(239,233,222,0.2)] shadow-[0_0_0_1px_rgba(239,233,222,0.08)]"
          : "bg-[rgba(239,233,222,0.03)] border-[rgba(239,233,222,0.1)]"
      }`}
    >
      <p className="text-[10px] font-mono uppercase tracking-wider mb-1 text-[rgba(239,233,222,0.4)]">
        {label}
      </p>
      <p className={`text-2xl font-bold font-mono ${highlight ? "text-[#efe9de]" : "text-[rgba(239,233,222,0.8)]"}`}>
        {value}
      </p>
      {delta !== undefined && (
        <p
          className={`text-[11px] font-mono font-semibold mt-1 ${
            positive
              ? "text-[#3ecf6e]"
              : "text-[rgba(239,233,222,0.4)]"
          }`}
        >
          {positive ? "▲" : "▼"} {delta}
        </p>
      )}
    </div>
  );
}

export function AovBundleCalculator() {
  const [currentAov, setCurrentAov] = useState(65);
  const [monthlyOrders, setMonthlyOrders] = useState(500);
  const [takeRate, setTakeRate] = useState(30);
  const [discount, setDiscount] = useState(15);
  const [cogs, setCogs] = useState(35);

  // Calculations
  const bundleAov = currentAov * (1 + (100 - discount) / 100);
  const blendedAov = currentAov * (1 - takeRate / 100) + bundleAov * (takeRate / 100);
  const currentRevenue = currentAov * monthlyOrders;
  const projectedRevenue = blendedAov * monthlyOrders;
  const revenueGain = projectedRevenue - currentRevenue;

  const currentGrossProfit = currentRevenue * (1 - cogs / 100);
  const bundleGrossMargin = (1 - cogs / 100) - (discount / 100);
  const projectedGrossProfit =
    currentRevenue * (1 - takeRate / 100) * (1 - cogs / 100) +
    currentRevenue * (takeRate / 100) * bundleGrossMargin;
  const profitDelta = projectedGrossProfit - currentGrossProfit;
  const aovLift = ((blendedAov - currentAov) / currentAov) * 100;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-[#1c1b18] rounded-2xl border border-[rgba(239,233,222,0.1)] p-6 space-y-6">
        <h3 className="font-bold text-[#efe9de] text-base">Inputs</h3>
        <SliderInput
          label="Current AOV"
          value={currentAov}
          min={20}
          max={500}
          step={1}
          onChange={setCurrentAov}
          prefix="$"
          tooltip="Your store's current Average Order Value before introducing bundles."
        />
        <SliderInput
          label="Monthly Orders"
          value={monthlyOrders}
          min={50}
          max={10000}
          step={50}
          onChange={setMonthlyOrders}
          tooltip="Total number of orders placed per month."
        />
        <SliderInput
          label="Bundle Take Rate"
          value={takeRate}
          min={1}
          max={90}
          step={1}
          onChange={setTakeRate}
          unit="%"
          tooltip="Percentage of customers expected to choose the bundle option. 25–40% is typical."
        />
        <SliderInput
          label="Bundle Discount"
          value={discount}
          min={0}
          max={50}
          step={1}
          onChange={setDiscount}
          unit="%"
          tooltip="Discount applied to the bundled price vs. buying each item individually."
        />
        <SliderInput
          label="COGS %"
          value={cogs}
          min={5}
          max={80}
          step={1}
          onChange={setCogs}
          unit="%"
          tooltip="Cost of Goods Sold as a percentage of selling price. Typical DTC: 25–45%."
        />
      </div>

      {/* Outputs */}
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          label="Projected AOV"
          value={formatCurrency(blendedAov)}
          delta={`${formatPercent(aovLift)} lift`}
          positive={aovLift > 0}
          highlight
        />
        <MetricCard
          label="Monthly Revenue Gain"
          value={formatCurrency(revenueGain)}
          delta={formatPercent((revenueGain / currentRevenue) * 100)}
          positive={revenueGain > 0}
        />
        <MetricCard
          label="Projected Monthly Revenue"
          value={formatCurrency(projectedRevenue)}
        />
        <MetricCard
          label="Net Profit Delta"
          value={formatCurrency(profitDelta)}
          delta={`vs. current GP ${formatCurrency(currentGrossProfit)}`}
          positive={profitDelta > 0}
        />
      </div>

      <div className="bg-[rgba(62,207,110,0.08)] border border-[rgba(62,207,110,0.2)] rounded-xl p-4 text-sm text-[rgba(239,233,222,0.8)]">
        <strong className="text-[#3ecf6e]">Insight:</strong> At a {takeRate}% bundle take rate with {discount}% discount, you&apos;ll lift AOV by{" "}
        <strong className="text-[#efe9de]">{formatPercent(aovLift)}</strong> and generate an additional{" "}
        <strong className="text-[#efe9de]">{formatCurrency(revenueGain)}</strong>/month — with a net profit delta of{" "}
        <strong className="text-[#efe9de]">{profitDelta >= 0 ? "+" : ""}{formatCurrency(profitDelta)}</strong>.
      </div>
    </div>
  );
}

// ─── Discount Break-Even Calculator ────────────────────────────────────────────

export function BreakEvenCalculator() {
  const [currentMargin, setCurrentMargin] = useState(55);
  const [proposedDiscount, setProposedDiscount] = useState(20);

  const newMarginPct = currentMargin - proposedDiscount;
  const isViable = newMarginPct > 0;
  const requiredVolumeIncrease = isViable
    ? ((currentMargin / newMarginPct) - 1) * 100
    : Infinity;

  const breakEvenOrders = isViable ? 100 * (currentMargin / newMarginPct) : 0;

  const getRiskLevel = useCallback(() => {
    if (!isViable) return {
      label: "Unsustainable",
      bg: "bg-[rgba(239,68,68,0.08)]",
      border: "border-[rgba(239,68,68,0.2)]",
      text: "text-[#ef4444]",
    };
    if (requiredVolumeIncrease > 100) return {
      label: "Very High Risk",
      bg: "bg-[rgba(239,68,68,0.08)]",
      border: "border-[rgba(239,68,68,0.2)]",
      text: "text-[#ef4444]",
    };
    if (requiredVolumeIncrease > 50) return {
      label: "High Risk",
      bg: "bg-[rgba(249,115,22,0.08)]",
      border: "border-[rgba(249,115,22,0.2)]",
      text: "text-[#f97316]",
    };
    if (requiredVolumeIncrease > 25) return {
      label: "Moderate Risk",
      bg: "bg-[rgba(245,158,11,0.08)]",
      border: "border-[rgba(245,158,11,0.2)]",
      text: "text-[#f59e0b]",
    };
    return {
      label: "Low Risk",
      bg: "bg-[rgba(62,207,110,0.08)]",
      border: "border-[rgba(62,207,110,0.2)]",
      text: "text-[#3ecf6e]",
    };
  }, [isViable, requiredVolumeIncrease]);

  const risk = getRiskLevel();

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-[#1c1b18] rounded-2xl border border-[rgba(239,233,222,0.1)] p-6 space-y-6">
        <h3 className="font-bold text-[#efe9de] text-base">Inputs</h3>
        <SliderInput
          label="Current Gross Margin"
          value={currentMargin}
          min={5}
          max={90}
          step={1}
          onChange={setCurrentMargin}
          unit="%"
          tooltip="Your current gross margin percentage. Gross Margin = (Revenue - COGS) / Revenue × 100."
        />
        <SliderInput
          label="Proposed Discount"
          value={proposedDiscount}
          min={1}
          max={70}
          step={1}
          onChange={setProposedDiscount}
          unit="%"
          tooltip="The discount you plan to offer as a percentage of selling price."
        />
      </div>

      {/* Outputs */}
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          label="New Margin After Discount"
          value={isViable ? `${newMarginPct.toFixed(1)}%` : "Negative"}
          delta={`from ${currentMargin}%`}
          positive={false}
          highlight
        />
        <div className={`rounded-xl p-4 border ${risk.bg} ${risk.border}`}>
          <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${risk.text}`}>Risk Level</p>
          <p className={`text-2xl font-bold font-mono ${risk.text}`}>{risk.label}</p>
        </div>
        <MetricCard
          label="Required Volume Increase"
          value={isViable ? `+${requiredVolumeIncrease.toFixed(1)}%` : "∞"}
          delta="to break even"
          positive={false}
        />
        <MetricCard
          label="Break-Even Order Volume"
          value={isViable ? `${breakEvenOrders.toFixed(0)} per 100` : "N/A"}
          delta="orders needed"
          positive={isViable}
        />
      </div>

      <div className={`rounded-xl p-4 text-sm border ${risk.bg} ${risk.border} text-[rgba(239,233,222,0.8)]`}>
        {isViable ? (
          <>
            <strong className={risk.text}>Insight:</strong> A {proposedDiscount}% discount on a {currentMargin}% margin product requires a{" "}
            <strong className="text-[#efe9de]">+{requiredVolumeIncrease.toFixed(1)}%</strong> increase in sales volume just to break even on gross
            profit. For every 100 orders today, you&apos;ll need <strong className="text-[#efe9de]">{breakEvenOrders.toFixed(0)}</strong> post-discount.{" "}
            {requiredVolumeIncrease > 50 ? "Consider a smaller discount or a threshold-based offer." : "This discount is within a manageable range."}
          </>
        ) : (
          <>
            <strong className={risk.text}>Warning:</strong> A {proposedDiscount}% discount exceeds your {currentMargin}% gross margin. This
            discount would result in a <strong className="text-[#efe9de]">negative margin</strong> — every sale loses money regardless of volume.
            Reduce the discount below {currentMargin}%.
          </>
        )}
      </div>
    </div>
  );
}
