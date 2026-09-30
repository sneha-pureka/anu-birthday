import { Heart } from "lucide-react";

function Navbar() {
  const goTo = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Heart size={14} fill="currentColor" />
        <span>for her</span>
      </div>

      <div className="nav-links">
        <button onClick={() => goTo("people")}>people</button>
        <button onClick={() => goTo("memories")}>memories</button>
        <button onClick={() => goTo("timeline")}>timeline</button>
      </div>

      <div className="nav-number">XXII</div>
    </nav>
  );
}

export default Navbar;