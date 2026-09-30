const timeline = [
  {
    number: "01",
    year: "once upon a time",
    title: "the beginning",
    text: "Before all the memories, there was simply you — little, curious and becoming."
  },
  {
    number: "02",
    year: "school days",
    title: "where it all started",
    text: "Friends, inside jokes, terrible pictures and memories that somehow stayed."
  },
  {
    number: "03",
    year: "growing up",
    title: "new chapters",
    text: "New people, new places, new versions of yourself and countless little moments."
  },
  {
    number: "04",
    year: "today",
    title: "here you are",
    text: "Twenty-two, surrounded by people who love you and memories worth keeping."
  }
];

function Timeline() {

  return (
    <section
      className="timeline section"
      id="timeline"
    >

      <div className="section-top">

        <span className="section-number">
          05
        </span>

        <span className="section-name">
          your little timeline
        </span>

      </div>


      <div className="timeline-heading">

        <span className="script">
          look how far you've come
        </span>

        <h2>
          A little
          <br />
          <em>timeline.</em>
        </h2>

      </div>


      <div className="timeline-list">

        {timeline.map((item) => (

          <div
            className="timeline-item"
            key={item.number}
          >

            <span className="timeline-number">
              {item.number}
            </span>

            <span className="timeline-year">
              {item.year}
            </span>

            <div className="timeline-line"></div>

            <div className="timeline-text">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;