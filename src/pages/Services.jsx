import { Link } from "react-router-dom";
import { useApp } from "../AppContext";
import { CTA, PageHead } from "../components/ui";
const TYPES = ["🩺 Health", "⚖️ Legal & migration", "🧾 Finance & tax", "🔧 Trades & home", "📚 Tutoring & education", "🗣️ Translation", "🏡 Real estate", "💇 Beauty & wellbeing"];
const STEPS = [["Apply", "Professionals join with a Professional plan."], ["Get verified", "We check identity and qualifications."], ["Get found", "Your profile appears in the directory."]];
export default function Services() {
  const { openSignup } = useApp();
  return (
    <>
      <PageHead title="Verified professionals who get it" text="Find trusted help from people who understand your journey, often in your own language." img="services-hero.jpg" />
      <section className="wrap">
        <div className="grid items-start gap-[5vw] md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">A directory you can trust</h2>
            <p className="lead">Every provider in the Pangea directory is checked before they are listed. Search by service, city and language, then contact them straight from the app.</p>
            <div className="mt-6 flex flex-wrap gap-3"><button className="btn-gold" onClick={openSignup}>Find a professional</button><Link className="btn-line" to="/membership">List your services</Link></div>
          </div>
          <ol className="grid gap-3.5">
            {STEPS.map(([a, b], i) => (
              <li key={a} className="relative grid rounded-[20px] bg-slate py-4 pe-5 ps-[74px]">
                <span className="absolute start-5 top-1/2 grid h-[38px] w-[38px] -translate-y-1/2 place-items-center rounded-full bg-teal font-bold text-white">{i + 1}</span>
                <b>{a}</b><span className="text-muted">{b}</span>
              </li>
            ))}
          </ol>
        </div>
        <h2 className="mt-14">What you can find</h2>
        <div className="flex flex-wrap gap-2.5">{TYPES.map((t) => <span key={t} className="rounded-full bg-slate px-[18px] py-2 font-medium">{t}</span>)}</div>
      </section>
      <CTA />
    </>
  );
}
