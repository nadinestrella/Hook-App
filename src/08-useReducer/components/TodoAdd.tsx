import { useForm } from '../../hooks';
import type { Todo } from '../TodoApp';

interface Props {
  onNewTodo: (todo: Todo) => void;
}

export const TodoAdd = ({ onNewTodo }: Props) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="what should be done?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1 ">
        Add
      </button>
    </form>
  );
};
