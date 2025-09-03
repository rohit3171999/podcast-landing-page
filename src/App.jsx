import React from "react";
import "./App.css"; // CSS file for styling

export default function App() {
    return (
        <div className="page">
            {/* Navbar */}
            <header className="navbar">
                <h1 className="logo">🎙️ MyPodcast</h1>
                <nav>
                    <a href="#episodes">Episodes</a>
                    <a href="#about">About</a>
                    <a href="#listen">Listen</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>Welcome to MyPodcast</h2>
                    <p>
                        Tune in every week for engaging conversations, inspiring stories,
                        and deep insights on technology, creativity, and culture.
                    </p>
                    <a
                        href="https://spotify.com"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-btn"
                    >
                        Listen on Spotify
                    </a>
                </div>
            </section>

            {/* Recent Episodes */}
            <section id="episodes" className="episodes">
                <h3>Recent Episodes</h3>
                <div className="episode-list">
                    <div className="episode-card">
                        <h4>Episode 12: The Future of AI</h4>
                        <p>
                            A deep dive into how AI is shaping the world around us and what’s
                            coming next.
                        </p>
                        <a href="https://spotify.com" target="_blank" rel="noreferrer">
                            ▶️ Listen
                        </a>
                    </div>
                    <div className="episode-card">
                        <h4>Episode 11: Building Creative Habits</h4>
                        <p>
                            Practical tips on how to stay creative and inspired in daily life.
                        </p>
                        <a href="https://spotify.com" target="_blank" rel="noreferrer">
                            ▶️ Listen
                        </a>
                    </div>
                    <div className="episode-card">
                        <h4>Episode 10: Startup Stories</h4>
                        <p>
                            Entrepreneurs share their journeys, struggles, and successes in
                            building startups.
                        </p>
                        <a href="https://spotify.com" target="_blank" rel="noreferrer">
                            ▶️ Listen
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h3>About the Podcast</h3>
                <p>
                    MyPodcast brings you inspiring interviews and insightful discussions
                    every week. Whether you're into tech, business, or lifestyle, there’s
                    something here for everyone.
                </p>
            </section>

            {/* Listen Section */}
            <section id="listen" className="listen">
                <h3>Listen Anywhere</h3>
                <p>
                    Available on all major platforms. Click below to start listening now!
                </p>
                <div className="platform-links">
                    <a
                        href="https://spotify.com"
                        target="_blank"
                        rel="noreferrer"
                        className="platform-btn"
                    >
                        🎧 Spotify
                    </a>
                    <a
                        href="https://podcasts.apple.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="platform-btn"
                    >
                        🍎 Apple Podcasts
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 MyPodcast. All rights reserved.</p>
            </footer>
        </div>
    );
}
