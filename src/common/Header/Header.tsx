import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__illustration">The Planets</h1>

      <nav className="header__navigation">
        <button className="header__hamburger">Menu</button>
        <ul className="header__menu">
          <li>
            <NavLink className="header__link" to="/mercury">
              Mercury
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/venus">
              Venus
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/earth">
              Earth
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/mars">
              Mars
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/jupiter">
              Jupiter
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/saturn">
              Saturn
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/uranus">
              Uranus
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/neptune">
              Neptune
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
