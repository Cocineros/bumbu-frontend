import LogoArtwork from '../../assets/bumbu-log-tgt.png'
import './welcome.css'


export default function Welcome() {

    return (
        <>
            <div id="welcome-container">
                <div id="home-logo-container">
                    <img id="home-logo" src={LogoArtwork} alt="bumbu homepage logo" />
                </div>
                <div id="welcome-text-container">
                    <div id="phonetics-container"> 
                    <p className="welcome-text" id="text-line-one">/boom • boo/</p>
                    <p className="welcome-text" id="text-line-two">the Indonesian word for spice</p>
                    </div>
                    <p className="welcome-text">Write and save your favorite recipes right here </p>
                    <p className="welcome-text">and access them from anywhere in the world!</p>
                </div>

                <div id="recipe-img">
                    recipe image
                </div>
                {/* <div id="recipe-img2">
                    recipe image
                </div> */}
            </div>
        </>
    )
}
