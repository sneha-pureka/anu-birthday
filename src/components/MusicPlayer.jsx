import { useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";

function MusicPlayer() {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();
      setPlaying(false);

    } else {

      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }

    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
      />

      <button
        className={`music-player ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
      >

        <div className="music-icon">

          {playing ? (
            <Pause size={13} />
          ) : (
            <Play size={13} />
          )}

        </div>

        <div className="music-info">

          <span>
            {playing ? "now playing" : "our soundtrack"}
          </span>

          <strong>
            a little song for you ♡
          </strong>

        </div>

        <Music size={15} />

      </button>
    </>
  );
}

export default MusicPlayer;