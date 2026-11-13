import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useApp } from "../AppContext";
import { NAMES } from "../i18n";
import { CONFIG } from "../config";
import SignupModal from "./SignupModal";
const LINKS = ["/", "/settle", "/services", "/membership", "/contact"];
const Logo = ({ light }) => (
  <Link to="/" className={`flex items-center gap-2 font-display text-2xl font-bold ${light ? "text-white" : "text-navy"}`}>
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#1e3a5f" stroke="#3dbdb5" strokeWidth="1"/><path d="M5 17c6-8 16-8 22 0M7 23c5-5 13-5 18 0" stroke="#3dbdb5" strokeWidth="2.4" fill="none" strokeLinecap="round"/><circle cx="16" cy="10" r="3" fill="#f5a623"/></svg>Pangea
  </Link>
);
export default function Layout() {
  const { lang, setLang, t, openSignup } = useApp();
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => {
    setOpen(false);
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  const fl = "text-white/90 hover:text-white hover:underline";
  return (
    <>
      <a href="#main" className="absolute -left-[999px] focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:p-2">Skip to content</a>
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-[#e6edf5] bg-white/95 px-[5vw] py-3 backdrop-blur">
        <div className="me-auto"><Logo /></div>
        <nav aria-label="Main" className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-3 border-b border-[#e3eaf3] bg-white px-[5vw] py-4 md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {LINKS.map((to, i) => (
            <NavLink key={to} to={to} end className={({ isActive }) => `border-b-2 py-1 font-medium hover:border-gold ${isActive ? "border-gold" : "border-transparent"}`}>{t.nav[i]}</NavLink>
          ))}
        </nav>
        <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value)} className="rounded-xl border border-[#cfd9e6] bg-white px-2.5 py-1.5 text-sm">
          {Object.entries(NAMES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <button className="btn-gold btn-sm hidden md:inline-block" onClick={openSignup}>Sign up</button>
        <button className="text-3xl text-navy md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="grid gap-8 bg-deep px-[5vw] pb-24 pt-12 text-[#cfe0f2] md:grid-cols-[1fr_2fr]">
        <div><Logo light /><p className="mt-2">For migrants, by migrants.</p></div>
        <div>
          <p className="mb-3 flex flex-wrap gap-x-6 gap-y-1">
            {[["terms", "Terms of Use"], ["privacy", "Privacy Policy"], ["cookies", "Cookie Policy"], ["aup", "Acceptable Use"], ["child", "Child Safety"], ["access", "Accessibility Statement"]].map(([id, n]) => <Link key={id} className={fl} to={`/legal#${id}`}>{n}</Link>)}
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-1">{["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube"].map((n) => <a key={n} className={fl} href="#">{n}</a>)}</p>
        </div>
        <p className="border-t border-white/15 pt-5 text-sm opacity-75 md:col-span-2">Pangea Connects Pty Ltd · ABN 86 703 076 091</p>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-30 flex flex-wrap items-center justify-center gap-2.5 bg-deep/95 px-[4vw] py-2.5 text-white backdrop-blur">
        <span className="hidden sm:inline">Get the free Pangea app</span>
        <a className="btn-gold btn-sm" href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer">Google Play</a>
        {CONFIG.appStoreUrl ? <a className="btn-ghost btn-sm" href={CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer">App Store</a> : <span className="btn-ghost btn-sm cursor-default opacity-60">App Store · soon</span>}
      </div>
      <SignupModal />
    </>
  );
}
