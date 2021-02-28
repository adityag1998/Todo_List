import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_TODOS } from '../GraphQL/Queries';

function GetTodos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(data.todos);
  }, [data]);
  return (
    <>
      {todoList.map((todo) => {
        return <p>{todo.text}</p>;
      })}
    </>
  );
}

export default GetTodos;
