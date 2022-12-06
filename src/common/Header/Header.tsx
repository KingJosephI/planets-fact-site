import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  // const windowSize = window.innerWidth;
  const activeStyle = {
    mercure: {
      desktop: {
        color: '#fff',
        borderColor: '#419ebb',
      },
      tablet: { borderBottom: '4px solid #419ebb' },
    },
    venus: { color: '#fff', borderColor: '#eda249' },
    earth: { color: '#fff', borderColor: '#6f2ed6' },
    mars: { color: '#fff', borderColor: '#cd5120' },
    jupiter: { color: '#fff', borderColor: '#d83a34' },
    saturn: { color: '#fff', borderColor: '#d14c32' },
    uranus: { color: '#fff', borderColor: '#1ec2a4' },
    neptune: { color: '#fff', borderColor: '#2d68f0' },
  };
  return (
    <header className="header">
      <h1 className="header__logo">
        <NavLink to="/">The Planets</NavLink>
      </h1>

      <nav className="header__navigation">
        <button className="header__hamburger">Menu</button>
        <ul className="header__menu">
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive && window.innerWidth >= 1024
                  ? activeStyle.mercure.desktop
                  : isActive && window.innerWidth >= 700
                  ? activeStyle.mercure.tablet
                  : undefined
              }
              className="header__link"
              to="/mercury"
            >
              Mercury
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.venus : undefined
              }
              className="header__link"
              to="/venus"
            >
              Venus
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.earth : undefined
              }
              className="header__link"
              to="/earth"
            >
              Earth
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.mars : undefined
              }
              className="header__link"
              to="/mars"
            >
              Mars
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.jupiter : undefined
              }
              className="header__link"
              to="/jupiter"
            >
              Jupiter
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.saturn : undefined
              }
              className="header__link"
              to="/saturn"
            >
              Saturn
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.uranus : undefined
              }
              className="header__link"
              to="/uranus"
            >
              Uranus
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle.neptune : undefined
              }
              className="header__link"
              to="/neptune"
            >
              Neptune
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
