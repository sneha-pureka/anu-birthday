import { useState } from "react";
import "./OpeningScreen.css";

function OpeningScreen({ onEnter }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="opening">

      {/* Grain */}
      <div className="opening-grain"></div>

      {/* Decorative elements */}
      <div className="opening-star opening-star-1">✦</div>
      <div className="opening-star opening-star-2">✧</div>
      <div className="opening-flower">❀</div>

      {!opened ? (
        <div className="opening-intro">

          <span className="opening-label">
            a little something for you
          </span>

          <h1>
            Before you<br />
            <em>begin...</em>
          </h1>

          <div className="opening-line"></div>

          <p className="opening-subtitle">
            I have something I'd like you to read.
          </p>

          {/* Envelope */}
          <button
            className="envelope-wrapper"
            onClick={() => setOpened(true)}
          >
            <div className="envelope">

              <div className="envelope-paper">
                <span>♡</span>
              </div>

              <div className="envelope-back"></div>

              <div className="envelope-flap"></div>

              <div className="envelope-front-left"></div>
              <div className="envelope-front-right"></div>

              <div className="envelope-seal">
                ♡
              </div>

            </div>

            <span className="open-label">
              click to open
            </span>
          </button>

          <div className="opening-bottom">
            <span>01</span>
            <div></div>
            <span>for someone special</span>
          </div>

        </div>
      ) : (

        <div className="letter-scene">

          <div className="letter-paper-opening">

            <div className="letter-border"></div>

            <div className="letter-decoration">
              ✦ &nbsp; ♡ &nbsp; ✦
            </div>

            <span className="letter-label">
              A LETTER FOR YOU
            </span>

            <h2>
              Happy <em>Birthday</em>
            </h2>

            <span className="letter-script">
              to someone very special
            </span>

            <div className="letter-divider"></div>

            <div className="letter-message">

              <p>
                Today is a little more special because
                it is the day you came into this world.
              </p>

              <p>
                And while words can never really say
                everything, I hope this little corner
                of the internet reminds you of just
                how loved you are.
              </p>

              <p>
                Here's to another year of laughter,
                beautiful memories, unexpected
                adventures and all the happiness
                you deserve.
              </p>

            </div>

            <div className="letter-heart">
              ♡
            </div>

            <div className="letter-signature">
              made especially for you
            </div>

            <button
              className="enter-site"
              onClick={onEnter}
            >
              <span>enter your birthday story</span>
              <strong>→</strong>
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default OpeningScreen;