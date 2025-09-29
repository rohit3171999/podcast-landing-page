/**
 * create episodes list containing image of the episode, name of episode, description of episode(which episode it is ) and some information on episode
 */

// Placeholder data for the episodes, similar to EpisodeList but could be different


export default function RecentEpisodesList() {
  return (
    <div className="bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Latest Episodes</h2>
        <div className="space-y-8">
              <div className="md:w-1/3">
                <img
                  className="w-full h-48 md:h-full object-cover"
                  src={imageURL}
                  alt={episodeID}
                />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold text-indigo-400">{episodeID}</span>
                  <h3 className="mt-1 text-2xl font-bold text-white">{episodeTitle}</h3>
                  <p className="mt-2 text-gray-400 line-clamp-2">{episodeDescription}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-gray-500 font-medium">{episodeDuration}</span>
                  <a href={episodeLink} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105">
                    Play
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}