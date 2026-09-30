import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import People from "./components/People";
import BoyfriendSection from "./components/BoyfriendSection";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import FinalLetter from "./components/FinalLetter";
import MusicPlayer from "./components/MusicPlayer";
import { useState } from "react";
import OpeningScreen from "./OpeningScreen";
import ClosingScreen from "./ClosingScreen";

import "./App.css";

function App() {
   const [showOpening, setShowOpening] = useState(true);

  if (showOpening) {
    return (
      <OpeningScreen
        onEnter={() => setShowOpening(false)}
      />
    );
  }

  return (
    <div className="site">

      <div className="grain"></div>

      <Navbar />

      <main>
        <Hero />

        <Intro />

        <People />

        <BoyfriendSection />

        <Gallery />

        <Timeline />

        <FinalLetter />
        <ClosingScreen />
      </main>

      <MusicPlayer />
       
      <footer>
        made with love ♡
      </footer>
     
    </div>
  );
}

export default App;