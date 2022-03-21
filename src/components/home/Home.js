import Welcome from '../welcome/Welcome'
import SignupModal from '../signup-modal/SignupModal'
import Testimonial from '../testimonal/Testimonial'
import Footer from '../footer/Footer'
import LoginModal from '../login-modal/LoginModal'
import { Link } from 'react-router-dom'
import {
  DownCircleOutlined
} from '@ant-design/icons';
import './home.css'
import { BackTop } from 'antd';
import Auth from '../utils/auth';



export default function Home() {
  

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
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