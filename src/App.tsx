import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

import './App.scss';
import { TodoFooter } from './components/TodoFilters/TodoFooter';
import { Filters } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
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

  return (
    <div className="app">
      <div className="todo">
        <h1>Todo list</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          activeFilter={activeFilter}
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

interface Todo {
  id: string;
  checked: boolean;
  text: string;
}

export default App;
