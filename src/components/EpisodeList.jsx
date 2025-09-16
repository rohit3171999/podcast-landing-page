import EpisodeCard from './EpisodeCard';

// Placeholder data for the episodes
const episodes = [
  {
    title: 'Episode 3: The Cybersecurity Landscape',
    description: 'Exploring the current threats and defensive strategies in the world of cybersecurity with special guest Alex Chen.',
    duration: '52 min',
    link: '#',
  },
  {
    title: 'Episode 2: Mastering React Hooks',
    description: 'A practical guide to understanding and implementing React Hooks in your projects for cleaner, more efficient code.',
    duration: '48 min',
    link: '#',
  },
  {
    title: 'Episode 1: The Future of AI',
    description: 'We dive deep into the latest advancements in artificial intelligence with guest expert Dr. Anya Sharma.',
    duration: '55 min',
    link: '#',
  },
];

function EpisodeList() {
  return (
    // <section> wrapper with an ID for anchor links
    <section id="episodes" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/*<h2> section title ("Recent Episodes")*/}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Recent Episodes</h2>
        {/*<div> for listing episode cards in a responsive grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <EpisodeCard key={index} title={episode.title} description={episode.description} duration={episode.duration} link={episode.link} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default EpisodeList;