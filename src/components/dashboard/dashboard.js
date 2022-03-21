import 'antd/dist/antd.css';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_PROFILE } from '../utils/mutations';
import { Space } from 'antd';
import { AudioOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Auth from '../utils/auth';
import AddRecipeModal from '../addRecipe-modal/AddRecipeModal'
import './dashboard.css'
import MyRecipes from '../../assets/my-recipes.png'
import TextField from "@mui/material/TextField";
import RecipeList from '../recipeList/RecipeList'
import { BackTop } from 'antd';


const { Content } = Layout;

export default function Dashboard() {
    const [removeProfile] = useMutation(REMOVE_PROFILE);
    const { loading, data } = useQuery(QUERY_ME);
    const [showModal, setShowModal] = useState(false);
    const [inputText, setInputText] = useState("");

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(data, "data")


    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const deleteProfile = async () => {
        await removeProfile()
        Auth.logout()
    }

    const profileName = data.me.firstName

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