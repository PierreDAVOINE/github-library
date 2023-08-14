import './styles.scss';
import logogh from '../../assets/images/logo-github.png';
import NavBar from '../NavBar';

function Header() {
  return (
    <header className="header-app">
      <img src={logogh} alt="Logo-GitHub" />
      <NavBar />
    </header>
  );
}

export default Header;
