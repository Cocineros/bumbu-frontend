import './testimonial.css'
import { Avatar, Image, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
// const { Meta } = Card;


export default function Testimonial() {
    return (
        <>
            <div className="section-title">
                <h1>user stories</h1>
            </div>
            <div className="container">
                {/* <div className="left-column"> */}
                <div className="card">
                    <img src="https://avatars.githubusercontent.com/u/90944910?s=96&v=4"></img>

                    <h2>"I wanted an app that kept all my recipes for me so I can easily share them with friends and family."</h2>
                </div>
                <div className="card">
                    <img src="https://avatars.githubusercontent.com/u/73203546?v=4"></img>
                    <h2>"I wanted something that would organize my recipes."</h2>
                </div>
                <div className="card">
                    <img src="https://avatars.githubusercontent.com/u/56140478?s=96&v=4"></img>
                    <h2>"I wanted all my recipes to look nice with minimal effort."</h2>
                </div>
                <div className="card">
                    <img src="https://avatars.githubusercontent.com/u/88861538?s=60&v=4"></img>
                    <h2>"I wanted to be able to save all my vegan recipes since good ones are hard to come by."</h2>
                </div>
                <div className="card">
                    <img src="https://avatars.githubusercontent.com/u/89612152?s=80&v=4"></img>
                    <h2 id="test2text">"I wanted to have access to all my recipes, so I can use them whether I am traveling or at home."</h2>
                </div>
            </div>
        </>
    );
}
