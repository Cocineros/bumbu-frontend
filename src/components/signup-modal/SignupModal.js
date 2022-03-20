import React, { useState } from 'react'
import './signupModal.css'
import { Modal, Button } from 'antd';
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
        <Button id="signup-btn" onClick={showModal}>
          Signup    </Button>
        <Modal 
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          title="Create a new account"
          visible={isModalVisitble}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <Signup />
        </Modal>
      </div>
    </>
  )
}
