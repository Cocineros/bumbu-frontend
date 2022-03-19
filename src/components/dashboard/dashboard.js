import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Auth from '../utils/auth';
import AddRecipeModal from '../addRecipe-modal/AddRecipeModal'
import {
    PlusSquareFilled,
    LoginOutlined
  } from '@ant-design/icons';
import './dashboard.css'

const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <>
        <div className="dash-container">
            <Layout className ="layout">
            <Sider className="sidebar">
            <Space direction="vertical">
                <Search className="search" placeholder="search for recipe" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
            <div class="dash-nav">
            <a href="/addRecipe"><h3><PlusSquareFilled className="btn" />&nbsp; Add a Recipe</h3></a>
            <br/>
            <button onClick={logout} style= {{ cursor: "pointer" }}><h3><LoginOutlined className="btn" />&nbsp; Logout</h3></button>
            </div>
            </Sider>
            <div class="vl"></div>
            <Content>
            <div className="header"><h1>My Recipes</h1></div>
            </Content>
            </Layout>
            <AddRecipeModal/>
        </div>
            <div>
            <a href="/recipe">click here for recipe card </a>
            </div>
        </>
    )
}