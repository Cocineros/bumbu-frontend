import './recipe.css'
import SampleImage from '../../assets/sample-recipe-image.JPG'
import { EditOutlined, DeleteOutlined, ShareAltOutlined, RollbackOutlined } from '@ant-design/icons';
import { useState } from 'react'

export default function Recipe() {
    const [ isActive, setActive ] = useState("false");
    const ToggleClass = () => {
        setActive (!isActive);
    }

    return (
        <>
        <div id="page"> 

            <div id="back-function">
                <a href="/dashboard" id="back-btn">
                <RollbackOutlined />
                </a>
                <p id="back-text">back to all recipes</p>
            </div>
            <div id="recipe-page">
            <div id="menu-bar">
                    <EditOutlined />
                    <DeleteOutlined />
                    <ShareAltOutlined />
                </div>
                <div id="dish-name-container">
                    <h3 id="dish-name">cream puffs</h3>
                </div>
                <div id="image-container">
                    <img src={SampleImage} id="sample-image" alt="sample-recipe-image" />
                </div>
                <div id="ing-dir-container">
                <div id="ingredients-container">
                    <div id="ingredients-text">

                    <h3> INGREDIENTS </h3>
                    <ul>
                        <li className={isActive? "ingredient" : "strikethrough"} onClick={ToggleClass}>butter</li>
                        {/* <li className="ingredient"> eggs </li>
                        <li className="ingredient"> milk </li>
                        <li className="ingredient"> flour </li>
                        <li className="ingredient"> sugar </li> */}
                        <li className={isActive? "ingredient" : "strikethrough"} onClick={ToggleClass}>eggs</li>
                        <li className={isActive? "ingredient" : "strikethrough"} onClick={ToggleClass}>milk</li>
                        <li className={isActive? "ingredient" : "strikethrough"} onClick={ToggleClass}>flour</li>
                        <li className={isActive? "ingredient" : "strikethrough"} onClick={ToggleClass}>sugar</li>
                    
                    </ul>
                    </div>
                </div>
                <div id="directions-container">
                    <div id="directions-text">

                    <h3> DIRECTIONS </h3>
                    <ol>
                        <li>melt the butter</li>
                        <li>add the milk, sugar, flour, and eggs</li>
                        <li>place in a baking dish and bake for 30 minutes</li>
                    </ol>
                    </div>
                </div>
                </div>

                
            </div>
        </div>
        </>

    )
}

