import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(window.localStorage.getItem('todos')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = value => {
    addTodo(value);
  };

  const addTodo = text => {
    const todo = { id: nanoid(), text };
    setTodos(todos => [...todos, todo]);
  };

  const delTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Text>Todos</Text>
      <SearchForm onSubmit={onSubmit} />
      <Grid>
        {todos.length > 0 &&
          todos.map(({ id, text }, index) => {
            return (
              <GridItem key={id}>
                <Todo
                  text={text}
                  counter={index + 1}
                  deleteButton={delTodo}
                  id={id}
                />
              </GridItem>
            );
          })}
      </Grid>
    </>
  );
};
