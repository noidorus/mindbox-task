import { ChangeEvent, FormEvent } from 'react';
import { addTodo, updateNewTodoText } from '../../redux/todoReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';

export const TodoForm = () => {
  const newTodoText = useAppSelector((state) => state.newTodoText);
  const dispatch = useAppDispatch();

  const onTodoTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateNewTodoText(target.value));
  };

  const onAddTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(newTodoText));
  };

  return (
    <form className="todo__form" onSubmit={onAddTodo}>
      <input
        type="text"
        onChange={onTodoTextChange}
        value={newTodoText}
        placeholder="What need to be done?"
      />
    </form>
  );
};
