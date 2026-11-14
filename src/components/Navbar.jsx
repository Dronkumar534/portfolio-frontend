import { nav } from "framer-motion/client";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="MyName">DRONKUMAR.T</h3>
      <ul className="navbar-list">
        <li>
          <a href="#battlefield">BATTLEFIELD</a>
        </li>
        <li>
          <a href="#Arsenal">ARSENAL</a>
        </li>
        <li>
          <a href="#Deploy">DEPLOY</a>
        </li>
      </ul>

    </nav>


  );
};

export default Navbar;