import { NavLink } from 'react-router-dom';
import './nav.css'
// import BumbuName from '../../assets/bumbu-name.png'
import Logo from '../../assets/bumbu-logo-artwork.png'

export default function Nav(){
    return(
        <>
        <nav>
            <div id="nav-logo-container">
                {/* <a href="/">
                <img src={BumbuName} id="bumbu-name" />
                </a> */}
                <a href="/">
                <img src={Logo} id="bumbu-logo"/>
                </a>
            </div>
        </nav>
        </>
    )
}