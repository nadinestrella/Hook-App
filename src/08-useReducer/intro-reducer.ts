type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

type TodoAction = { type: '[TODO add todo'; payload: Todo };

const initialState: Todo[] = [
  {
    id: 1,
    todo: 'Recolectar Fresas',
    done: false,
  },
];

const todoReducer = (
  state: Todo[] = initialState,
  action: TodoAction
): Todo[] => {
  if (action.type === '[TODO add todo') {
    return [...state, action.payload];
  }
  return state;
};

let todos = initialState;

const newTodo = { id: 2, todo: 'Recolectar Tomates', done: false };

const addTodoAction: TodoAction = {
  type: '[TODO add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
