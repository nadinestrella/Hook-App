import { useEffect, useReducer } from 'react';
import { todoReducer, type TodoAction } from '../08-useReducer/todoReducer';
import type { Todo } from '../08-useReducer/TodoApp';

export const useTodos = () => {
  const initialState: Todo[] = [];

  const init = (): Todo[] => {
    const todosString = localStorage.getItem('todos');
    return todosString ? JSON.parse(todosString) : [];
  };
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: Todo) => {
    const action: TodoAction = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleOnToggleTodo = (id: number) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
    console.log({ id });
  };

  return {
    todos,

    allTodosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,

    handleNewTodo,
    handleDeleteTodo,
    handleOnToggleTodo,
  };
};
