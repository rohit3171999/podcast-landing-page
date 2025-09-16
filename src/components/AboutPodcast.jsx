/**
 * Description:
 * Short description of the podcast and host(s).
 *
 * Purpose:
 * Give context and credibility to the show.
 */
export default function AboutPodcast() {
  return (
    // <section> wrapper with a slightly different background to break up the page
    <section className="bg-gray-800 py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* (Optional) <img> host picture */}
          <div className="md:col-span-2">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.Ljsw_phmu3-lLtFUxuZUNwHaHa?pid=Api&P=0&h=180"
              alt="A person with headphones speaking into a professional microphone in a recording studio"
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          {/* Text content */}
          <div className="md:col-span-3">
            {/*<h2> section title ("About the Podcast")*/}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About the Podcast</h2>
            {/*<p> podcast description*/}
            <p className="text-lg text-gray-300 mb-4"><strong>Your Weekly Tech Breakdown</strong> is your go-to source for making sense of the complex world of technology. Each week, we cut through the noise to bring you insightful conversations with industry leaders, demystify complex coding concepts, and cover the breaking news that matters.</p>
            <p className="text-lg text-gray-300">Hosted by a veteran software engineer, our mission is to make tech accessible and engaging for everyone, from seasoned developers to curious beginners. Join us as we explore the future, one episode at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
