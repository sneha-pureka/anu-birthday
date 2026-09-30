const memories = [
  {
    image: "/photos/sneha/1.jpg",
    caption: "one of those days ♡"
  },
  {
    image: "/photos/ridhima/1.jpg",
    caption: "the people who make it better"
  },
  {
    image: "/photos/school1/1.jpg",
    caption: "the school days"
  },
  {
    image: "/photos/mom/2.jpg",
    caption: "home"
  },
  {
    image: "/photos/boyfriend/2.jpg",
    caption: "you two"
  },
  {
    image: "/photos/dad/2.jpg",
    caption: "forever a daddy's girl"
  },
  {
    image: "/photos/sister/1.jpg",
    caption: "partners in crime"
  },
  {
    image: "/photos/nani/1.jpg",
    caption: "the softest love"
  },
  {
    image: "/photos/masi/1.jpg",
    caption: "family ♡"
  },
  {
    image: "/photos/school2/1.jpg",
    caption: "still making memories"
  }
];

function Gallery() {

  return (
    <section
      className="gallery section"
      id="memories"
    >

      <div className="section-top">

        <span className="section-number">
          04
        </span>

        <span className="section-name">
          little memories
        </span>

      </div>


      <div className="gallery-heading">

        <div>

          <span className="script">
            because one photo was never enough
          </span>

          <h2>
            Moments worth
            <br />
            <em>keeping.</em>
          </h2>

        </div>

        <p>
          a little archive
          <br />
          of happy things.
        </p>

      </div>


      <div className="masonry">

        {memories.map((memory, index) => (

          <div
            className={`memory memory-${index % 5}`}
            key={index}
          >

            <div className="memory-image">

              <img
                src={memory.image}
                alt={memory.caption}
              />

            </div>

            <span>
              {memory.caption}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;