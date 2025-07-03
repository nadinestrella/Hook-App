import type { Todo } from './TodoApp';

type TodoAction = { type: '[TODO] Add Todo'; payload: Todo };

export const todoReducer = (
  initialState: Todo[],
  action: TodoAction
): Todo[] => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    default:
      return initialState;
  }
};
