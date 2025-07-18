import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodos } from '../hooks/useTodos';

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

// const initialState: Todo[] = [];

// const init = (): Todo[] => {
//   const todosString = localStorage.getItem('todos');
//   return todosString ? JSON.parse(todosString) : [];
// };

export const TodoApp = () => {
  const {
    todos,
    allTodosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleOnToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp:{allTodosCount}, <small>pending:{pendingTodosCount} </small>
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
