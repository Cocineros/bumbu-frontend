import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import Login from '../login/Login';

import './loginModal.css'

export default function LoginModal(){
  const [isModalVisitble, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return (
      <>
        <div className="container">
            <Button id="login-btn" onClick={showModal}>
          Login
        </Button>
        <Modal
          title="Login to Bumbu"
          visible={isModalVisitble}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
         <Button key="submit" onClick={handleOk}>
              Login
        </Button>
          }
            >
          <Login />
        </Modal>
                {/* <NavLink className="button" to="/signup">Signup</NavLink>
                <NavLink className="button" to="/login">Login</NavLink> */}
            {/* </div> */}
        </div>
        </>
    )
}
