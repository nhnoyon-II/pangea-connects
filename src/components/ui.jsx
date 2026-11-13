import { CONFIG } from "../config";
import { useApp } from "../AppContext";
export function Stores({ className = "" }) {
  const base = "inline-flex min-w-[170px] flex-col rounded-2xl border border-white/30 bg-[#0f2037] px-5 py-2 font-bold leading-tight text-white no-underline hover:bg-black";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a className={base} href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer"><small className="text-[11px] font-normal opacity-80">Get it on</small><span className="text-lg">Google Play</span></a>
      {CONFIG.appStoreUrl
        ? <a className={base} href={CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer"><small className="text-[11px] font-normal opacity-80">Download on the</small><span className="text-lg">App Store</span></a>
        : <span className={`${base} cursor-default opacity-65`}><small className="text-[11px] font-normal opacity-80">Download on the</small><span className="text-lg">App Store <em className="text-xs not-italic text-gold">soon</em></span></span>}
    </div>
  );
}
export function CTA() {
  const { openSignup } = useApp();
  return (
    <section className="bg-gradient-to-br from-navy to-[#2b5280] px-[5vw] py-20 text-center text-white">
      <h2 className="!text-white text-3xl md:text-4xl">Ready to find your people?</h2>
      <p className="mt-2 text-lg opacity-90">Join Pangea free and meet the community that has your back.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3"><button className="btn-gold" onClick={openSignup}>Create free account</button><Stores /></div>
    </section>
  );
}
export function PageHead({ title, text, img }) {
  return (
    <section className="grid overflow-hidden bg-navy text-white md:grid-cols-[1.1fr_1fr]">
      <div className="px-[5vw] py-[9vh]"><h1 className="!text-white text-4xl md:text-6xl">{title}</h1><p className="mt-3 max-w-[44ch] text-xl opacity-90">{text}</p></div>
      <img src={`/images/${img}`} alt="" className="h-full max-h-64 min-h-[200px] w-full object-cover md:max-h-none md:rounded-ss-[120px]" />
    </section>
  );
}
