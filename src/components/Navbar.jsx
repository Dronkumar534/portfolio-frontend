
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <a href="#battlefield" className="navbar-brand" onClick={closeMenu}>
        <h3 className="MyName">DRONKUMAR.T</h3>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-list ${menuOpen ? "show" : ""}`}>

        <li>
          <a href="#battlefield" onClick={closeMenu}>
            BATTLEFIELD
          </a>
        </li>

        <li>
          <a href="#Arsenal" onClick={closeMenu}>
            ARSENAL
          </a>
        </li>

        <li>
          <a href="#Deploy" onClick={closeMenu}>
            DEPLOY
          </a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;
