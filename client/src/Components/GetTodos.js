import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../GraphQL/Queries';
import Paper from '@material-ui/core/Paper';
import styles from '../beautify.module.css';
import CheckboxList from '../CheckboxList';

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
      <div className={styles.flexContainer}>
        <div className={styles.center}>
          <Paper elevation={3}>
            <CheckboxList todoList={todoList} />
          </Paper>
        </div>
      </div>
    </>
  );
}

export default GetTodos;
