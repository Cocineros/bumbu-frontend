import React, { useState } from 'react'
import { Modal, Button } from 'antd';
// import { NavLink } from 'react-router-dom'
import './signupModal.css'
import Signup from '../signup/Signup';

export default function SignupModal() {
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
        <Button className="buttons" id="signup-btn" onClick={showModal}>
          Sign up        </Button>
        <Modal
          title="Create a new account"
          visible={isModalVisitble}
          onOk={handleOk}
          onCancel={handleCancel}
          footer= {[]}
        >
          <Signup />
        </Modal>
      </div>
    </>
  )
}
