import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_RECIPE } from '../utils/mutations'

export default function MakeRecipe() {
  const [addRecipe, setAddRecipe] = useState({
    name: '',
    description: '',
    ingredients: [],
    instructions: '',
  });

  const [createRecipe, { error, data }] = useMutation(ADD_RECIPE);

  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target;

    setAddRecipe({
      ...addRecipe,
      [name]: value,
    });    
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createRecipe({
        variables: { ...addRecipe },
      });

      console.log("Success!",addRecipe)
    } catch (error) {
      console.error("Yo! this is an error",error);
      console.log("this is recipe", addRecipe)
    }

    setAddRecipe({
        name: '',
        description: '',
        ingredients: [],
        instructions: '',
    })
  };


  return (
    <>
      <div>
        {data ? window.location.reload() : (
          <form className="signup-form " onSubmit={handleFormSubmit}>
            <input className="input"
            placeholder="Recipe Name"
              type="text"
              name="name"
              id="name"
              required
              value={addRecipe.name}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Description"
              type="text"
              name="description"
              id="description"
              required
              value={addRecipe.description}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Ingredients"
              type="text"
              name="ingredients"
              id="ingredients"
              required
              value={addRecipe.ingredients}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Instructions"
              type="text"
              name="instructions"
              id="instructions"
              required
              value={addRecipe.instructions}
              onChange={handleChange}
            />
            <button type="submit">Add Recipe</button>
          </form>
        )}
      </div>
    </>
  )
}