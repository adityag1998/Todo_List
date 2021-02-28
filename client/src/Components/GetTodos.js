import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../GraphQL/Queries';

function GetTodos() {
  const { data } = useQuery(GET_TODOS);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (data) {
      setTodoList(data.todos);
    }
  }, [data]);

  return (
    <>
      {todoList.map((todo) => (
        <div key={`${todo.id}-todo-item`}>{todo.text}</div>
      ))}
    </>
  );
}

export default GetTodos;
