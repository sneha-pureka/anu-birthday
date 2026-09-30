import { useState } from "react";
import PersonCard from "./PersonCard";
import { family, friends } from "../data/people";

function People() {

  const [selected, setSelected] = useState(null);

  return (
    <section
      className="people section"
      id="people"
    >

      <div className="section-top">

        <span className="section-number">
          02
        </span>

        <span className="section-name">
          the people
        </span>

      </div>

      <div className="people-intro">

        <div>

          <span className="script">
            the ones who know her best
          </span>

          <h2>
            The people
            <br />
            who <em>love</em> her.
          </h2>

        </div>

        {/* <p> */}
          {/* Ten people.
          <br />
          Ten little pieces
          <br />
          of her story. */}
          <p>
  Twelve people.
  <br />
  Twelve little pieces
  <br />
  of her story.
</p>
        {/* </p> */}

      </div>


      <div className="category">

        <div className="category-heading">
          <span>01</span>
          <h3>home</h3>
          <div></div>
          <span>family ♡</span>
        </div>

        <div className="people-grid">

          {family.map((person, index) => (
            <PersonCard
              key={person.id}
              person={person}
              index={index}
              onClick={() => setSelected(person)}
            />
          ))}

        </div>

      </div>


      <div className="category">

        <div className="category-heading">
          <span>02</span>
          <h3>your people</h3>
          <div></div>
          <span>friends ♡</span>
        </div>

        <div className="people-grid">

          {friends.map((person, index) => (
            <PersonCard
              key={person.id}
              person={person}
              index={index}
              onClick={() => setSelected(person)}
            />
          ))}

        </div>

      </div>


      {selected && (

        <div
          className="letter-backdrop"
          onClick={() => setSelected(null)}
        >

          <div
            className="letter-paper"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="letter-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="letter-decoration">
              ✦
            </div>

            <span className="letter-small">
              a little note from
            </span>

            <h2>
              {selected.name}
            </h2>

            <span className="letter-role">
              {selected.role}
            </span>

            <div className="letter-divider"></div>

            <p className="letter-content">
              {selected.note}
            </p>

            <div className="letter-heart">
              ♡
            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default People;