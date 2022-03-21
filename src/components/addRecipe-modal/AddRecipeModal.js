import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import AddRecipe from '../addRecipe/AddRecipe'
import {PlusSquareFilled} from '@ant-design/icons';
import './addrecipemodal.css'

export default function AddRecipeModal() {
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
      <div className="modal-container">
        <Button className="buttons" id="add-recipe-btn" onClick={showModal}>
          <PlusSquareFilled /> Add Recipe</Button>
        <Modal
          title="Add a recipe"
          visible={isModalVisitble}
          onOk={handleOk}
          onCancel={handleCancel}
          footer= {[]}
        >
          <AddRecipe />
        </Modal>
      </div>
    </>
  )
}
