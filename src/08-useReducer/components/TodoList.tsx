import type { Todo } from '../TodoApp';
import { TodoItem } from './todoItem';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

export const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
