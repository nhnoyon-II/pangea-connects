import { Link } from "react-router-dom";
const DOCS = [["terms", "Terms of Use"], ["privacy", "Privacy Policy"], ["cookies", "Cookie Policy"], ["aup", "Acceptable Use"], ["child", "Child Safety"], ["access", "Accessibility Statement"]];
export function Legal() {
  return (
    <section className="wrap">
      {DOCS.map(([id, t]) => <div key={id} className="mb-8"><h2 id={id} className="text-3xl">{t}</h2><p>Replace with your final {t} text.</p></div>)}
    </section>
  );
}
export function Thanks() {
  return (
    <section className="wrap text-center">
      <h1 className="text-5xl">Thank you!</h1>
      <p className="lead mx-auto my-4">We got your message and will reply soon.</p>
      <Link className="btn-gold" to="/">Back to home</Link>
    </section>
  );
}
