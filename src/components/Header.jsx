import '../style/layout.css';
import '../style/Header.css';
import logo from '../assets/logo_kasa.svg';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <img src={logo} alt='logo' className='banner_logo' />
      <nav>
        <ul className='header_ul'>
          <li>
            <NavLink to='/' className={'style_link'}>
              Accueil
            </NavLink>
          </li>

          <li className='li_about'>
            <NavLink to='/a-propos' className={'style_link'}>
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
