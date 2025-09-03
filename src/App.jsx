export default function App() {
    const episodes = [
        {
            id: 1,
            title: "Ep 28 — AI at Work: Practical Automation",
            description:
                "We discuss real-world automation wins and pitfalls with a startup ops lead.",
            duration: "45 min",
            date: "Aug 20, 2025",
            links: {
                spotify: "https://open.spotify.com/episode/0000000000000000000001",
                apple: "https://podcasts.apple.com/episode/id0000000001",
                google: "https://podcasts.google.com/feed/episode/0000000001",
            },
        },
        {
            id: 2,
            title: "Ep 27 — Design Thinking for Engineers",
            description:
                "A product designer shares a toolkit for better problem framing and prototyping.",
            duration: "39 min",
            date: "Aug 13, 2025",
            links: {
                spotify: "https://open.spotify.com/episode/0000000000000000000002",
                apple: "https://podcasts.apple.com/episode/id0000000002",
                google: "https://podcasts.google.com/feed/episode/0000000002",
            },
        },
        {
            id: 3,
            title: "Ep 26 — Founder Focus: From MVP to PMF",
            description:
                "A founder’s journey hitting product–market fit and the mistakes along the way.",
            duration: "52 min",
            date: "Aug 06, 2025",
            links: {
                spotify: "https://open.spotify.com/episode/0000000000000000000003",
                apple: "https://podcasts.apple.com/episode/id0000000003",
                google: "https://podcasts.google.com/feed/episode/0000000003",
            },
        },
        {
            id: 4,
            title: "Ep 25 — Career Pivots into Data",
            description:
                "Tactical advice for moving into data roles without starting from scratch.",
            duration: "33 min",
            date: "Jul 30, 2025",
            links: {
                spotify: "https://open.spotify.com/episode/0000000000000000000004",
                apple: "https://podcasts.apple.com/episode/id0000000004",
                google: "https://podcasts.google.com/feed/episode/0000000004",
            },
        },
        {
            id: 5,
            title: "Ep 24 — The Psychology of Focus",
            description:
                "A neuroscientist explains attention, distraction, and building deep work habits.",
            duration: "41 min",
            date: "Jul 23, 2025",
            links: {
                spotify: "https://open.spotify.com/episode/0000000000000000000005",
                apple: "https://podcasts.apple.com/episode/id0000000005",
                google: "https://podcasts.google.com/feed/episode/0000000005",
            },
        },
    ];

    return (
        <div className="page">
            <style>{`
        /* ===== Base Reset & Theme ===== */
        :root {
          --bg: #0d0f14;
          --card: #141821;
          --text: #e6e8ef;
          --muted: #a6adc8;
          --accent: #f59e0b; /* amber */
          --accent-2: #22c55e; /* green */
          --outline: 1px solid rgba(255,255,255,0.08);
          --shadow: 0 10px 30px rgba(0,0,0,0.35);
          --radius: 18px;
          --max: 1100px;
        }
        * { box-sizing: border-box; }
        html, body, #root, .page { height: 100%; }
        body { margin: 0; background: var(--bg); color: var(--text); font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }
        .container { max-width: var(--max); margin: 0 auto; padding: 24px; }

        /* ===== Header / Hero ===== */
        header.hero { padding: 56px 0 28px; }
        .brand { display:flex; align-items:center; gap:12px; margin-bottom: 22px; }
        .logo {
          width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg,#1f2937, #0ea5e9);
          display:grid; place-items:center; box-shadow: var(--shadow); border: var(--outline);
        }
        .logo svg { width: 24px; height: 24px; }
        .titlewrap h1 { margin: 0; font-size: clamp(28px, 4.2vw, 48px); letter-spacing: -0.02em; }
        .subtitle { margin: 10px 0 26px; color: var(--muted); font-size: clamp(14px, 1.9vw, 18px); max-width: 60ch; }

        .cta-row { display:flex; flex-wrap: wrap; gap:12px; align-items:center; }
        .btn { padding: 12px 18px; border-radius: 12px; background: #1f2937; border: var(--outline); display:inline-flex; gap:10px; align-items:center; font-weight: 600; transition: transform .06s ease, background .2s ease; }
        .btn:hover { transform: translateY(-1px); background: #222a38; }
        .btn.primary { background: var(--accent); color: #111; border: none; }
        .btn.primary:hover { background: #f7ad2b; }

        .badge { display:inline-flex; align-items:center; gap:8px; font-size:12px; color: #111; background: var(--accent-2); padding:6px 10px; border-radius: 999px; font-weight: 700; }
        .badge-dot { width:8px; height:8px; border-radius:50%; background:#022c22; box-shadow:0 0 0 3px rgba(255,255,255,0.12) inset; }

        /* ===== Sections ===== */
        section { padding: 24px 0; }
        .section-title { display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; }
        .section-title h2 { margin: 0; font-size: clamp(20px, 3vw, 28px); }
        .muted-link { color: var(--muted); font-size: 14px; }

        /* ===== Episodes Grid ===== */
        .episodes { display:grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
        .episode-card {
          grid-column: span 12;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.0));
          border: var(--outline); border-radius: var(--radius); padding: 16px; display:flex; gap: 16px; align-items: flex-start; box-shadow: var(--shadow);
        }
        .ep-art { flex: 0 0 72px; height: 72px; border-radius: 14px; background: radial-gradient(120px 60px at 20% 30%, #0ea5e9, #1f2937 60%); border: var(--outline); }
        .ep-content { flex:1; min-width:0; }
        .ep-meta { color: var(--muted); font-size: 12px; margin-bottom: 6px; display:flex; gap:10px; align-items:center; }
        .ep-title { margin: 0 0 6px; font-size: 18px; line-height: 1.3; }
        .ep-desc { margin: 0 0 10px; color: #cdd2e1; }
        .ep-actions { display:flex; flex-wrap: wrap; gap:8px; }
        .chip { font-size: 12px; padding:8px 10px; border-radius: 999px; background:#0f172a; border: var(--outline); }

        @media (min-width: 720px) {
          .episode-card { grid-column: span 6; }
        }

        /* ===== Where to Listen ===== */
        .listen-grid { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        @media (min-width: 640px) { .listen-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }
        .listen-card { background: #0f1420; border: var(--outline); border-radius: 14px; padding: 14px; display:flex; align-items:center; gap:10px; font-weight:600; box-shadow: var(--shadow); }

        /* ===== About ===== */
        .about { background: #0f1420; border: var(--outline); border-radius: var(--radius); padding: 18px; box-shadow: var(--shadow); }

        /* ===== Footer ===== */
        footer { padding: 28px 0 60px; color: var(--muted); }
        .footer-grid { display:flex; flex-wrap:wrap; gap:12px; justify-content:space-between; align-items:center; }
        .socials { display:flex; gap:10px; }
        .socials a { padding:8px 10px; border-radius:10px; background:#0f1420; border: var(--outline); }
      `}</style>

            <header className="hero">
                <div className="container">
                    <div className="brand" aria-label="TalkSphere brand">
                        <div className="logo" role="img" aria-label="TalkSphere logo">
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M12 3a9 9 0 100 18 9 9 0 000-18Zm0 3.5a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1Zm0 12a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5Z" fill="#fff" opacity=".9"/>
                            </svg>
                        </div>
                        <div className="titlewrap">
                            <h1>TalkSphere — Conversations That Inspire Action</h1>
                            <p className="subtitle">
                                A weekly podcast on technology, innovation, and personal growth.
                                Listen wherever you get your podcasts.
                            </p>
                            <div className="cta-row">
                                <a className="btn primary" href="https://open.spotify.com/show/placeholder" target="_blank" rel="noreferrer">
                                    <span>Listen on Spotify</span>
                                </a>
                                <a className="btn" href="https://podcasts.apple.com/show/placeholder" target="_blank" rel="noreferrer">
                                    <span>Apple Podcasts</span>
                                </a>
                                <span className="badge" aria-label="New episode every Wednesday">
                  <span className="badge-dot"/> New episode every Wednesday
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Recent Episodes */}
                <section aria-labelledby="recent">
                    <div className="container">
                        <div className="section-title">
                            <h2 id="recent">Recent Episodes</h2>
                            <a className="muted-link" href="#episodes-archive" aria-label="See the full archive">
                                View archive →
                            </a>
                        </div>
                        <div className="episodes">
                            {episodes.map((ep) => (
                                <article key={ep.id} className="episode-card" aria-labelledby={`ep-title-${ep.id}`}>
                                    <div className="ep-art" aria-hidden="true" />
                                    <div className="ep-content">
                                        <div className="ep-meta">
                                            <span>{ep.date}</span>
                                            <span>•</span>
                                            <span>{ep.duration}</span>
                                        </div>
                                        <h3 id={`ep-title-${ep.id}`} className="ep-title">{ep.title}</h3>
                                        <p className="ep-desc">{ep.description}</p>
                                        <div className="ep-actions">
                                            <a className="btn" href={ep.links.spotify} target="_blank" rel="noreferrer" aria-label={`Play ${ep.title} on Spotify`}>
                                                ▶︎ Play on Spotify
                                            </a>
                                            <a className="chip" href={ep.links.apple} target="_blank" rel="noreferrer" aria-label={`Open ${ep.title} on Apple Podcasts`}>
                                                Apple Podcasts
                                            </a>
                                            <a className="chip" href={ep.links.google} target="_blank" rel="noreferrer" aria-label={`Open ${ep.title} on Google Podcasts`}>
                                                Google Podcasts
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Where to listen */}
                <section aria-labelledby="where">
                    <div className="container">
                        <div className="section-title">
                            <h2 id="where">Where to Listen</h2>
                        </div>
                        <div className="listen-grid">
                            <a className="listen-card" href="https://open.spotify.com/show/placeholder" target="_blank" rel="noreferrer" aria-label="Spotify">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm4.48 14.5a.8.8 0 01-1.1.27c-3.02-1.85-6.82-2.27-11.27-1.26a.8.8 0 01-.35-1.56c4.83-1.1 9-0.62 12.36 1.45.38.24.5.75.27 1.1Zm1.53-3.06a1 1 0 01-1.37.34c-3.45-2.1-8.7-2.71-12.78-1.5a1 1 0 11-.56-1.92c4.62-1.36 10.38-.69 14.29 1.68a1 1 0 01.42 1.4Zm.15-3.21a1.2 1.2 0 01-1.64.41c-3.96-2.39-10.02-2.92-14.2-1.62a1.2 1.2 0 01-.69-2.3c4.76-1.44 11.43-.84 15.94 1.86.56.33.74 1.05.41 1.65Z" fill="#1DB954"/></svg>
                                Spotify
                            </a>
                            <a className="listen-card" href="https://podcasts.apple.com/show/placeholder" target="_blank" rel="noreferrer" aria-label="Apple Podcasts">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#fff" opacity=".1"/><path d="M12 6.5a3.5 3.5 0 013.5 3.5V11a3.5 3.5 0 11-7 0V10A3.5 3.5 0 0112 6.5Zm0 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3Z" fill="#b197fc"/></svg>
                                Apple Podcasts
                            </a>
                            <a className="listen-card" href="https://podcasts.google.com/placeholder" target="_blank" rel="noreferrer" aria-label="Google Podcasts">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="10" width="3" height="4" rx="1" fill="#4285F4"/><rect x="8" y="6" width="3" height="12" rx="1" fill="#34A853"/><rect x="13" y="10" width="3" height="4" rx="1" fill="#FBBC04"/><rect x="18" y="8" width="3" height="8" rx="1" fill="#EA4335"/></svg>
                                Google Podcasts
                            </a>
                            <a className="listen-card" href="https://music.amazon.com/podcasts/placeholder" target="_blank" rel="noreferrer" aria-label="Amazon Music">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 17c4 2.2 14 2.2 18 0" stroke="#00A8E1" strokeWidth="2" strokeLinecap="round"/><path d="M6 9v6M10 7v8M14 10v5M18 8v7" stroke="#00A8E1" strokeWidth="2" strokeLinecap="round"/></svg>
                                Amazon Music
                            </a>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section aria-labelledby="about">
                    <div className="container">
                        <h2 id="about" className="section-title">About the Podcast</h2>
                        <div className="about">
                            <p>
                                TalkSphere brings you candid conversations with founders, engineers,
                                designers, and researchers. We unpack how ideas move from spark to
                                impact—and the habits that keep creators shipping.
                            </p>
                            <p style={{marginTop: 10, color: "#a6adc8"}}>
                                Hosted by <strong>Rohit Sharma</strong>. New episodes every Wednesday.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container footer-grid">
                    <small>© {new Date().getFullYear()} TalkSphere • All rights reserved</small>
                    <nav className="socials" aria-label="Social links">
                        <a href="#contact" aria-label="Contact">Contact</a>
                        <a href="#privacy" aria-label="Privacy Policy">Privacy</a>
                        <a href="#terms" aria-label="Terms">Terms</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
