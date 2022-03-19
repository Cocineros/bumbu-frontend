import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_RECIPE } from '../utils/mutations'

import Auth from '../utils/auth'

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

  // submit form
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
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="signup-form " onSubmit={handleFormSubmit}>
            <input placeholder="Recipe Name"
              type="text"
              name="name"
              id="name"
              required
              value={addRecipe.name}
              onChange={handleChange}
            />

            <input placeholder="description"
              type="text"
              name="description"
              id="description"
              required
              value={addRecipe.description}
              onChange={handleChange}
            />

            <input placeholder="ingredients"
              type="text"
              name="ingredients"
              id="ingredients"
              required
              value={addRecipe.ingredients}
              onChange={handleChange}
            />

            <input placeholder="instructions"
              type="text"
              name="instructions"
              id="instructions"
              required
              value={addRecipe.instructions}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  )
}