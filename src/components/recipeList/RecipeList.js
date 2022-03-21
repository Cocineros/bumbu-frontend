import { React, useState } from 'react'
import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_RECIPE } from '../utils/mutations';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import RecipeModal from '../recipeModal/RecipeModal';
import { Modal, Card } from 'antd';
import SampleRecipe from '../../assets/sample-recipe-image.JPG'
import './recipelist.css'

const { Meta } = Card;


export default function RecipeList(props) {
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
    const [removeRecipe] = useMutation(REMOVE_RECIPE);
    const { loading, data } = useQuery(QUERY_ME);

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(data, "data")

    const handleRemoveRecipe = async (id) => {
        try {
            await removeRecipe({
                variables: { id }
            })
            console.log("this is the id", id)
            window.location.reload();
        } catch (err) {
            console.log(JSON.stringify(err, null, 2))
        }
    }


    const filteredData = data.me.savedRecipes.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })


    return (
        <div className='recipe-cards'>
            {filteredData.map((recipe) => (
                // <li key={recipe.id}> {recipe.name} </li>
                <li>
                    {/* <a href="/recipe"> */}
                    <Card className="recipe-card" key={recipe._id}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className="recipe-card-img" alt="example" src={SampleRecipe} />}>
                        <Meta title={recipe.name} description={recipe.description}
                        />
                        <Meta description={recipe.ingredients}
                        /><Meta description={recipe.instructions}
                        />
                        <EyeOutlined className="icon" onClick={viewModal} />

                        <DeleteOutlined className="icon" onClick={() => handleRemoveRecipe(recipe._id)} />
                        <Modal title={recipe.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            {/* <ul>{ingredientsList}</ul> */}
                            <img className="recipe-card-img" alt="example" src={SampleRecipe} />
                            <p>{recipe.description}</p>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.instructions}</p>
                        </Modal>
                        {/* <ul>{recipe.ingredients}</ul>
                        <ol>{recipe.instructions}</ol> */}
                    </Card>
                </li>
            ))}
        </div>

    )
}

