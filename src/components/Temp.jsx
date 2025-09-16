/*
* Description:
Top section of the landing page introducing the podcast with branding and primary CTA.

Purpose:
Grab attention, highlight the tagline, and drive users to “Listen Now.”
* */
function HeroSection() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                {/* You can replace this with your actual logo */}
                <div className="mx-auto mb-6 h-24 w-24 flex items-center justify-center bg-indigo-500 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Your Weekly Tech Breakdown</h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">Tune in for expert interviews, the latest news, and deep dives into the code that shapes our world.</p>
                <a href="#episodes" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">Listen Now</a>
            </div>
        </header>
    );
}
export default HeroSection;