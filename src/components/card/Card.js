import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_RECIPE } from '../utils/mutations';
// import Auth from '../utils/auth';

export default function GetSavedRecipes() {
    const [removeRecipe] = useMutation(REMOVE_RECIPE);
    const { loading, data } = useQuery(QUERY_ME);
    // console.log("yo this is data", data);

    // const profileData = data?.savedRecipes || {} ;
    const profileData = data?.me || {};

    if (loading) {
        return <div>Loading...</div>
    }
    // console.log("profile stuff", profileData)

    const handleRemoveRecipe = async (id) => {
        try {
            await removeRecipe({
                variables: { id }
            })
            console.log("this is the id", id)
        } catch (err) {
            console.log(JSON.stringify(err, null, 2))
        }
    }

    return (
        <div>
            {data.me.savedRecipes.map((recipe) => {
                console.log("recipe id", recipe)
                return (
                    <div className="site-card-border-less-wrapper">
                        <Card key={recipe._id} title={recipe.name} bordered={true} style={{ width: 300 }}>
                            <p>{recipe.description}</p>
                            <p>{recipe.instructions}</p>
                            <p>{recipe.ingredients}</p>
                            <button className="delete-btn" style={{ cursor: "pointer" }} onClick={() => handleRemoveRecipe(recipe._id)}><h3><DeleteOutlined />&nbsp; Delete Recipe</h3></button>
                        </Card>
                    </div>
                )
            })}


        </div>
    )
}
