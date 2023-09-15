import { v4 as uuid } from 'uuid';

const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';
const ADD_TODO = 'ADD_TODO';
const CHANGE_TODO_CHECKED_STATUS = 'CHANGE_TODO_CHECKED_STATUS';
const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

const initialState: TodoState = {
  todos: [
    { id: '31ddf13', checked: false, text: 'Clean code' },
    { id: 'dsf123df', checked: true, text: 'Find work' },
    { id: '7639dnsf1', checked: false, text: 'Refactor' },
  ],
  newTodoText: '',
  visibilityFilter: 'All',
};

interface TodoState {
  newTodoText: string;
  todos: {
    id: string;
    checked: boolean;
    text: string;
  }[];
  visibilityFilter: 'All' | 'Active' | 'Completed';
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
    case CHANGE_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: payload };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((el) => el.checked !== true),
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
export const changeVisibilityFilter = (
  filterValue: TodoState['visibilityFilter']
): ChangeVisibilityFilter => ({
  type: CHANGE_VISIBILITY_FILTER,
  payload: filterValue,
});
export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
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
interface ChangeVisibilityFilter {
  type: typeof CHANGE_VISIBILITY_FILTER;
  payload: TodoState['visibilityFilter'];
}

interface ClearCompleted {
  type: typeof CLEAR_COMPLETED;
  payload?: undefined;
}

type TodoActions =
  | UpdateNewTodoText
  | AddTodo
  | ChangeTodoCheckedStatus
  | ChangeVisibilityFilter
  | ClearCompleted;
