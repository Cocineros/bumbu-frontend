import Welcome from '../welcome/Welcome'
import SignupModal from '../signup-modal/SignupModal'
import Testimonial from '../testimonal/Testimonial'
import About from '../about/About'
import Footer from '../footer/Footer'
import LoginModal from '../login-modal/LoginModal'
import { Link } from 'react-router-dom'
import {
  DownCircleOutlined
} from '@ant-design/icons';
import './home.css'
// import LogoArtwork from '../../assets/logo-artwork.svg'
import { BackTop } from 'antd';
import Auth from '../utils/auth';
import Dashboard from '../dashboard/dashboard';


export default function Home() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          {/* <Dashboard/> */}
          {/* <Link className="btn btn-lg btn-primary m-2" to="/dashboard"> View My Profile
              </Link> 
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button> */}
          <div className="home-components">
            <Welcome />
            <DownCircleOutlined />
            <Testimonial />
            <Footer />
            <BackTop />
          </div>

        </>
      ) : (
        <>
          <div className="home-components">
            <Welcome />

            {/* <div id="buttons-container">
              {/* <SignupModal />
              <LoginModal /> */} 
            {/* </div> */}
            <DownCircleOutlined className='arrow' />
            <Testimonial />
            <Footer />
            <BackTop />
          </div>
        </>
      )}
    </div>
  );
};