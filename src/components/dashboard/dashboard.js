import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
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
            <a href="/"><h3><LoginOutlined className="btn" />&nbsp; Logout</h3></a>
            </div>
            </Sider>
            <div class="vl"></div>
            <Content>
            <div className="header"><h1>My Recipes</h1></div>
            </Content>
            </Layout>
        </div>
            <div>
            <a href="/recipe">click here for recipe card </a>
            </div>
        </>
    )
}