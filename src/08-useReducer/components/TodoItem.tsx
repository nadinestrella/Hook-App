import type { Todo } from '../TodoApp';

interface Props {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => onToggleTodo(todo.id)}
        className={`"aling-self-center" ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
      >
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
