import { NavLink } from 'react-router-dom';
import './nav.css'
// import BumbuName from '../../assets/bumbu-name.png'
import Logo from '../../assets/bumbu-logo-artwork.png'
import Auth from '../utils/auth';
import { Link } from 'react-router-dom'


export default function Nav(){
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
                {/* <a href="/">
                <img src={BumbuName} id="bumbu-name" />
                </a> */}
                <a href="/">
                <img src={Logo} id="bumbu-logo"/>
                </a>
            </div>
            <div className="nav-btn">
            <Link className="btns" to="/dashboard"> View My Profile
              </Link> 
              <Link className="btns"to="/dashboard" onClick={logout}>
                Logout
              </Link>
            </div>
            </>
        ):(
            <>
            <div id="nav-logo-container">
                {/* <a href="/">
                <img src={BumbuName} id="bumbu-name" />
                </a> */}
                <a href="/">
                <img src={Logo} id="bumbu-logo"/>
                </a>
            </div>
            </>
        )}
        </nav>
        </>
    )
}