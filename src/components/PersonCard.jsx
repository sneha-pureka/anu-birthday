function PersonCard({ person, index, onClick }) {

  return (
    <button
      className={`person-card rotate-${index % 4}`}
      onClick={onClick}
    >

      <div className="card-image">

        <div className="card-tape"></div>

        <img
          src={person.image}
          alt={person.name}
        />

      </div>

      <div className="card-details">

        <span className="card-role">
          {person.role}
        </span>

        <h3>
          {person.name}
        </h3>

        <span className="read-note">
          read their little note →
        </span>

      </div>

    </button>
  );
}

export default PersonCard;