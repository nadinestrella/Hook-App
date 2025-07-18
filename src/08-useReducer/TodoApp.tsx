import { useEffect, useReducer } from 'react';
import { todoReducer, type TodoAction } from './todoReducer';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

const initialState: Todo[] = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Dentist Appoinment',
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   description: 'Buy bread',
  //   done: false,
  // },
];

const init = (): Todo[] => {
  const todosString = localStorage.getItem('todos');
  return todosString ? JSON.parse(todosString) : [];
};

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        TodoApp:10, <small>pending:2 </small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleOnToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
