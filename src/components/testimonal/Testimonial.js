import './testimonial.css'
import { Avatar, Image, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
const { Meta } = Card;


export default function Testimonial() {
    return (
        <>
            <div className="section-title">
                <h1>user stories</h1>
            </div>
            <div className="parent-container">
                <div className="left-column">
                    <div className="test-containers" id="test1-container">
                        <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                        <div className="test-text">
                        <h2>"I wanted an app that kept all of my recipes for me so that I can easily share them with friends and family."</h2>
                        </div>
                    </div>
                    <div className="test-containers" id="test2-container">
                        <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                        <div className="test-text">
                        <h2>"I wanted to have access to all my recipes, so I can use them whether I am traveling or at home."</h2>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="test-containers" id="test3-container">
                            <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                            <div className="test-text">
                            <h2>"I wanted my recipes to look nice with minimal effort."</h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
