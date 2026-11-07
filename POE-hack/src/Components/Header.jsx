import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="../asset/logo.png"></img>
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
