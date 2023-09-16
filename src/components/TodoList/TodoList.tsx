import { changeTodoCheckedStatus, deleteTodo } from '../../redux/todoReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';

import './TodoList.scss';

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.activeFilter);
  const todos = useAppSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    switch (activeFilter) {
      case 'Active':
        return todo.checked !== true;
      case 'Completed':
        return todo.checked === true;
      default:
        return todo;
    }
  });
  const itemsLeft = todos.filter((el) => el.checked !== true);

  const onStatusChanged = (id: string) => {
    dispatch(changeTodoCheckedStatus(id));
  };

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <p>You have {itemsLeft.length} pending items</p>
      <ul className="todo__list">
        {filteredTodos.map((el) => (
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
            <span className="list__item-text">{el.text}</span>
            <span onClick={() => onDeleteTodo(el.id)} className="delete"></span>
          </li>
        ))}
      </ul>
    </>
  );
};
