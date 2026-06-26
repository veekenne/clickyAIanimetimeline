# AI in Anime — An Interactive Timeline

An interactive, clickable timeline tracing how **artificial intelligence tools have been deployed across the Japanese animation industry**, from Hayao Miyazaki's 2016 rejection of AI animation through the studio adoptions, controversies, lawsuits, and government policy of 2026.

Every entry is sourced to primary reporting. Click any card to read the full story and follow the links.

🌸 **Live site:** once published, this runs at `https://<your-username>.github.io/ai-anime-timeline/`

---

## Features

- **Clickable cards** — each event opens a detail dialog with full context and sources.
- **Category filters** — Production, Tools & Tech, Controversy, Legal, and Policy.
- **Anime-inspired design** — soft sakura gradients, drifting petals, expressive accent colors, modern type.
- **Fully responsive** — alternating desktop layout collapses to a clean single column on mobile.
- **Accessible** — keyboard-navigable cards, focusable dialog, `prefers-reduced-motion` support.
- **No build step, no dependencies** — plain HTML/CSS/JS. Works offline by double-clicking `index.html`.

---

## Repository structure

```
ai-anime-timeline/
├── index.html          # Page markup
├── about.html          # About / credits page
├── css/
│   └── styles.css      # All styling (anime-inspired theme)
├── js/
│   ├── timeline.js     # Rendering, filtering, modal, scroll-reveal
│   └── petals.js       # Standalone petal background (about page)
├── data/
│   ├── events.js       # Timeline data (loaded by the page)
│   └── events.json     # Same data, machine-readable
├── .nojekyll           # Tells GitHub Pages to serve files as-is
├── LICENSE             # MIT
└── README.md
```

> **Why two data files?** `events.js` exposes the data as a global so the site
> works when opened directly from disk (no web server needed). `events.json` is
> the clean, reusable copy for anyone who wants the raw data.

---

## Running locally

The simplest way: **double-click `index.html`** — it works straight from the file system.

Or serve it with any static server:

```bash
# Python
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Publishing on GitHub Pages

1. Create a new GitHub repository (e.g. `ai-anime-timeline`) and push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI in anime interactive timeline"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ai-anime-timeline.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. Wait ~1 minute. Your timeline will be live at
   `https://<your-username>.github.io/ai-anime-timeline/`.

The included `.nojekyll` file ensures GitHub Pages serves the assets without Jekyll processing.

---

## Adding or editing events

Edit **`data/events.js`** (and, for consistency, mirror the change in `data/events.json`). Each event looks like:

```js
{
  id: "unique-slug",
  date: "2025-07-01",        // ISO date, used for sorting
  dateLabel: "Jul 1, 2025",  // human-friendly label shown on the card
  year: 2025,
  category: "controversy",   // production | tooling | controversy | legal | policy
  title: "Event title",
  studio: "Studio / company",
  summary: "One-line teaser shown on the card.",
  body: "Full paragraph shown in the detail dialog.",
  sources: [
    { label: "Publisher", url: "https://..." }
  ]
}
```

Events are sorted chronologically automatically. Categories control the accent color and the filter chips.

---

## Sources

This project summarizes public reporting and prioritizes citation-grade sources suitable for academic reference: primary documents (CODA, OpenAI, Preferred Networks, and corporate press releases), major news outlets (Fortune, Nikkei Asia, Variety, Euronews, Engadget, Rest of World, Artnet News, 404 Media, Publishers Weekly), and the anime industry's trade press of record (Anime News Network, Animation Magazine), plus localization-industry trades (Slator, MultiLingual). Each event card links directly to its sources so claims can be verified.

---

## License & disclaimer

Code and curation released under the [MIT License](LICENSE).

This is an independent, educational reference. It is **not affiliated with or endorsed by** any studio, company, or organization named in the timeline. All trademarks and works belong to their respective owners. Content reflects reporting available as of **June 2026**; details may have evolved since.
