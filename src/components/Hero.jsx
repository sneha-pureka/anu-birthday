import { ArrowDown } from "lucide-react";

function Hero() {

  const begin = () => {
    document
      .getElementById("intro")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      <div className="hero-decoration hero-star">
        ✦
      </div>

      <div className="hero-decoration hero-flower">
        ❀
      </div>

      <p className="eyebrow">
        a little birthday story
      </p>

      <h1>
        22
        <span>looks good</span>
        on you.
      </h1>

      <p className="hero-description">
        a tiny collection of memories,
        <br />
        people & little pieces of love.
      </p>

      <div className="hero-polaroid">

        <div className="tape"></div>

        <img
          src="/photos/hero.jpg"
          alt="Birthday girl"
        />

        <div className="polaroid-caption">
          <span>♡</span>
          the birthday girl
        </div>

      </div>

      <button
        className="begin-button"
        onClick={begin}
      >
        <span>begin the little journey</span>
        <ArrowDown size={15} />
      </button>

      <div className="hero-bottom">
        scroll slowly · there's a lot of love here
      </div>

    </section>
  );
}

export default Hero;