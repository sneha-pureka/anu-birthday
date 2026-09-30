import { useState } from "react";
import "./ClosingScreen.css";

function ClosingScreen() {
  const [candlesOut, setCandlesOut] = useState(false);

  const handleWish = () => {
    setCandlesOut(true);
  };

  return (
    <section className="closing-screen">

      {/* Decorative stars */}
      <div className="closing-star star-one">✦</div>
      <div className="closing-star star-two">✧</div>
      <div className="closing-star star-three">✦</div>

      {!candlesOut ? (
        <div className="cake-stage">

          <span className="closing-label">
            one last little thing
          </span>

          <h2>
            Make a <em>wish.</em>
          </h2>

          <p className="closing-subtitle">
            Close your eyes, make a wish,<br />
            and blow out the candles.
          </p>

          {/* CAKE */}
          <div className="cake-wrapper">

            {/* Candle 1 */}
            <div className="candle candle-one">
              <div className="flame">✦</div>
              <div className="candle-body"></div>
            </div>

            {/* Candle 2 */}
            <div className="candle candle-two">
              <div className="flame">✦</div>
              <div className="candle-body"></div>
            </div>

            {/* Candle 3 */}
            <div className="candle candle-three">
              <div className="flame">✦</div>
              <div className="candle-body"></div>
            </div>

            {/* Cake */}
            <div className="cake">

              <div className="cake-top">
                <div className="icing"></div>
              </div>

              <div className="cake-body">

                <div className="cake-drip drip-one"></div>
                <div className="cake-drip drip-two"></div>
                <div className="cake-drip drip-three"></div>

                <span>♡</span>

              </div>

              <div className="cake-base"></div>

            </div>

          </div>

          <button
            className="wish-button"
            onClick={handleWish}
          >
            <span>I made my wish</span>
            <strong>→</strong>
          </button>

        </div>

      ) : (

        <div className="birthday-finale">

          {/* Confetti */}
          <div className="confetti">
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>✦</span>
          </div>

          <span className="closing-label">
            and just like that...
          </span>

          <h1>
            Happy <em>Birthday</em>
          </h1>

          <div className="final-divider"></div>

          <p>
            May this new chapter be filled with
            <br />
            beautiful moments, silly laughter,
            <br />
            unforgettable memories
            <br />
            and all the happiness you deserve.
          </p>

          <div className="final-heart">
            ♡
          </div>

          <span className="final-script">
            here's to another beautiful year
          </span>

          <div className="tiny-cake">
            🎂
          </div>

          <div className="closing-end">
            <span>made with love</span>
            <div></div>
            <span>for you ♡</span>
          </div>

        </div>

      )}

    </section>
  );
}

export default ClosingScreen;