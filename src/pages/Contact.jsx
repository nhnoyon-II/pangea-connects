import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHead } from "../components/ui";
export default function Contact() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ "form-name": "contact", ...data }).toString() });
      if (r.ok) nav("/thanks"); else setErr("Could not send. Please try again.");
    } catch { setErr("Network error. Please try again."); }
  }
  return (
    <>
      <PageHead title="Say hello" text="Questions, partnerships or feedback. We read every message." img="settle-hero.jpg" />
      <section className="wrap grid items-start gap-[5vw] md:grid-cols-[1.2fr_1fr]">
        <div>
          <form onSubmit={submit}>
            <p hidden><input name="bot" tabIndex={-1} /></p>
            <label className="mb-4 block font-medium">Name<input className="input" name="name" required autoComplete="name" /></label>
            <label className="mb-4 block font-medium">Email<input className="input" name="email" type="email" required autoComplete="email" /></label>
            <label className="mb-4 block font-medium">Message<textarea className="input" name="message" rows={5} required /></label>
            <p className="text-muted" role="status">{err}</p>
            <button className="btn-gold">Send message</button>
          </form>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1">{["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube"].map((n) => <a key={n} className="font-medium text-navy hover:underline" href="#">{n}</a>)}</p>
        </div>
        <div className="rounded-[28px] bg-sand p-8 text-center">
          <img src="/images/founder.jpg" alt="Andres Gutierrez" className="mx-auto mb-5 aspect-[4/5] w-[min(300px,100%)] rounded-t-[999px] rounded-b-[28px] border-8 border-white object-cover object-top shadow-xl shadow-navy/20" />
          <h2 className="text-3xl">Andres Gutierrez</h2>
          <p className="mb-3 text-muted">Founder · Pangea Connects Pty Ltd</p>
          <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-navy">5+ yrs Settlement experience</span>
          <p className="mt-3">Brisbane, Australia</p>
        </div>
      </section>
    </>
  );
}
