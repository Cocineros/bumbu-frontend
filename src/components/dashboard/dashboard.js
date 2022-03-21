import 'antd/dist/antd.css';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_PROFILE } from '../utils/mutations';
import { Input, Space } from 'antd';
import { AudioOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Card from '../card/Card'
import Auth from '../utils/auth';
import AddRecipeModal from '../addRecipe-modal/AddRecipeModal'
import {
    PlusSquareFilled,
    LoginOutlined
} from '@ant-design/icons';
import './dashboard.css'
import MyRecipes from '../../assets/my-recipes.png'

import TextField from "@mui/material/TextField";
import RecipeList from '../recipeList/RecipeList'
import { BackTop } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
    const [removeProfile] = useMutation(REMOVE_PROFILE);
    const { loading, data } = useQuery(QUERY_ME);
    const [showModal, setShowModal] = useState(false);
    const [inputText, setInputText] = useState("");

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(data, "data")

    const { Search } = Input;


    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = (value) => {
        console.log(value)
    }

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const deleteProfile = async () => {
        await removeProfile()
        Auth.logout()
    }

    const profileName = data.me.firstName
    console.log(profileName)


    const renderModal = () => {
        if (showModal) {
            return (
                <div className='deletepro-container'>
                    <h4 className='deletepro-header'>We'd hate to see you go :( Are you sure?</h4>
                    <button className='deletepro-btn-yes deletepro-btn' style={{ cursor: "pointer" }} onClick={() => deleteProfile()}>Yes</button>
                    <button className="deletepro-btn" style={{ cursor: "pointer" }} onClick={() => setShowModal(false)}>No</button>
                </div>
            )
        } else {
            return;
        }
    }

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <>
            <div className="dash-container">
                <Layout className="layout">
                    {/* <Sider className="sidebar"> */}

                    {/* </Sider> */}
                    {/* <div className="vl"></div> */}
                    <Content>
                        <div className='greeting'>
                            <p>Welcome, {profileName} !</p>
                        </div>
                        <div className="header">
                            <img src={MyRecipes} id="my-recipes-header" />
                        </div>
                        <div className="dash-nav">
                            <Space direction="vertical">
                                <TextField className="search-bar dash-nav search-bar"
                                    id="outlined-basic"
                                    onChange={inputHandler}
                                    variant="outlined"
                                    fullWidth
                                    label="Search my recipes" />
                                <AddRecipeModal />
                            </Space>
                        </div>
                        <div id="container">
                            <RecipeList input={inputText} />
                            {/* <a href="/recipe">click here for recipe card </a> */}
                        </div>
                        <div className="del-pro-btn-container">
                            <button className="delete-btn" style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}><h3><UserDeleteOutlined />&nbsp; Delete Profile</h3></button>
                            {renderModal()}
                        </div>
                    </Content>
                </Layout>
                <BackTop />
            </div>
        </>
    )
}