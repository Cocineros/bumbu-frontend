import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
  me {
    firstName
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
