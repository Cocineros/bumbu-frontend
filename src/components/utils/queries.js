import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      firstName
      lastName
      email
      savedRecipes[
          name
          description
          ingredients
          instructions
      ]
      
    }
  }
`;
