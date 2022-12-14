import logo from '../logo.svg';
import '../assets/css/Header.css';
import HeaderMenuItem from './HeaderMenuItem';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} className="header__logo" alt="logo" height="37" width="181" />
                <p className="header__text">Blog name</p>
                <nav className='header__menu'>
                    <h2 className='visually-hidden'>for SEO</h2>
                    <ul className='header__menu-list'>
                        <HeaderMenuItem/>
                        <HeaderMenuItem/>
                        <HeaderMenuItem/>
                        <HeaderMenuItem/>
                        <HeaderMenuItem/>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;