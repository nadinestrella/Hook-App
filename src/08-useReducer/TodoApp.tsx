import { useReducer } from 'react';
import { todoReducer, type TodoAction } from './todoReducer';

import { TodoAdd } from './components/todoAdd';
import { TodoList } from './components/todoList';

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

const initialState: Todo[] = [
  {
    id: new Date().getTime(),
    description: 'Dentist Appoinment',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Buy bread',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo: Todo) => {
    const action: TodoAction = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
  };
  return (
    <>
      <h1>
        TodoApp:10, <small>pending:2 </small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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
