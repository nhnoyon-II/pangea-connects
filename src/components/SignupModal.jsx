import { useState } from "react";
import { useApp } from "../AppContext";
import { CONFIG } from "../config";
export default function SignupModal() {
  const { signup, closeSignup } = useApp();
  const [msg, setMsg] = useState("");
  if (!signup) return null;
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { signupUrl, apiKey } = CONFIG.base44;
    if (!signupUrl) return setMsg("Sign-up is not connected yet. Add the Base44 details in src/config.js.");
    try {
      const r = await fetch(signupUrl, { method: "POST", headers: { "Content-Type": "application/json", api_key: apiKey }, body: JSON.stringify(data) });
      setMsg(r.ok ? "Account created. Open the app and log in." : "We could not create the account. Check your details and try again.");
    } catch { setMsg("Network error. Please try again."); }
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-navy/60 p-4" onClick={closeSignup} role="dialog" aria-modal="true">
      <form onSubmit={submit} onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-3xl bg-white p-8">
        <h3 className="text-2xl">Create your free account</h3>
        <label className="mt-4 block font-medium">Full name<input className="input" name="name" required autoComplete="name" /></label>
        <label className="mt-4 block font-medium">Email<input className="input" name="email" type="email" required autoComplete="email" /></label>
        <label className="mt-4 block font-medium">Password<input className="input" name="password" type="password" minLength={8} required autoComplete="new-password" /></label>
        <p className="min-h-[1.5em] py-2 text-muted" role="status">{msg}</p>
        <div className="flex gap-3"><button className="btn-gold">Create account</button><button type="button" className="btn-line" onClick={closeSignup}>Cancel</button></div>
      </form>
    </div>
  );
}
