import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.png";

function Header({ setShowIntro }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logoWhite}></img>
        </Link>
        <div className="nav-links">
          <Link to="/campus" className="nav-link">
            Campus
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
