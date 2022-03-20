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
        <div className="landing-container">
            <Button id="login-btn" onClick={showModal}>
         Login
        </Button>
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            title="Login to Bumbu"
            visible={isModalVisitble}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
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
