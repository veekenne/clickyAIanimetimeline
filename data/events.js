/*
 * AI in Anime — Timeline data
 * --------------------------------------------------------------------------
 * This file defines the events rendered by the timeline. It is exposed as a
 * global (window.TIMELINE_EVENTS) so the page works when opened directly from
 * disk (file://) as well as when served over HTTP (e.g. GitHub Pages).
 *
 * A machine-readable copy of the same data lives in data/events.json.
 *
 * category: one of "production", "controversy", "tooling", "legal", "policy"
 */
window.TIMELINE_EVENTS = [
  {
    id: "miyazaki-2016",
    date: "2016-11",
    dateLabel: "Nov 2016",
    year: 2016,
    category: "controversy",
    title: "Miyazaki: “an insult to life itself”",
    studio: "Studio Ghibli",
    summary: "Hayao Miyazaki rejects an AI-generated animation demo on camera, setting the tone for years of skepticism.",
    body: "In the NHK documentary “Hayao Miyazaki — The One Who Never Ends,” staff present Miyazaki with a grotesque AI-generated character that drags itself using its head. Told the technique could create zombies for games, Miyazaki replies that the work is “an insult to life itself” and that he would never incorporate it into his films. The clip resurfaced repeatedly as generative AI matured, becoming shorthand for the artistic objection to the technology.",
    sources: [
      { label: "Kotaku", url: "https://kotaku.com/hayao-miyazaki-ai-animation-voice-actors-strike-writers-1850893125" },
      { label: "We Are Resonate", url: "https://www.weareresonate.com/2016/12/studio-ghibli-hayao-miyazaki-calls-ai-generated-animation-insult-life/" }
    ]
  },
  {
    id: "deepanime-2019",
    date: "2019-08",
    dateLabel: "Aug 2019",
    year: 2019,
    category: "tooling",
    title: "DeepAnime debuts AI lip-sync",
    studio: "AlgoAge Co., Ltd. (Tokyo)",
    summary: "An early Japanese deep-learning engine animates a still illustration from a single image and a voice clip.",
    body: "Tokyo-based AlgoAge unveils DeepAnime, a deep-learning engine that generates talking animation — mouth movement and blinking — from one image plus a voice recording. Pitched for games and lightweight production, it is one of the first widely reported attempts to bring machine learning directly into Japanese animation workflows, foreshadowing later debates about automation.",
    sources: [
      { label: "Anime News Network", url: "https://www.animenewsnetwork.com/interest/2019-08-12/deep-anime-a.i-creates-talking-animation-based-on-one-image-voice-recording/.149985" },
      { label: "SoraNews24", url: "https://soranews24.com/2019/08/16/new-anime-ai-program-animates-your-art-for-you-when-you-add-a-voice-clip%E3%80%90videos%E3%80%91/" }
    ]
  },
  {
    id: "dog-and-the-boy-2023",
    date: "2023-01-31",
    dateLabel: "Jan 31, 2023",
    year: 2023,
    category: "production",
    title: "Netflix’s “The Dog & The Boy”",
    studio: "Wit Studio × Rinna × Netflix",
    summary: "The first commercial anime short to publicly use AI-generated backgrounds — and the first major fan backlash.",
    body: "Netflix Anime Creators Base releases the three-minute short “The Dog & The Boy,” directed by Ryōtarō Makihara with Wit Studio and AI studio Rinna. Netflix Japan promotes the AI-generated backgrounds as “an experimental effort to help the anime industry, which has a labor shortage.” The framing ignites widespread criticism from animators and fans who read it as a move to avoid paying background artists, making it the reference point for the whole debate.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Dog_%26_the_Boy" },
      { label: "Fortune", url: "https://fortune.com/2023/02/02/netflix-japan-ai-anime-backlash-labor-shortage/" },
      { label: "Vice", url: "https://www.vice.com/en/article/netflix-anime-dog-and-the-boy-ai-generated-art/" }
    ]
  },
  {
    id: "orange-funding-2024",
    date: "2024-05",
    dateLabel: "May 2024",
    year: 2024,
    category: "tooling",
    title: "Orange raises $19.5M for AI manga translation",
    studio: "Orange, Inc.",
    summary: "A Tokyo startup secures pre-Series A funding to localize manga roughly ten times faster than human teams.",
    body: "Orange, Inc. raises ¥2.92 billion (about $19.5M), backed in part by publisher Shogakukan, to scale AI-assisted manga localization — claiming up to 500 volumes per month. The company argues only ~2% of Japanese manga is officially translated, framing AI as an anti-piracy growth tool. Critics counter that it threatens professional translators and risks lower-quality localization.",
    sources: [
      { label: "The Comics Beat", url: "https://www.comicsbeat.com/ai-manga-translation-start-up-orange-gets-20-million-in-funding/" },
      { label: "PR Newswire", url: "https://www.prnewswire.com/news-releases/manga-tech-startup-orange-inc-raises-jpy-2-9b-usd-19-5m-in-pre-series-a-financing-302136935.html" }
    ]
  },
  {
    id: "precure-2024",
    date: "2024-06",
    dateLabel: "2024",
    year: 2024,
    category: "controversy",
    title: "“Precure” AI-art accusation",
    studio: "Toei / fandom",
    summary: "Fans accuse an official franchise illustration of being AI-generated, forcing a public denial.",
    body: "An official illustration tied to the long-running “Pretty Cure” (Precure) franchise draws fan accusations of being AI-generated. The rights holders publicly clarify the artwork was not made with generative AI. The episode shows how AI anxiety had spread to the point where even human-made promotional art was met with suspicion — a reputational risk in itself.",
    sources: [
      { label: "TokyoScope", url: "https://www.tokyoscope.blog/p/how-ais-rapid-rise-is-shaking-up" }
    ]
  },
  {
    id: "twins-hinahima-2025",
    date: "2025-03-28",
    dateLabel: "Mar 28, 2025",
    year: 2025,
    category: "production",
    title: "“Twins Hinahima” — Japan’s “first AI anime”",
    studio: "KaKa Creation / Frontier Works",
    summary: "A TV special uses AI assistance in over 95% of its animation cuts, with humans finishing the hardest shots.",
    body: "Adapted from a viral TikTok account, “Twins Hinahima” premieres on Tokyo MX, billed as Japan’s first AI-produced anime. AI generates backgrounds and character illustrations across 95%+ of cuts, while human animators finalize demanding shots like wind-blown hair. The director defends the approach, arguing it “will give more opportunities to animators” — a claim met with heavy fan skepticism and middling reviews.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Twins_Hinahima" },
      { label: "CBR", url: "https://www.cbr.com/twins-hinahima-first-ai-anime-spring-2025/" }
    ]
  },
  {
    id: "ghibli-trend-2025",
    date: "2025-03",
    dateLabel: "Mar 2025",
    year: 2025,
    category: "controversy",
    title: "The viral “Ghibli-style” image trend",
    studio: "OpenAI / global",
    summary: "ChatGPT’s image tool floods social media with Ghibli-style pictures, reviving Miyazaki’s 2016 warning.",
    body: "OpenAI’s updated image generation triggers a global wave of “Studio Ghibli style” images, prompting fierce debate over style mimicry, consent, and training data. Miyazaki’s “insult to life itself” quote resurfaces worldwide. The trend sharpens the question of whether imitating a studio’s signature look without permission is homage or appropriation — and helped set up the legal clashes later that year.",
    sources: [
      { label: "Euronews", url: "https://www.euronews.com/culture/2025/03/28/chatgpts-viral-studio-ghibli-style-images-an-insult-to-life-itself" }
    ]
  },
  {
    id: "toei-pfn-2025",
    date: "2025-05",
    dateLabel: "May 2025",
    year: 2025,
    category: "production",
    title: "Toei Animation invests in AI",
    studio: "Toei Animation × Preferred Networks",
    summary: "A legacy studio behind One Piece and Sailor Moon commits to AI for storyboards, coloring and in-betweens.",
    body: "Toei Animation announces an investment and joint venture with AI firm Preferred Networks to co-develop tools for storyboards, coloring, backgrounds and in-between creation, as part of a multi-billion-yen growth plan. After backlash, Toei clarifies it is “not currently” using AI in production but still expects to introduce it — signaling that even heritage studios see AI as part of their future pipeline.",
    sources: [
      { label: "Animation Magazine", url: "https://www.animationmagazine.net/2025/05/toei-invests-in-ai-tech-co-for-animation-production-venture/" },
      { label: "Anime Corner", url: "https://animecorner.me/toei-animation-ai-backlash-denies/" }
    ]
  },
  {
    id: "crunchyroll-subs-2025",
    date: "2025-07-01",
    dateLabel: "Jul 1, 2025",
    year: 2025,
    category: "controversy",
    title: "“ChatGPT said:” in Crunchyroll subtitles",
    studio: "Crunchyroll",
    summary: "AI-generated subtitles ship with a literal “ChatGPT said:” line, igniting calls for human-only translation.",
    body: "Viewers of “Necronomico and the Cosmic Horror Show” spot AI-generated German subtitles containing the phrase “ChatGPT said:” plus garbled grammar. Crunchyroll blames a third-party vendor and says the use violated its agreement, despite its CEO earlier promising no generative AI in the creative process. Fans demand refunds and turn back to fansubs — a vivid example of AI quality failures reaching paying customers.",
    sources: [
      { label: "The A.V. Club", url: "https://www.avclub.com/crunchyroll-ai-generated-subtitles-necronomico-and-the-cosmic-horror-show" },
      { label: "Engadget", url: "https://www.engadget.com/entertainment/streaming/crunchyroll-blames-third-party-vendor-for-ai-subtitle-mess-145621606.html" }
    ]
  },
  {
    id: "sora2-2025",
    date: "2025-09-30",
    dateLabel: "Sep 30, 2025",
    year: 2025,
    category: "tooling",
    title: "OpenAI launches Sora 2",
    studio: "OpenAI",
    summary: "A powerful video model that excels at anime styles raises the stakes for studios and rights holders.",
    body: "OpenAI releases Sora 2, a text-to-video model praised for realistic, cinematic and notably anime-style output, alongside a social app. Its fluency in anime aesthetics immediately alarms Japanese creators, who fear their work was used in training and could be cheaply imitated at scale — setting up a direct confrontation with the industry’s major IP holders.",
    sources: [
      { label: "OpenAI", url: "https://openai.com/index/sora-2/" },
      { label: "eWeek", url: "https://www.eweek.com/news/japan-studios-openai-sora/" }
    ]
  },
  {
    id: "coda-openai-2025",
    date: "2025-10",
    dateLabel: "Oct 2025",
    year: 2025,
    category: "legal",
    title: "Japan’s studios confront OpenAI over Sora 2",
    studio: "CODA (Ghibli, Bandai Namco, Square Enix…)",
    summary: "An industry trade group demands OpenAI stop training on Japanese works; OpenAI moves to restrict anime IP.",
    body: "The Content Overseas Distribution Association (CODA) — acting for Studio Ghibli, Bandai Namco, Aniplex, Square Enix, Kadokawa and Shueisha — sends OpenAI a formal request to stop using their works to train Sora 2, arguing that even copying during machine learning may infringe Japanese copyright. OpenAI subsequently moves to restrict anime and other IP in Sora. It marks the most organized legal pushback yet from Japan’s content industry.",
    sources: [
      { label: "Variety", url: "https://variety.com/2025/digital/news/studio-ghibli-openai-sora2-japanese-trade-group-coda-letter-1236568751/" },
      { label: "Nikkei Asia", url: "https://asia.nikkei.com/business/technology/artificial-intelligence/openai-restricts-use-of-anime-other-intellectual-property-in-sora" }
    ]
  },
  {
    id: "wit-bookworm-2026",
    date: "2026-04-10",
    dateLabel: "Apr 10, 2026",
    year: 2026,
    category: "controversy",
    title: "WIT Studio pulls AI opening",
    studio: "WIT Studio",
    summary: "AI-generated backgrounds in a new opening are removed after backlash — a repeat offense for the studio.",
    body: "WIT Studio confirms the new Season 4 opening for “Ascendance of a Bookworm” used AI-generated backgrounds. After fan criticism the opening is taken down and replaced with a traditionally animated version from episode 2 onward. As one of the studios behind 2023’s “The Dog & The Boy,” WIT becomes a recurring flashpoint, showing how sensitive audiences remain to AI in flagship sequences.",
    sources: [
      { label: "Gizmodo", url: "https://gizmodo.com/wit-studio-ai-anime-backlash-ascendance-of-a-bookworm-2000744962" },
      { label: "CBR", url: "https://www.cbr.com/ascendance-of-a-bookworm-ai-confirmed-one-piece-remake/" }
    ]
  },
  {
    id: "meti-subsidy-2026",
    date: "2026-06-04",
    dateLabel: "Jun 4, 2026",
    year: 2026,
    category: "policy",
    title: "Japan backs AI for anime & manga",
    studio: "METI / NEDO",
    summary: "Government adds AI projects and reportedly funds AI translation to fight labor shortages and piracy.",
    body: "Japan’s Ministry of Economy, Trade and Industry (METI) and NEDO expand their Generative AI Accelerator Challenge with new projects aimed at “labor shortages,” while a reported ~¥11.5 billion ($70M) package is expected to encourage publishers and distributors to adopt AI translation against piracy. State backing signals that, despite fan opposition, AI is being woven into national content strategy.",
    sources: [
      { label: "Kotaku", url: "https://kotaku.com/japanese-anime-manga-and-gaming-publishers-are-reportedly-being-paid-70-million-to-encourage-ai-generated-translations-2000710488" }
    ]
  }
];
