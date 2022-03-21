import './nav.css'
import { useState } from "react";
import Logo from '../../assets/bumbu-logo-artwork.png'
import { FiMenu, FiX } from 'react-icons/fi';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom'
import SignupModal from '../signup-modal/SignupModal';
import LoginModal from '../login-modal/LoginModal';


export default function Nav(){
    const [isModalVisitble, setIsModalVisible] = useState(false);
  
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return(
        <>
        <nav>
        {Auth.loggedIn() ? (
            <>
            <div id="nav-logo-container">
                <a href="/">
                <img src={Logo} id="bumbu-logo"/>
                </a>
            </div>
            <div className="nav-bar">
            <Link to="/" className="nav-logo"></Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link" onClick={closeMenu}>
                        View My Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu} onClick={logout} >
                        Logout
                    </Link>
                </li>
            </ul>
            </div>
            </>
        ):(
            <>
            <div id="nav-logo-container">
                <a href="/">
                <img src={Logo} id="bumbu-logo"/>
                </a>
            </div>
            <div className="nav-bar">
            <Link to="/" className="nav-logo"></Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-btn">
                    <SignupModal className="nav-link"/>
                </li>
                <li className="nav-btn">
                    <LoginModal className="nav-link"/>
                </li>
            </ul>
            </div>
            </>
        )}
        </nav>
        </>
    )
}
