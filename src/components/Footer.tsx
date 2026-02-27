import Link from "next/link";
import basePath from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="bg-wf-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Footer grid — matching WF 5-column pattern */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-medium text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {[
                ["World Account", "https://www.worldfirst.com/uk/world-account/"],
                ["Receive", "https://www.worldfirst.com/uk/receive/"],
                ["Pay", "https://www.worldfirst.com/uk/pay/"],
                ["FX", "https://www.worldfirst.com/uk/fx/"],
                ["Pay 1688 Suppliers", "https://www.worldfirst.com/uk/pay-1688/"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 text-[13px] hover:text-white transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                ["E-commerce Seller", "https://www.worldfirst.com/uk/ecommerce/"],
                ["Supplier Payment", "https://www.worldfirst.com/uk/supplier-payment/"],
                ["Pay into China", "https://www.worldfirst.com/uk/pay-to-china/"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 text-[13px] hover:text-white transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Navigator</h4>
            <ul className="space-y-2.5">
              {[
                ["Guangzhou", "/cities/guangzhou"],
                ["Shenzhen", "/cities/shenzhen"],
                ["Dongguan", "/cities/dongguan"],
                ["Foshan", "/cities/foshan"],
                ["Yiwu", "/cities/yiwu"],
                ["Ningbo", "/cities/ningbo"],
                ["Electronics", "/categories/electronics"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="text-white/70 text-[13px] hover:text-white transition-colors">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                ["Blog", "https://www.worldfirst.com/uk/blog/"],
                ["Customer Stories", "https://www.worldfirst.com/uk/customer-stories/"],
                ["User Guides", "https://www.worldfirst.com/uk/user-guides/"],
                ["FAQs", "https://www.worldfirst.com/uk/faqs/"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 text-[13px] hover:text-white transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                ["About WorldFirst", "https://www.worldfirst.com/uk/about-us/"],
                ["Why WorldFirst", "https://www.worldfirst.com/uk/why-worldfirst/"],
                ["Contact Us", "https://www.worldfirst.com/uk/contact-us/"],
                ["Security", "https://www.worldfirst.com/uk/security/"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 text-[13px] hover:text-white transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Attribution */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`${basePath}/images/wf-logo-reversed.webp`}
                alt="WorldFirst"
                className="h-5 w-auto opacity-70"
              />
              <span className="text-white/50 text-xs">
                © 2026, Ant International or its affiliates. All rights reserved.
              </span>
            </div>
            <p className="text-white/40 text-xs text-center md:text-right max-w-md">
              WorldFirst is a trading name of WorldFirst UK Ltd, authorised and
              regulated by the Financial Conduct Authority (FRN: 900508).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
