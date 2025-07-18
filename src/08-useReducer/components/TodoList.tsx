import type { Todo } from '../TodoApp';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
}: TodoListProps) => {
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
