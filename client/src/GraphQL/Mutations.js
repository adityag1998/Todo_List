import { gql } from '@apollo/client';

export const UPDATE_TODOS = gql`
  mutation($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete)
  }
`;
