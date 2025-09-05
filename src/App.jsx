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
        <div className="min-h-screen bg-[#0d0f14] text-[#e6e8ef] font-sans">
            {/* ===== Header / Hero ===== */}
            <header className="py-14">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800 to-sky-500 flex items-center justify-center shadow-lg border border-white/10">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                                    <path d="M12 3a9 9 0 100 18 9 9 0 000-18Zm0 3.5a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1Zm0 12a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5Z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                                TalkSphere — Conversations That Inspire Action
                            </h1>
                        </div>
                        <p className="text-[#a6adc8] text-base max-w-3xl">
                            A weekly podcast on technology, innovation, and personal growth.
                            Listen wherever you get your podcasts.
                        </p>
                        <div className="flex flex-wrap gap-3 items-center">
                            <a
                                className="px-5 py-3 rounded-lg bg-amber-500 text-black font-semibold shadow hover:bg-amber-400"
                                href="https://open.spotify.com/show/placeholder"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Listen on Spotify
                            </a>
                            <a
                                className="px-5 py-3 rounded-lg bg-gray-800 border border-white/10 font-semibold hover:bg-gray-700"
                                href="https://podcasts.apple.com/show/placeholder"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Apple Podcasts
                            </a>
                            <span className="inline-flex items-center gap-2 text-xs text-black bg-green-500 px-3 py-1.5 rounded-full font-bold">
                <span className="w-2 h-2 rounded-full bg-green-900" />
                New episode every Wednesday
              </span>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Recent Episodes */}
                <section className="py-6" aria-labelledby="recent">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 id="recent" className="text-2xl font-semibold">
                                Recent Episodes
                            </h2>
                            <a
                                className="text-sm text-[#a6adc8]"
                                href="#episodes-archive"
                                aria-label="See the full archive"
                            >
                                View archive →
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {episodes.map((ep) => (
                                <article
                                    key={ep.id}
                                    className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-4 flex gap-4 shadow-lg"
                                    aria-labelledby={`ep-title-${ep.id}`}
                                >
                                    <div className="flex-none w-18 h-18 rounded-lg bg-gradient-radial from-sky-500 to-gray-800 border border-white/10" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 text-xs text-[#a6adc8] mb-1">
                                            <span>{ep.date}</span>
                                            <span>•</span>
                                            <span>{ep.duration}</span>
                                        </div>
                                        <h3
                                            id={`ep-title-${ep.id}`}
                                            className="text-lg font-semibold mb-1"
                                        >
                                            {ep.title}
                                        </h3>
                                        <p className="text-sm text-[#cdd2e1] mb-2">
                                            {ep.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <a
                                                className="px-3 py-2 rounded-lg bg-gray-800 border border-white/10 text-sm hover:bg-gray-700"
                                                href={ep.links.spotify}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                ▶︎ Play on Spotify
                                            </a>
                                            <a
                                                className="px-3 py-1.5 rounded-full bg-gray-900 border border-white/10 text-xs"
                                                href={ep.links.apple}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Apple Podcasts
                                            </a>
                                            <a
                                                className="px-3 py-1.5 rounded-full bg-gray-900 border border-white/10 text-xs"
                                                href={ep.links.google}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
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
                <section className="py-6" aria-labelledby="where">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <h2 id="where" className="text-2xl font-semibold mb-4">
                            Where to Listen
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <a
                                className="bg-[#0f1420] border border-white/10 rounded-lg p-3 flex items-center gap-2 font-semibold shadow"
                                href="https://open.spotify.com/show/placeholder"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="text-green-500">🎵</span> Spotify
                            </a>
                            <a
                                className="bg-[#0f1420] border border-white/10 rounded-lg p-3 flex items-center gap-2 font-semibold shadow"
                                href="https://podcasts.apple.com/show/placeholder"
                                target="_blank"
                                rel="noreferrer"
                            >
                                🍎 Apple Podcasts
                            </a>
                            <a
                                className="bg-[#0f1420] border border-white/10 rounded-lg p-3 flex items-center gap-2 font-semibold shadow"
                                href="https://podcasts.google.com/placeholder"
                                target="_blank"
                                rel="noreferrer"
                            >
                                🔎 Google Podcasts
                            </a>
                            <a
                                className="bg-[#0f1420] border border-white/10 rounded-lg p-3 flex items-center gap-2 font-semibold shadow"
                                href="https://music.amazon.com/podcasts/placeholder"
                                target="_blank"
                                rel="noreferrer"
                            >
                                📦 Amazon Music
                            </a>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className="py-6" aria-labelledby="about">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <h2 id="about" className="text-2xl font-semibold mb-3">
                            About the Podcast
                        </h2>
                        <div className="bg-[#0f1420] border border-white/10 rounded-xl p-5 shadow">
                            <p>
                                TalkSphere brings you candid conversations with founders,
                                engineers, designers, and researchers. We unpack how ideas move
                                from spark to impact—and the habits that keep creators shipping.
                            </p>
                            <p className="mt-3 text-[#a6adc8]">
                                Hosted by <strong>Rohit Sharma</strong>. New episodes every
                                Wednesday.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* ===== Footer ===== */}
            <footer className="py-10 text-[#a6adc8]">
                <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap justify-between items-center gap-3">
                    <small>
                        © {new Date().getFullYear()} TalkSphere • All rights reserved
                    </small>
                    <nav className="flex gap-4 text-sm">
                        <a href="#contact">Contact</a>
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
