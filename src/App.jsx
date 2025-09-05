import React from 'react';

// SVG Icons for the application
// Using components for icons makes them reusable and easier to manage.

const LogoIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
    >
        <path d="M12 2a3.5 3.5 0 0 0-3.5 3.5v1.25a3.5 3.5 0 0 0 7 0V5.5A3.5 3.5 0 0 0 12 2z" />
        <path d="M6.74 10.74a8 8 0 0 0 10.52 0" />
        <path d="M12 12.5a2.5 2.5 0 0 1-2.5-2.5V5.5a2.5 2.5 0 0 1 5 0v4.5a2.5 2.5 0 0 1-2.5 2.5z" />
        <path d="M8.5 10.5a1 1 0 0 1-1-1V9a4.5 4.5 0 0 1 9 0v.5a1 1 0 0 1-1 1" />
        <path d="M12 12.5v9" />
        <path d="M10.5 21.5h3" />
    </svg>
);


const PlayIcon = ({ className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

const SpotifyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.89 12.21a.49.49 0 0 1-.62.36c-2.38-1.45-5.35-1.78-8.9-.91a.5.5 0 0 1-.56-.49.49.49 0 0 1 .48-.56c3.81-.93 7.06-.55 9.7 1.11a.49.49 0 0 1 .29.6m.9-2.72a.62.62 0 0 1-.84.45c-2.74-1.65-6.8-2.14-9.92-1.15a.63.63 0 0 1-.72-.6.62.62 0 0 1 .6-.72c3.52-1.09 7.93-.53 11 1.34a.61.61 0 0 1 .38.83m.13-2.8a.76.76 0 0 1-1-.54C13.59 6.2 8.61 6 5.31 7.15a.76.76 0 0 1-.88-.72.76.76 0 0 1 .71-.88c3.75-1.29 9.2-.94 12.63 1.73a.75.75 0 0 1 .42 1.05"/></svg>
);

const ApplePodcastsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m6.29 14.28c-.28-.01-.55.1-.73.31-.19.22-.3.51-.3.81v.39c0 .02 0 .04-.01.06-.23 1.9-1.82 2.76-1.95 2.79-.06.01-.1.02-.13.02-.82 0-1.43-.45-2.08-.45-.66 0-1.21.43-2.03.45-.1 0-.19-.01-.28-.02-1.28-.15-2.48-1.39-3.08-2.76-.02-.04-.03-.09-.03-.13v-.31c0-.3.11-.59.3-.81.18-.21.45-.32.73-.31.3 0 .57.11.75.31.18.2.29.47.29.74v.05c.01.04.01.09.02.13.38.88 1.48 1.62 2.37 1.62.88 0 1.25-.49 2.06-.49.81 0 1.15.49 2.04.49.86 0 1.93-.7 2.3-1.62.01-.04.02-.08.02-.13v-.05c0-.27.11-.54.29-.74.18-.2.45-.31.75-.31M12 11.59c-.91 0-1.74-.3-2.39-.81-.3-.23-.48-.59-.48-.97V9.7c0-.01 0-.02.01-.03.22-1.78 1.65-2.46 1.77-2.49.06-.01.12-.02.16-.02.66 0 1.25.42 1.86.42.6 0 1.13-.42 1.81-.42.06 0 .13.01.2.02 1.19.16 2.36 1.35 2.95 2.68v.17c0 .38-.18.74-.48.97-.65.51-1.48.81-2.39.81"/></svg>
);

const GooglePodcastsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-8 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-8 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
);


const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.087C8.74 1.076 8.344 1.088 7.108 1.145c-3.636.166-6.16 2.693-6.326 6.326C.723 8.74.711 9.137.711 12s.012 3.26.07 4.526c.166 3.636 2.69 6.16 6.326 6.326C8.74 22.91 9.137 22.922 12 22.922s3.26-.012 4.526-.07c3.636-.166 6.16-2.69 6.326-6.326.058-1.266.07-1.662.07-4.526s-.012-3.26-.07-4.526c-.166-3.636-2.69-6.16-6.326-6.326C15.26 1.088 14.863 1.076 12 1.076zM12 6.845a5.155 5.155 0 1 0 0 10.31 5.155 5.155 0 0 0 0-10.31zm0 8.729a3.574 3.574 0 1 1 0-7.148 3.574 3.574 0 0 1 0 7.148zM18.336 4.965a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.62.61-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.38.96 3.38 4.42z"/></svg>
);

// Mock data for podcast episodes
const episodes = [
    {
        title: "The Future of AI in Daily Life",
        description: "Exploring how artificial intelligence is shaping our routines, from smart homes to personalized healthcare.",
        duration: "48 min",
        link: "#"
    },
    {
        title: "Mindful Productivity and Deep Work",
        description: "Host Rohit Sharma discusses strategies to avoid burnout and achieve more by doing less but better.",
        duration: "35 min",
        link: "#"
    },
    {
        title: "Innovation in Sustainable Tech",
        description: "A conversation with industry leaders on creating technology that benefits both people and the planet.",
        duration: "55 min",
        link: "#"
    },
];


function App() {
    return (
        <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-tight">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-10 bg-gray-900/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <LogoIcon />
                        <span className="text-2xl font-bold text-white">TalkSphere</span>
                    </div>
                    <a
                        href="#listen"
                        className="hidden md:inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Listen Now
                    </a>
                </div>
            </header>

            <main className="pt-24">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                        TalkSphere
                    </h1>
                    <p className="text-xl md:text-2xl text-orange-400 mb-8 font-light">
                        Conversations That Inspire Action
                    </p>
                    <a
                        href="#listen"
                        className="bg-orange-500 text-white font-bold py-4 px-10 text-lg rounded-lg hover:bg-orange-600 transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
                    >
                        Start Listening
                    </a>
                </section>

                {/* Recent Episodes Section */}
                <section id="episodes" className="py-20 bg-gray-800/50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">
                            Recent Episodes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {episodes.map((episode, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="p-6">
                                        <p className="text-sm text-orange-400 mb-2">{episode.duration}</p>
                                        <h3 className="text-xl font-bold text-white mb-3">{episode.title}</h3>
                                        <p className="text-gray-400 text-base mb-6">{episode.description}</p>
                                        <a href={episode.link} className="inline-flex items-center space-x-2 bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg hover:bg-orange-500 transition duration-300">
                                            <PlayIcon className="w-5 h-5" />
                                            <span>Play Episode</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Where to Listen Section */}
                <section id="listen" className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Where to Listen</h2>
                        <div className="flex justify-center items-center space-x-6 md:space-x-10">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110" aria-label="Listen on Spotify">
                                <SpotifyIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110" aria-label="Listen on Apple Podcasts">
                                <ApplePodcastsIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110" aria-label="Listen on Google Podcasts">
                                <GooglePodcastsIcon />
                            </a>
                        </div>
                    </div>
                </section>

                {/* About the Podcast Section */}
                <section className="py-20 bg-gray-800/50">
                    <div className="container mx-auto px-6 md:w-2/3 lg:w-1/2 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">About The Show</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            TalkSphere is hosted by Rohit Sharma, a tech enthusiast and lifelong learner. Each week, we dive into the latest trends in technology, explore strategies for personal and professional growth, and share inspiring stories from innovators around the world. Our mission is to provide you with actionable insights that spark curiosity and drive positive change.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <p className="text-gray-500">&copy; {new Date().getFullYear()} TalkSphere. All Rights Reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300" aria-label="Twitter">
                                <TwitterIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300" aria-label="LinkedIn">
                                <LinkedinIcon />
                            </a>
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
