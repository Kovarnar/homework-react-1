import logo from '../logo.svg';
import '../assets/css/Header.css';
import HeaderMenuItem from './HeaderMenuItem';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} className="header__logo" alt="logo" height="37" width="181" />
                <h2 className="header__title title">Blog name</h2>
                
                <nav className='header__menu'>
                    <h1 className='visually-hidden'>for SEO</h1>
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