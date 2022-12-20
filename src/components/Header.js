// import logo from '../logo.svg';
import '../assets/scss/Header.scss';
import HeaderMenuItem from './HeaderMenuItem';
import Title from './Title';
import Logo from './Logo';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo />
                {/* <img src={logo} className="header__logo" alt="logo" height="37" width="181" /> */}
                <Title titleH2="Blog name"></Title>
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