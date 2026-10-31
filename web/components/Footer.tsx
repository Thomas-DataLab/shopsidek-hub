import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(239,233,222,0.1)] bg-[#191816] text-[rgba(239,233,222,0.5)] mt-auto text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded bg-[#efe9de] text-[#151413] font-mono font-bold text-[10px] flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]">
                /
              </span>
              <span className="font-semibold text-[#efe9de] text-sm">ShopSideK · CRO Hub</span>
            </div>
            <p className="text-[rgba(239,233,222,0.4)] text-xs leading-relaxed max-w-sm">
              An open-access library of conversion engineering teardowns, native Dawn Liquid sections,
              and unit-economic calculators for Shopify operators.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-[rgba(239,233,222,0.3)] mb-3 font-semibold">
              Directories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#efe9de] transition-colors duration-150">
                  Overview &amp; Teardowns
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-[#efe9de] transition-colors duration-150">
                  AOV &amp; Break-Even Models
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-[#efe9de] transition-colors duration-150">
                  Dawn Theme Blueprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner & Disclosures */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-[rgba(239,233,222,0.3)] mb-3 font-semibold">
              Ecosystem Deals
            </h3>
            <p className="text-[rgba(239,233,222,0.4)] text-xs mb-3">
              Get 20% recurring discount on Kaching Bundles with partner code.
            </p>
            <a
              href="https://apps.shopify.com/bundle-deals?mref=fcmkmjly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono font-semibold text-[#efe9de] hover:text-[rgba(239,233,222,0.7)] transition-colors"
            >
              <span>Code: SAVE20</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(239,233,222,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[rgba(239,233,222,0.3)] text-[11px]">
          <div>
            © {new Date().getFullYear()} ShopSideK Hub. Independent research &amp; engineering. Not affiliated with Shopify Inc.
          </div>
          <div className="font-mono">
            v1.2 · Fast Core Web Vitals
          </div>
        </div>
      </div>
    </footer>
  );
}
