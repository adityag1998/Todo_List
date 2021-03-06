import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useMutation } from '@apollo/client';
import { UPDATE_TODOS } from './GraphQL/Mutations';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function removeTodo(todo) {
  console.log('remove todo');
}

function CheckboxList({ todoList }) {
  const classes = useStyles();
  const [changeStatus] = useMutation(UPDATE_TODOS);

  return (
    <List className={classes.root}>
      {todoList.map((todo) => {
        const todoID = `${todo.id}-todo-item`;

        return (
          <ListItem
            key={todoID}
            role={undefined}
            dense
            button
            onClick={() =>
              changeStatus({
                variables: {
                  id: todo.id,
                  complete: !todo.complete,
                },
              })
            }
          >
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={todo.complete}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => removeTodo(todo)}>
                <CloseIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default CheckboxList;
