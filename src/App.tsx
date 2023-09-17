import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

import './App.scss';
import { TodoFooter } from './components/TodoFooter/TodoFooter';
import { Filters, Todo } from './types';

interface AppProps {
  preloadedTodos?: Todo[];
}

function App({ preloadedTodos }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(preloadedTodos || []);
  const [activeFilter, setActiveFilter] = useState<Filters>('All');

  const addTodo = (text: string) => {
    const newTodo = { id: uuid(), checked: false, text };
    setTodos([newTodo, ...todos]);
  };

  const changeTodoCheckedStatus = (id: string) => {
    setTodos(
      todos.map((el) => {
        return el.id === id ? { ...el, checked: !el.checked } : el;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const changeActiveFilter = (filter: Filters) => {
    setActiveFilter(filter);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((el) => el.checked !== true));
  };

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

  return (
    <div className="app">
      <div className="todo">
        <h1>Todo list</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          changeTodoCheckedStatus={changeTodoCheckedStatus}
          deleteTodo={deleteTodo}
        />
        <TodoFooter
          activeFilter={activeFilter}
          changeActiveFilter={changeActiveFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
