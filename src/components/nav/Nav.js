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
            <div>
            <Link className="btn btn-lg btn-primary m-2" to="/dashboard"> View My Profile
              </Link> 
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
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