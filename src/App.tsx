import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

import './App.scss';
import { TodoFooter } from './components/TodoFilters/TodoFooter';

function App() {
  return (
    <div className="app">
      <div className="todo">
        <h1>Todo list</h1>
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
