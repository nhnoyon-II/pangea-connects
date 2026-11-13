import { useState } from "react";
import { useApp } from "../AppContext";
import { CONFIG } from "../config";
import { CTA, Stores } from "../components/ui";
import { NAMES } from "../i18n";
const FLAGS = { en: "🇦🇺", zh: "🇨🇳", ar: "🇸🇦", vi: "🇻🇳", hi: "🇮🇳", pa: "🇮🇳", es: "🇪🇸", tl: "🇵🇭", ne: "🇳🇵", ko: "🇰🇷", fa: "🇮🇷", prs: "🇦🇫", pt: "🇧🇷" };
const FEATURES = [
  ["ai", "AI Settlement Assistant", "Ask anything about life in Australia, in your language, any time.", true],
  ["guides", "Practical Support Guides", "Visas, banking, Medicare and more, step by step."],
  ["housing", "Housing Listings", "Find a room or home from people who understand."],
  ["jobs", "Jobs Board", "Work with employers who value your experience."],
  ["services", "Services Directory", "Verified doctors, tradies and migration agents."],
  ["skills", "Skill Exchange", "Teach what you know. Learn what you need."],
  ["events", "Events", "Festivals, meetups and celebrations near you."],
];
export default function Home() {
  const { lang, setLang, t, openSignup } = useApp();
  const [play, setPlay] = useState(false);
  return (
    <>
      <section className="relative grid min-h-[86vh] items-center gap-[3vw] px-[5vw] pb-[14vh] pt-[8vh] text-white md:grid-cols-[1.1fr_1fr]"
        style={{ backgroundImage: "linear-gradient(95deg,rgba(30,58,95,.92) 0%,rgba(30,58,95,.62) 45%,rgba(30,58,95,.08) 100%),url(/images/hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div>
          <p className="rise mb-5 inline-block rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm">Free for migrants, refugees and students</p>
          <h1 className="rise !text-white text-5xl font-semibold md:text-7xl" style={{ animationDelay: ".1s" }}>{t.h1}</h1>
          <p className="rise max-w-[26ch] font-display text-xl opacity-95 md:text-2xl" style={{ animationDelay: ".2s" }}>{t.sub}</p>
          <Stores className="rise mt-7" />
        </div>
        <div className="rise flex items-center justify-center" style={{ animationDelay: ".3s" }}>
          <img src="/images/screen1.png" alt="Pangea app: your feed" className="me-[-30px] z-10 w-[44%] max-w-[260px] translate-y-5 rotate-[-5deg] rounded-[30px] border-[6px] border-[#0f2037] shadow-2xl shadow-black/50" />
          <img src="/images/screen2.png" alt="Pangea app: menu" className="w-[44%] max-w-[260px] -translate-y-6 rotate-[4deg] rounded-[30px] border-[6px] border-[#0f2037] shadow-2xl shadow-black/50" />
        </div>
      </section>

      <section className="relative -mt-[6vh] rounded-t-[48px] bg-teal px-[5vw] pb-10 pt-8 text-center">
        <h2 className="mb-4 text-2xl">{t.avail}</h2>
        <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Choose language">
          {Object.entries(NAMES).map(([c, n]) => (
            <button key={c} onClick={() => setLang(c)} className={`rounded-full px-[18px] py-2 font-medium transition hover:-translate-y-0.5 ${lang === c ? "bg-navy text-white" : "bg-white text-navy"}`}>{n} {FLAGS[c]}</button>
          ))}
        </div>
      </section>

      <section className="wrap">
        <h2 className="text-center text-3xl md:text-4xl">Everything you need to settle in</h2>
        <p className="lead mx-auto text-center">One free app for the first week, the first year and everything after.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(([k, title, text, wide]) => (
            <article key={k} className={`group relative flex min-h-[320px] items-end overflow-hidden rounded-[26px] bg-navy text-white ${wide ? "sm:col-span-2" : ""}`}>
              <img src={`/images/${k}.jpg`} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="relative w-full bg-gradient-to-t from-deep/95 via-deep/60 to-transparent px-6 pb-6 pt-16"><h3 className="!text-white text-xl">{title}</h3><p className="text-[15px] opacity-90">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="wrap flex flex-wrap items-center justify-center gap-[6vw]">
          <div className="min-w-[280px] flex-1">
            <h2 className="!text-white text-3xl md:text-4xl">See Pangea in 30 seconds</h2>
            <p className="mb-6 text-lg opacity-90">Real people, real stories, one app built to help you belong.</p>
            <button className="btn-gold" onClick={openSignup}>Join free</button>
          </div>
          <div className="relative aspect-[9/16] w-[270px] overflow-hidden rounded-[34px] border-[7px] border-[#0f2037] bg-black shadow-[0_0_0_2px_#3dbdb5,0_24px_60px_rgba(0,0,0,.5)]">
            {play ? (
              <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${CONFIG.youtubeId}?autoplay=1&rel=0&playsinline=1`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen title="Pangea video" />
            ) : (
              <button className="h-full w-full" onClick={() => setPlay(true)} aria-label="Play video">
                <img src={`https://img.youtube.com/vi/${CONFIG.youtubeId}/hqdefault.jpg`} alt="" className="h-full w-full object-cover" />
                <span className="absolute inset-0 grid place-items-center bg-black/20 text-5xl text-white">▶</span>
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="wrap flex flex-wrap items-center justify-center gap-14">
          <img src="/images/founder.jpg" alt="Andres Gutierrez, founder of Pangea" className="aspect-[4/5] w-[min(340px,100%)] rounded-t-[999px] rounded-b-[28px] border-8 border-white object-cover object-top shadow-xl shadow-navy/20" />
          <div className="min-w-[300px] max-w-[520px] flex-1">
            <h2 className="text-3xl md:text-4xl">Andres Gutierrez</h2>
            <p className="mb-3 text-muted">Founder · Pangea Connects Pty Ltd</p>
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-navy">5+ yrs Settlement experience</span>
            <p className="mt-5 border-s-4 border-teal ps-5 font-display text-2xl leading-snug text-navy">We built the community we wished we had on the day we landed. Pangea is for migrants, by migrants.</p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
