import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div>
        <img src="" alt="" />
      </div>

      <nav>
        <button></button>
        <ul>
          <li>
            <NavLink to="/mercury">Mercury</NavLink>
          </li>
          <li>
            <NavLink to="/venus">Venus</NavLink>
          </li>
          <li>
            <NavLink to="/earth">Earth</NavLink>
          </li>
          <li>
            <NavLink to="/mars">Mars</NavLink>
          </li>
          <li>
            <NavLink to="/jupiter">Jupiter</NavLink>
          </li>
          <li>
            <NavLink to="/saturn">Saturn</NavLink>
          </li>
          <li>
            <NavLink to="/uranus">Uranus</NavLink>
          </li>
          <li>
            <NavLink to="/neptune">Neptune</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
