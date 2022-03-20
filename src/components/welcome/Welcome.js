import LogoArtwork from '../../assets/bumbu-log-tgt.png'
import './welcome.css'
import OldRecipe from '../../assets/recipe-old.png'


export default function Welcome() {

    return (
        <>
            <div id="welcome-container">
                <div id="home-logo-container">
                    <img id="home-logo" src={LogoArtwork} alt="bumbu homepage logo" />
                </div>
                <div id="welcome-text-container">
                    <div className='welcome-text'>
                    <p><strong>/boom • boo/</strong></p>
                    <p>the Indonesian word for spice</p>
                    </div>
                    <div className='text'>
                    <p>Write and save your favorite recipes right here and access them from anywhere in the world!</p>
                    </div>
                </div>
                <div id="image-margins">
                <img src={OldRecipe} id="old-recipe-left" />
                <img src={OldRecipe} id="old-recipe-right"/>
                </div>
            </div>
        </>
    )
}
