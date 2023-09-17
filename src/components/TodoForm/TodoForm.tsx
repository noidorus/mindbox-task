import { ChangeEvent, FormEvent, useState } from 'react';

import './TodoForm.scss';

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [newTodoText, setNewTodoText] = useState('');

  const onTodoTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(target.value);
  };

  const onAddTodo = (e: FormEvent) => {
    e.preventDefault();
    setNewTodoText('');
    addTodo(newTodoText);
  };

  return (
    <form className="todo__form" onSubmit={onAddTodo}>
      <input
        className="new-todo"
        type="text"
        onChange={onTodoTextChange}
        value={newTodoText}
        placeholder="What need to be done?"
      />
    </form>
  );
};

interface TodoFormProps {
  addTodo: (text: string) => void;
}
