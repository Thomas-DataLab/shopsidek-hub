"use client";

import { useEffect, useRef, useState } from "react";

const LIQUID_CODE = `{% comment %}
  ============================================================
  CRO Hub — 1-3-6 Supply Pack Bundle Section
  Compatible with: Shopify Dawn OS 2.0 (Sections Everywhere)
  ============================================================
{% endcomment %}

{% schema %}
{
  "name": "Supply Pack Bundle",
  "tag": "section",
  "class": "supply-pack-bundle",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section Heading",
      "default": "Choose Your Supply"
    },
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading",
      "default": "Save more when you buy more — free shipping on 3+ bottles"
    },
    {
      "type": "color",
      "id": "accent_color",
      "label": "Accent Color",
      "default": "#4f46e5"
    }
  ],
  "blocks": [
    {
      "type": "bundle_tier",
      "name": "Bundle Tier",
      "settings": [
        {
          "type": "text",
          "id": "label",
          "label": "Label",
          "default": "3 Bottles"
        },
        {
          "type": "number",
          "id": "quantity",
          "label": "Quantity",
          "default": 3
        },
        {
          "type": "product",
          "id": "product",
          "label": "Product"
        },
        {
          "type": "text",
          "id": "badge",
          "label": "Badge (e.g. Most Popular)",
          "default": ""
        },
        {
          "type": "checkbox",
          "id": "is_default",
          "label": "Pre-select this tier?",
          "default": false
        },
        {
          "type": "text",
          "id": "savings_label",
          "label": "Savings Label (e.g. Save 20%)",
          "default": ""
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Supply Pack Bundle",
      "blocks": [
        {
          "type": "bundle_tier",
          "settings": {
            "label": "1 Bottle",
            "quantity": 1,
            "badge": "",
            "is_default": false,
            "savings_label": ""
          }
        },
        {
          "type": "bundle_tier",
          "settings": {
            "label": "3 Bottles",
            "quantity": 3,
            "badge": "Most Popular",
            "is_default": true,
            "savings_label": "Save 20%"
          }
        },
        {
          "type": "bundle_tier",
          "settings": {
            "label": "6 Bottles",
            "quantity": 6,
            "badge": "Best Value",
            "is_default": false,
            "savings_label": "Save 41%"
          }
        }
      ]
    }
  ]
}
{% endschema %}

{% assign default_index = 0 %}
{% for block in section.blocks %}
  {% if block.settings.is_default %}
    {% assign default_index = forloop.index0 %}
  {% endif %}
{% endfor %}

<div
  class="supply-bundle section-{{ section.id }}"
  data-default-index="{{ default_index }}"
  style="--accent: {{ section.settings.accent_color }};"
>
  <div class="supply-bundle__inner page-width">
    {% if section.settings.heading != blank %}
      <h2 class="supply-bundle__heading">{{ section.settings.heading }}</h2>
    {% endif %}
    {% if section.settings.subheading != blank %}
      <p class="supply-bundle__subheading">{{ section.settings.subheading }}</p>
    {% endif %}

    <div class="supply-bundle__tiers" role="radiogroup" aria-label="Bundle options">
      {% for block in section.blocks %}
        {% assign tier_product = block.settings.product %}
        {% assign tier_price = tier_product.selected_or_first_available_variant.price %}
        {% assign is_selected = false %}
        {% if forloop.index0 == default_index %}{% assign is_selected = true %}{% endif %}

        <label
          class="supply-bundle__tier{% if is_selected %} is-selected{% endif %}"
          {{ block.shopify_attributes }}
        >
          <input
            type="radio"
            name="bundle-tier-{{ section.id }}"
            value="{{ block.id }}"
            data-qty="{{ block.settings.quantity }}"
            data-variant-id="{{ tier_product.selected_or_first_available_variant.id }}"
            {% if is_selected %}checked{% endif %}
          />
          <div class="supply-bundle__tier-inner">
            <div class="supply-bundle__tier-info">
              <span class="supply-bundle__tier-label">{{ block.settings.label }}</span>
              {% if block.settings.badge != blank %}
                <span class="supply-bundle__tier-badge">{{ block.settings.badge }}</span>
              {% endif %}
              {% if tier_price %}
                <span class="supply-bundle__tier-unit">
                  {{ tier_product.selected_or_first_available_variant.price | money }}/bottle
                </span>
              {% endif %}
            </div>
            <div class="supply-bundle__tier-price">
              {% if tier_price %}
                <span class="supply-bundle__tier-total">
                  {{ tier_price | times: block.settings.quantity | money }}
                </span>
              {% endif %}
              {% if block.settings.savings_label != blank %}
                <span class="supply-bundle__tier-savings">{{ block.settings.savings_label }}</span>
              {% endif %}
            </div>
          </div>
        </label>
      {% endfor %}
    </div>

    <button
      class="supply-bundle__cta button"
      data-section-id="{{ section.id }}"
    >
      Add to Cart
    </button>
  </div>
</div>

<style>
  .supply-bundle { padding: 4rem 0; }
  .supply-bundle__inner { max-width: 640px; margin: 0 auto; }
  .supply-bundle__heading { font-size: 1.75rem; font-weight: 700; margin-bottom: .5rem; }
  .supply-bundle__subheading { color: #6b7280; margin-bottom: 1.5rem; }
  .supply-bundle__tiers { display: flex; flex-direction: column; gap: .75rem; margin-bottom: 1.5rem; }
  .supply-bundle__tier {
    display: block; border: 2px solid #e5e7eb; border-radius: .75rem;
    padding: 1rem 1.25rem; cursor: pointer; transition: border-color .15s, background .15s;
  }
  .supply-bundle__tier input[type="radio"] { position: absolute; opacity: 0; pointer-events: none; }
  .supply-bundle__tier.is-selected,
  .supply-bundle__tier:has(input:checked) {
    border-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, white);
  }
  .supply-bundle__tier-inner { display: flex; justify-content: space-between; align-items: center; }
  .supply-bundle__tier-label { font-weight: 600; font-size: 1rem; }
  .supply-bundle__tier-badge {
    display: inline-block; font-size: .75rem; font-weight: 700;
    background: var(--accent); color: #fff; border-radius: 999px;
    padding: .15rem .6rem; margin-left: .5rem;
  }
  .supply-bundle__tier-unit { display: block; font-size: .75rem; color: #6b7280; margin-top: .2rem; }
  .supply-bundle__tier-total { font-weight: 700; font-size: 1.1rem; }
  .supply-bundle__tier-savings { display: block; font-size: .75rem; color: #059669; font-weight: 600; }
  .supply-bundle__cta { width: 100%; justify-content: center; }
</style>

<script>
(function () {
  var section = document.querySelector('.section-{{ section.id }}');
  if (!section) return;
  var radios = section.querySelectorAll('input[type="radio"]');
  var cta = section.querySelector('.supply-bundle__cta');

  function updateSelection() {
    section.querySelectorAll('.supply-bundle__tier').forEach(function(t) {
      t.classList.toggle('is-selected', t.querySelector('input[type="radio"]').checked);
    });
  }

  radios.forEach(function(radio) {
    radio.addEventListener('change', updateSelection);
  });

  if (cta) {
    cta.addEventListener('click', function() {
      var checked = section.querySelector('input[type="radio"]:checked');
      if (!checked) return;
      var variantId = checked.dataset.variantId;
      var qty = checked.dataset.qty || 1;
      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: variantId, quantity: parseInt(qty) })
      }).then(function(r) {
        if (r.ok) window.location.href = '/cart';
      });
    });
  }
})();
</script>`;

interface LiquidModalProps {
  onClose: () => void;
}

export default function LiquidModal({ onClose }: LiquidModalProps) {
  const [copied, setCopied] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LIQUID_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = LIQUID_CODE;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#1c1b18] border border-[rgba(239,233,222,0.12)] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.7)] w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(239,233,222,0.1)] shrink-0">
          <div>
            <h2 className="text-lg font-bold text-[#efe9de]">Dawn OS 2.0 Liquid Section Code</h2>
            <p className="text-sm text-[rgba(239,233,222,0.5)] mt-0.5">
              Drop into{" "}
              <code className="bg-[rgba(239,233,222,0.08)] border border-[rgba(239,233,222,0.1)] px-1.5 py-0.5 rounded text-xs font-mono text-[rgba(239,233,222,0.7)]">
                sections/supply-pack-bundle.liquid
              </code>{" "}
              — fully customizable in Theme Editor
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[rgba(239,233,222,0.08)] text-[rgba(239,233,222,0.4)] hover:text-[#efe9de] transition-all duration-150"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Code area */}
        <div className="flex-1 overflow-y-auto">
          <pre className="p-6 text-xs leading-relaxed bg-[#0d1117] text-[#c9d1d9] font-mono whitespace-pre overflow-x-auto selection:bg-[#264f78]">
            <code>{LIQUID_CODE}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[rgba(239,233,222,0.08)] flex items-center justify-between gap-4 shrink-0 bg-[rgba(239,233,222,0.02)] rounded-b-2xl">
          <div className="text-[11px] text-[rgba(239,233,222,0.4)] font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf6e] shadow-[0_0_4px_rgba(62,207,110,0.5)]" />
            Tested on Dawn 14.x · 0 App Dependency
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-[rgba(239,233,222,0.5)] hover:text-[rgba(239,233,222,0.8)] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-mono font-semibold text-xs transition-all duration-150 ${
                copied
                  ? "bg-[rgba(62,207,110,0.15)] border border-[rgba(62,207,110,0.3)] text-[#3ecf6e]"
                  : "bg-[#efe9de] text-[#151413] shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-[#f5f0e7] active:scale-[0.98]"
              }`}
            >
              {copied ? "✓ Copied to clipboard" : "Copy Liquid Section"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
