import { gql } from '@apollo/client';

export const LOGIN_PROFILE = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $firstName: String!, $lastName: String!,  $email: String!, $password: String!) {
    addProfile( firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const REMOVE_PROFILE = gql `
mutation removeProfile {
  removeProfile {
    _id
    firstName
    lastName
    username
    email
    savedRecipes {
      _id
      name
      description
      ingredients
      instructions
    }
  }
}
`;

export const ADD_RECIPE = gql`
  mutation addRecipe($name: String!, $ingredients: String!, $instructions: String!, $description: String!) {
    addRecipe(name: $name) {
      _id
      name
      description
      ingredients
      instructions
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($id: String!) {
    removeRecipe( _id: $id) {
      _id
      name
      description
      ingredients
      instructions
    }
  }
`;





