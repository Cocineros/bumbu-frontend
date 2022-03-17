import Welcome from '../welcome/Welcome'
import SignupModal from '../signup-modal/SignupModal'
import Card from '../card/Card'
import Testimonial from '../testimonal/Testimonial'
import About from '../about/About'
import Footer from '../footer/Footer'
import LoginModal from '../login-modal/LoginModal'
import './home.css'
// import LogoArtwork from '../../assets/logo-artwork.svg'
import { BackTop } from 'antd';




export default function Home() {
    return (
        <>
        <div class="home-components">
        <Welcome />
        
        <div id="buttons-container">
        <div id='thank-you'>
                <p>thank you for supporting Bumbu and our vision

                </p>

            </div>
        <SignupModal/>
        <LoginModal />
        </div>
        <About/>
        <Card/>
        <Testimonial/>
        <Footer/> 
        <BackTop />
        {/* <strong className="site-back-top-basic">  </strong> */}
        </div>
        </>
    )
}
