import type { Todo } from './TodoApp';

export type TodoAction =
  | { type: '[TODO] Add Todo'; payload: Todo }
  | { type: '[TODO] Remove Todo'; payload: number }
  | { type: '[TODO] Toggle Todo'; payload: number };

export const todoReducer = (
  initialState: Todo[],
  action: TodoAction
): Todo[] => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO] Remove Todo':
      return initialState.filter((todo) => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
