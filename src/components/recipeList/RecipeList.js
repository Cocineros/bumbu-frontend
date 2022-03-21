import { React, useState } from 'react'
// import Card from '../card/Card'
import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_RECIPE } from '../utils/mutations';
import RecipeModal from '../recipeModal/RecipeModal'
import { DeleteOutlined,
         EyeOutlined} from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { Card } from 'antd';
import SampleRecipe from '../../assets/sample-recipe-image.JPG'
import './recipelist.css'

const {Meta} = Card;


export default function RecipeList(props) {

    const [showModal, setShowModal ] = useState(false);
 
      
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
        // console.log("EL", el)
        // console.log('el name', el.name)
        
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })

    console.log(data, "line 50 data")
    console.log(data.me.savedRecipes[0]._id)

    const renderModal = (data) => {
        if(showModal) {
            return (
                <div className='del-recipe-container'>
                    <h4 className='del-recipe-header'>Are you sure?</h4>
                    <button className='del-recipe-btn-yes' style= {{ cursor: "pointer" }} onClick={() => handleRemoveRecipe()}>Yes</button>
                    <button style= {{ cursor: "pointer" }} onClick={() => setShowModal(false)}>No</button>
                </div>
            )
        } else {
            return;
        }
    }

    return (
        <div className='recipe-cards'>
            {renderModal()}
            {filteredData.map((recipe) => (
                // <li key={recipe.id}> {recipe.name} </li>
                <li>
                        {/* <a href="/recipe"> */}
                        <Card className="recipe-card" key={recipe._id} 
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className="recipe-card-img"alt="example" src={SampleRecipe} />}>
                        <Meta title={recipe.name} description={recipe.description} />
                      
                              <DeleteOutlined className ="icon" onClick={() => 
                            setShowModal(true)}
                            // handleRemoveRecipe(recipe._id)}
                            />
                              <RecipeModal/>
                            {/* <h3><DeleteOutlined />&nbsp; Delete Recipe</h3></button> */}
                        </Card>
                        
                    </li>
            ))}
        </div>
    )
}

