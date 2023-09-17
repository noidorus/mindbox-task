import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const preloadedTodos = [
  { id: '1', checked: false, text: 'Task 1' },
  { id: '2', checked: true, text: 'Task 2' },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App preloadedTodos={preloadedTodos} />
  </React.StrictMode>
);
