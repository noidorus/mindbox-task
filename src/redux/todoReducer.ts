import { v4 as uuid } from 'uuid';

const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';
const ADD_TODO = 'ADD_TODO';
const CHANGE_TODO_CHECKED_STATUS = 'CHANGE_TODO_CHECKED_STATUS';
const CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';

const initialState: TodoState = {
  todos: [
    { id: '31ddf13', checked: false, text: 'Clean code' },
    { id: 'dsf123df', checked: true, text: 'Find work' },
    { id: '7639dnsf1', checked: false, text: 'Refactor' },
  ],
  newTodoText: '',
  activeFilter: 'All',
};

interface TodoState {
  newTodoText: string;
  todos: {
    id: string;
    checked: boolean;
    text: string;
  }[];
  activeFilter: 'All' | 'Active' | 'Completed';
}

export const todoReducer = (
  state = initialState,
  { type, payload }: TodoActions
) => {
  switch (type) {
    case UPDATE_NEW_TODO_TEXT:
      return { ...state, newTodoText: payload };
    case ADD_TODO:
      const newTodo = { id: uuid(), checked: false, text: payload };

      return {
        ...state,
        newTodoText: '',
        todos: [...state.todos, newTodo],
      };
    case CHANGE_TODO_CHECKED_STATUS:
      return {
        ...state,
        todos: state.todos.map((el) => {
          return el.id === payload ? { ...el, checked: !el.checked } : el;
        }),
      };
    case CHANGE_ACTIVE_FILTER:
      return { ...state, activeFilter: payload };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((el) => el.checked !== true),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
};

export const updateNewTodoText = (text: string): UpdateNewTodoText => ({
  type: UPDATE_NEW_TODO_TEXT,
  payload: text,
});
export const addTodo = (text: string): AddTodo => ({
  type: ADD_TODO,
  payload: text,
});
export const changeTodoCheckedStatus = (
  id: string
): ChangeTodoCheckedStatus => ({
  type: CHANGE_TODO_CHECKED_STATUS,
  payload: id,
});
export const changeActiveFilter = (
  filterValue: TodoState['activeFilter']
): ChangeActiveFilter => ({
  type: CHANGE_ACTIVE_FILTER,
  payload: filterValue,
});
export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
export const deleteTodo = (id: string): DeleteTodo => ({
  type: DELETE_TODO,
  payload: id,
});

interface UpdateNewTodoText {
  type: typeof UPDATE_NEW_TODO_TEXT;
  payload: string;
}
interface AddTodo {
  type: typeof ADD_TODO;
  payload: string;
}
interface ChangeTodoCheckedStatus {
  type: typeof CHANGE_TODO_CHECKED_STATUS;
  payload: string;
}
interface ChangeActiveFilter {
  type: typeof CHANGE_ACTIVE_FILTER;
  payload: TodoState['activeFilter'];
}

interface ClearCompleted {
  type: typeof CLEAR_COMPLETED;
  payload?: undefined;
}
interface DeleteTodo {
  type: typeof DELETE_TODO;
  payload: string;
}

type TodoActions =
  | UpdateNewTodoText
  | AddTodo
  | ChangeTodoCheckedStatus
  | ChangeActiveFilter
  | ClearCompleted
  | DeleteTodo;
