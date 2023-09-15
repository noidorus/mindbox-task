import './TodoList.css';
import { changeTodoCheckedStatus } from '../../redux/todoReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';

export const TodoList = () => {
  const visibilityFilter = useAppSelector((state) => state.visibilityFilter);
  const todos = useAppSelector((state) => state.todos).filter((todo) => {
    switch (visibilityFilter) {
      case 'Active':
        return todo.checked !== true;
      case 'Completed':
        return todo.checked === true;
      default:
        return todo;
    }
  });
  const dispatch = useAppDispatch();

  const onStatusChanged = (id: string) => {
    dispatch(changeTodoCheckedStatus(id));
  };

  return (
    <ul className="todo__list">
      {todos.map((el) => (
        <li
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
          <span>{el.text}</span>
        </li>
      ))}
    </ul>
  );
};
