import './footer.css'
import { GithubOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className="footer-container">
             <h3>Bumbu © 2022</h3>
        <a href= "https://github.com/Cocineros"> 
            <GithubOutlined /> </a>
        </div>
    )
}