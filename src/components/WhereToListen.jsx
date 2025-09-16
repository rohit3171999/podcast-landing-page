/**
 * Description:
 * Section listing streaming platforms where the podcast is available.
 *
 * Purpose:
 * Encourage users to choose their preferred streaming platform.
 */

// Placeholder data for listening platforms
const platforms = [
  {
    name: 'Spotify',
    link: '#',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500">
        <title>Spotify</title>
        <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.923 17.453c-.202.32-.58.426-.9.224-2.63-1.62-5.92-1.98-9.84-.98-.386.107-.78-.11-.885-.495-.107-.386.11-.78.495-.885 4.243-1.067 7.84-0.667 10.713 1.115.32.203.426.58.223.9zM18.8 14.11c-.25.398-.716.53-1.115.28-2.98-1.82-7.16-2.34-10.97-1.28-.46.128-.93-.14-1.058-.598-.128-.46.14-.93.598-1.058 4.24-1.16 8.77-.57 12.05 1.48.398.25.53.716.28 1.115zm.12-3.403c-3.52-2.12-9.36-2.34-12.72-1.28-.552.16-1.11-.14-1.27-.69-.16-.55.14-1.11.69-1.27 3.81-1.16 10.21-.9 14.28 1.52.48.28.64.87.36 1.35-.28.48-.87.64-1.35.36z"/>
      </svg>
    ),
  },
  {
    name: 'Apple Podcasts',
    link: 'https://www.apple.com/in/',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://example.com/custom" className="h-12 w-12 text-purple-500">
        <title>Apple Podcasts</title>
        <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.64 5.69c.24-.01.48.02.71.05.03 0 .06.01.08.01.56.08 1.12.21 1.67.34.28.07.55.13.83.2.3.08.6.16.9.25.3.09.6.19.9.29.25.08.5.17.74.26.01 0 .02.01.03.01.24.09.48.19.71.29.28.12.55.25.82.39.33.17.65.36.96.56.64.4 1.25.85 1.81 1.36.22.2.42.41.62.63.01.01.01.02.01.02-1.03 1.2-1.63 2.58-1.79 4.04-.01.09-.02.18-.03.27-.01.1-.02.19-.03.29-.01.09-.01.18-.02.27 0 .02-.01.03-.01.05-.03.27-.06.54-.08.81-.02.2-.02.4-.02.6.02 1.07.25 2.12.69 3.09-.1.01-.19.02-.29.02-.3 0-.6-.03-.9-.09-.3-.06-.6-.15-.89-.25-.29-.1-.58-.22-.86-.34-.28-.12-.56-.25-.83-.38-.27-.13-.54-.27-.8-.41-.27-.14-.53-.29-.79-.44-.26-.15-.51-.31-.76-.48-.25-.17-.49-.34-.72-.52-.11-.09-.22-.18-.33-.27-.11-.09-.22-.18-.33-.27-.22-.18-.44-.37-.65-.56-.21-.19-.42-.39-.62-.59-.2-.2-.4-.41-.59-.62-.19-.21-.38-.43-.56-.65-.18-.22-.35-.45-.51-.68-.16-.23-.32-.47-.46-.71-.14-.24-.28-.49-.4-.74-.12-.25-.24-.51-.34-.77-.1-.26-.19-.52-.27-.79-.08-.27-.15-.54-.21-.81-.06-.27-.11-.55-.15-.83-.04-.28-.07-.56-.09-.84-.02-.28-.03-.56-.03-.84.01-1.27.24-2.51.69-3.66.2-.5.46-.98.78-1.44.32-.46.7-.89 1.12-1.29.43-.4.9-.77 1.41-1.1.25-.16.51-.32.78-.46.27-.14.54-.28.82-.41.28-.13.56-.25.85-.37.29-.12.58-.23.88-.33.15-.05.3-.1.45-.15.15-.05.3-.09.45-.13.15-.04.3-.08.45-.12.15-.04.3-.07.45-.1.1-.02.19-.04.29-.06.1-.02.19-.04.29-.05.1-.01.19-.02.29-.03.1-.01.19-.02.29-.02z"/>
      </svg>
    ),
  },
  {
    name: 'Google Podcasts',
    link: '#',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500">
        <title>Google Podcasts</title>
        <path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8z"/>
        <path fill="currentColor" d="M12 6a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4z"/>
        <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z"/>
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    link: '#',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400">
        <title>Amazon Music</title>
        <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 1 1 0 19.2 9.6 9.6 0 0 1 0-19.2zm-2.4 4.8a.72.72 0 0 0-.72.72v8.16c0 .398.322.72.72.72h1.44a.72.72 0 0 0 .72-.72V7.92a.72.72 0 0 0-.72-.72H9.6zm4.8 0a.72.72 0 0 0-.72.72v8.16c0 .398.322.72.72.72h1.44a.72.72 0 0 0 .72-.72V7.92a.72.72 0 0 0-.72-.72h-1.44z"/>
      </svg>
    ),
  },
];

export default function WhereToListen() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Where to Listen</h2>
        {/* Grid for platform icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700"
            >
              {platform.icon}
              <span className="text-white font-semibold mt-4 text-center">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}