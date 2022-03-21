import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import {
  EyeOutlined
} from '@ant-design/icons';

export default function RecipeModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const viewModal = () => {
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
       <EyeOutlined className="icon" onClick={viewModal} />
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </>
  )
}
