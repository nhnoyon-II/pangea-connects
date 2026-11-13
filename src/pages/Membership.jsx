import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../AppContext";
import { CONFIG } from "../config";
import { CTA, PageHead } from "../components/ui";
const PLANS = [
  { n: "Community", m: "Free", y: "Free", f: "For NGOs", li: ["Community profile", "Post events and resources"], free: true },
  { n: "Skill Provider", m: "$15/mo", y: "$149/yr", f: "For migrants sharing talents", k: ["skill_monthly", "skill_yearly"], li: ["Skill Exchange listing", "Offer your services", "Community badge"] },
  { n: "Professional", m: "$39/mo", y: "$390/yr", f: "For verified professionals", k: ["pro_monthly", "pro_yearly"], li: ["Verified profile", "Services Directory listing", "Priority in search"], hot: true },
  { n: "Partner", m: "$199/mo", y: "$199/mo", f: "For businesses & institutions", k: ["partner", "partner"], li: ["Featured partner listing", "Jobs and housing posts", "Event promotion"] },
  { n: "Strategic", m: "$499/mo", y: "$499/mo", f: "For strategic partners", k: ["strategic", "strategic"], li: ["Everything in Partner", "Co-branded programs", "Direct team support"] },
];
export default function Membership() {
  const [bill, setBill] = useState("m");
  const { openSignup } = useApp();
  return (
    <>
      <PageHead title="Membership" text="Pangea is free for people settling in. Paid plans keep it that way." img="services-hero.jpg" />
      <section className="wrap">
        <div className="mx-auto mb-10 flex w-max gap-1.5 rounded-full bg-slate p-1.5" role="group" aria-label="Billing">
          {[["m", "Monthly"], ["y", "Yearly"]].map(([v, l]) => (
            <button key={v} onClick={() => setBill(v)} className={`rounded-full px-6 py-2.5 font-semibold ${bill === v ? "bg-navy text-white" : "text-navy"}`}>{l}{v === "y" && <small className="ms-1 text-gold"> save ~17%</small>}</button>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[18px]">
          {PLANS.map((p) => {
            const link = !p.free && CONFIG.stripe[p.k[bill === "m" ? 0 : 1]];
            const cls = `${p.hot ? "btn-gold" : "btn-line"} text-center`;
            return (
              <article key={p.n} className={`relative flex flex-col rounded-[26px] border-2 px-6 py-8 ${p.hot ? "border-gold bg-sand shadow-xl shadow-gold/15" : "border-[#e3eaf3] bg-white"}`}>
                {p.hot && <span className="absolute -top-3.5 start-6 rounded-full bg-gold px-3.5 py-1 text-xs font-bold text-navy">Most popular</span>}
                <h3>{p.n}</h3>
                <p className="mt-1.5 font-display text-4xl font-semibold text-navy">{bill === "m" ? p.m : p.y}</p>
                <p className="mb-3.5 text-muted">{p.f}</p>
                <ul className="mb-6 flex-1 list-disc ps-5 marker:text-teal">{p.li.map((x) => <li key={x} className="mb-1.5">{x}</li>)}</ul>
                {p.free ? <button className={cls} onClick={openSignup}>Join free</button>
                  : link ? <a className={cls} href={link} target="_blank" rel="noopener noreferrer">Choose {p.n}</a>
                  : <Link className={cls} to="/contact" title="Payment link not added yet">Choose {p.n}</Link>}
              </article>
            );
          })}
        </div>
        <p className="mt-7 text-muted">Yearly billing is available for Skill Provider and Professional. Prices in AUD.</p>
      </section>
      <CTA />
    </>
  );
}
