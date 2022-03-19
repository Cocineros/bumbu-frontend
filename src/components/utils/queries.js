import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
  me {
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
