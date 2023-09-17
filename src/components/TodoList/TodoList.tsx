import { Todo } from '../../types';
import './TodoList.scss';

export const TodoList = (props: TodoListProps) => {
  const itemsLeft = props.todos.filter((el) => el.checked !== true).length;

  const onStatusChanged = (id: string) => {
    props.changeTodoCheckedStatus(id);
  };

  const onDeleteTodo = (id: string) => {
    props.deleteTodo(id);
  };

  return (
    <>
      <p>You have {itemsLeft} pending items</p>
      <ul className="todo__list">
        {props.todos.map((el) => (
          <li
            data-testId="todo-item"
            className={!el.checked ? 'list__item' : 'list__item checked'}
            key={el.id}
          >
            <input
              checked={el.checked}
              type="checkbox"
              onChange={() => {
                onStatusChanged(el.id);
              }}
            />
            <span className="list__item-text">{el.text}</span>
            <span onClick={() => onDeleteTodo(el.id)} className="delete"></span>
          </li>
        ))}
      </ul>
    </>
  );
};

interface TodoListProps {
  todos: Todo[];
  changeTodoCheckedStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}
