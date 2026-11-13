import { useState } from "react";
import { CTA, PageHead } from "../components/ui";
import { CONFIG } from "../config";
const CITIES = ["Brisbane", "Sydney", "Melbourne", "Perth", "Adelaide"];
const CATS = [["🏠", "Housing", "Rentals, bonds and your rights"], ["💼", "Jobs", "Resumes, work rights, first job"], ["🩺", "Healthcare & Medicare", "Enrol, find a GP, get care"], ["🏦", "Banking & money", "Open an account, send money home"], ["🛂", "Visas & migration", "Pathways and trusted help"], ["🎓", "Study & English", "Courses, AMEP, student life"], ["🚆", "Transport", "Opal, go card, myki and more"], ["🚗", "Driver licence", "Convert or get your licence"], ["🧾", "Tax & super", "TFN, tax returns, super"], ["🎉", "Community & culture", "Meet people, learn the culture"]];
export default function Settle() {
  const [city, setCity] = useState("Brisbane");
  return (
    <>
      <PageHead title="Settle in Australia" text="Practical guides in your language, matched to your city." img="settle-hero.jpg" />
      <section className="wrap">
        <h2>Choose your city</h2>
        <div className="mb-12 mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {CITIES.map((c) => (
            <button key={c} onClick={() => setCity(c)} className={`relative aspect-[3/4] overflow-hidden rounded-[22px] border-[3px] bg-navy ${city === c ? "border-gold" : "border-transparent"}`}>
              <img src={`/images/${c.toLowerCase()}.jpg`} alt="" className="h-full w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/95 to-transparent px-3 pb-3.5 pt-9 text-start font-display text-xl font-semibold text-white">{c}</span>
            </button>
          ))}
        </div>
        <h2>Guides for {city}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CATS.map(([ic, t, d]) => (
            <a key={t} href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[20px] bg-slate p-5 transition hover:-translate-y-0.5 hover:bg-teal/10">
              <span className="grid h-[60px] w-[60px] flex-none place-items-center rounded-2xl bg-white text-3xl">{ic}</span>
              <span><h3>{t}</h3><span className="text-[15px] text-muted">{d}</span></span>
            </a>
          ))}
        </div>
        <p className="mt-7 text-muted">Full guides live inside the Pangea app.</p>
      </section>
      <CTA />
    </>
  );
}
