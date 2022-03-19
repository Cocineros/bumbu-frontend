import React from 'react';
import { useQuery } from '@apollo/client';
import 'antd/dist/antd.css';
import { Card } from 'antd';

import { QUERY_ME } from '../utils/queries';

export default function GetSavedRecipes() {
    const { loading, data } = useQuery(QUERY_ME);
    console.log("yo this is data",data);
    
    // const profileData = data?.savedRecipes || {} ;
    const profileData = data?.me || {} ;

    if (loading) {
        return <div>Loading...</div>
    }
    console.log("profile stuff", profileData)
    return (
        <div>
            {data.me.savedRecipes.map((recipe) => {
                return (
                    <div className="site-card-border-less-wrapper">
                    <Card key={recipe._id} title={recipe.name} bordered={false} style={{ width: 300 }}>
                        <p>{recipe.description}</p>
                     <p>{recipe.instructions}</p>
                        <p>{recipe.ingredients}</p>
                    </Card>
                </div>
                )
            })}
        
        
        </div>
    )


}