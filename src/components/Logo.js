import logo from '../assets/img/logo.svg';
import '../assets/scss/Logo.scss';


function Logo() {
    return (
        <div className=' header__logo logo'>
            <img src={logo} className="logo-img" alt="logo" height="37" width="181" />
        </div>
    );
}

export default Logo;