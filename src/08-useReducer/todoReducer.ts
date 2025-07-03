import type { Todo } from './TodoApp';

type TodoAction = { type: 'ADD_TODO'; payload: Todo } | { type: 'ABC' };

export const todoReducer = (
  initialState: Todo[],
  action: TodoAction
): Todo[] => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = ABC no esta implementada');

    default:
      return initialState;
  }
};
