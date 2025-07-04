import type { Todo } from '../TodoApp';

interface Props {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

export const TodoItem = ({ todo, onDeleteTodo }: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="aling-self-center">{todo.description}</span>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
