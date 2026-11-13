import { createContext, useContext, useEffect, useState } from "react";
import { L, RTL } from "./i18n";
const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);
export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => { try { const v = localStorage.getItem("lang"); return L[v] ? v : "en"; } catch { return "en"; } });
  const [signup, setSignup] = useState(false);
  useEffect(() => {
    document.documentElement.lang = lang === "prs" ? "fa-AF" : lang;
    document.documentElement.dir = RTL.includes(lang) ? "rtl" : "ltr";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);
  const [h1, sub, avail, nav] = L[lang];
  const t = { h1, sub, avail, nav: nav.split("|") };
  return <Ctx.Provider value={{ lang, setLang, t, signup, openSignup: () => setSignup(true), closeSignup: () => setSignup(false) }}>{children}</Ctx.Provider>;
}
