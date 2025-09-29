import HeroSection from "./components/HeroSection.jsx";
import EpisodeList from "./components/EpisodeList.jsx";
import EpisodeCard from "./components/EpisodeCard.jsx";
import WhereToListen from "./components/WhereToListen.jsx";
import AboutPodcast from "./components/AboutPodcast.jsx";
import Footer from "./components/Footer.jsx";
import {episodes} from "./TotalEpisodesData.js";
import RecentEpisodesList from "./components/RecentEpisodesList.jsx";


function App() {
    return (
        <>
        <HeroSection/>
        <EpisodeList/>
    <EpisodeCard/>
            <WhereToListen/>
            <AboutPodcast/>
            <Footer/>
            <div className="grid grid-cols-4 gap-4">
                {episodes.map((episode) => (
                    <
                    RecentEpisodesList
                        key={episode.episodeID}
                        episodeID={episode.episodeID}
                        episodeLink={episode.episodeLink}
                        episodeDescription={episode.episodeDescription}
                        episodeTitle={episode.episodeTitle}
                        episodeDuration={episode.episodeDuration}
                        imageURL={episode.imageURL}

                    />
                ))}
            </div>
        </>

    );
}

export default App;
