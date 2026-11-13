import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settle from "./pages/Settle";
import Services from "./pages/Services";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import { Legal, Thanks } from "./pages/Misc";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settle" element={<Settle />} />
        <Route path="services" element={<Services />} />
        <Route path="membership" element={<Membership />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal" element={<Legal />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
