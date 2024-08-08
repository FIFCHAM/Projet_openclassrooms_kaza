import DefaultPicture from "../assets/LOGO.png";
import "../styles/header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={DefaultPicture} alt="logo kasa" />
      </NavLink>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
