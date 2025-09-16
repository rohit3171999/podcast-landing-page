import HeroSection from "./components/HeroSection.jsx";
import EpisodeList from "./components/EpisodeList.jsx";
import EpisodeCard from "./components/EpisodeCard.jsx";
import WhereToListen from "./components/WhereToListen.jsx";
import AboutPodcast from "./components/AboutPodcast.jsx";


function App() {
    return (
        <>
        <HeroSection/>
        <EpisodeList/>
    <EpisodeCard/>
            <WhereToListen/>
            <AboutPodcast/>
        </>

    );
}

export default App;
