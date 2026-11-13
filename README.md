# Pangea Connects website (React + Vite + Tailwind CSS)
## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/
## Deploy to Netlify
Connect the repo (or drag the folder via Netlify CLI). netlify.toml already sets build command `npm run build`, publish dir `dist`, and the SPA redirect.
## Before launch
- src/config.js: Stripe Payment Links, Base44 appId/apiKey/signupUrl, App Store URL (button shows "soon" until set)
- Real images are in public/images (hero, founder, 2 app screens). Replace the gradient placeholders (features, cities, settle-hero, services-hero) with the same file names.
- Contact form uses Netlify Forms (enabled automatically on deploy).
- Placeholders: legal text (src/pages/Misc.jsx), social links (href="#" in Layout.jsx / Contact.jsx).
- Translations: src/i18n.js (nav, headline, subheadline, language line for all 13 languages; add more keys as needed). Arabic, Farsi and Dari switch to RTL.
- Brand tokens: tailwind.config.js (navy, teal, gold, slate, muted, ink = --text; plus derived sand, deep).
