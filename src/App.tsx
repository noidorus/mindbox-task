import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

import './App.css';
import { TodoFooter } from './components/TodoFilters/TodoFooter';

function App() {
  return (
    <div className="todo">
      <h1>Todo list</h1>
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
