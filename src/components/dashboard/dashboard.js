import 'antd/dist/antd.css';
import { useMutation } from '@apollo/client';
import {useState} from 'react';
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

const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [removeProfile] = useMutation(REMOVE_PROFILE);
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


    const renderModal = () => {
        if(showModal) {
            return (
                <div className='deletepro-container'>
                    <h4 className='deletepro-header'>Are you sure?</h4>
                    <button className='deletepro-btn-yes' style= {{ cursor: "pointer" }} onClick={() => deleteProfile()}>Yes</button>
                    <button style= {{ cursor: "pointer" }} onClick={() => setShowModal(false)}>No</button>
                </div>
            )
        } else {
            return;
        }
    }

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    return (
        <>
        <div className="dash-container">
            {renderModal()}
            <Layout className ="layout">
            <Sider className="sidebar">
            <Space direction="vertical">
                <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
        />
            </Space>
            <div className="dash-nav">     
            <AddRecipeModal/>
            </div>
            </Sider>
            <div className="vl"></div>
            <button className="delete-btn" style= {{ cursor: "pointer" }} onClick={() => setShowModal(true)}><h3><UserDeleteOutlined />&nbsp; Delete Profile</h3></button>
            <Content>
            <div className="header">
            <img src={MyRecipes} id="my-recipes-header" />
            </div>
            <div id="recipes-container">

            {/* <a href="/recipe">click here for recipe card </a> */}
            </div>

            <RecipeList input={inputText} /> 
            </Content>
            </Layout>
           
            
        </div>
        </>
    )
}