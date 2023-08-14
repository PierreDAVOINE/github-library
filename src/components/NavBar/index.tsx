import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';
import './styles.scss';

function NavBar() {
  const [activePage, setActivePage] = useState('Recherche');
  return (
    <nav className="nav-bar">
      <Menu>
        <NavLink
          to="/"
          className={activePage === 'Recherche' ? 'nav-link is-active' : 'nav-link'}
          onClick={() => setActivePage('Recherche')}
        >
          Recherche
        </NavLink>
        <NavLink
          to="/faq"
          className={activePage === 'FAQ' ? 'nav-link is-active' : 'nav-link'}
          onClick={() => setActivePage('FAQ')}
        >
          FAQ
        </NavLink>
      </Menu>
    </nav>
  );
}

export default NavBar;
