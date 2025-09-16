/**
 * A card component to display information about a single podcast episode.
 * @param {object} props - The properties for the component.
 * @param {string} props.title - The title of the episode.
 * @param {string} props.description - A short description of the episode.
 * @param {string} props.duration - The duration of the episode.
 * @param {string} props.link - The URL to play the episode.
 */
function EpisodeCard({ title, description, duration, link }) {
  return (
    // <article> wrapper for a single episode
    <article className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col h-full">
      <div className="flex-grow">
        {/*<h3> episode title*/}
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        {/*<p> short description (2–3 lines)*/}
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        {/*<span> for duration (e.g., “45 min”)*/}
        <span className="text-gray-500 text-sm font-medium">{duration}</span>
        {/*<button> or <a> for play/stream link*/}
        <a href={link} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105">Play Episode</a>
      </div>
    </article>
  );
}
export default EpisodeCard;