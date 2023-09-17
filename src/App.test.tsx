import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App', () => {
  const preloadedTodos = [
    { id: '1', checked: false, text: 'Task 1' },
    { id: '2', checked: true, text: 'Task 2' },
  ];

  test('should add a todo', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('What need to be done?');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(input);
    expect(getByText('New Todo')).toBeDefined();
  });

  test('should change the status of a todo', () => {
    const { getByText } = render(<App preloadedTodos={preloadedTodos} />);
    const checkbox = getByText('Task 1')
      .previousElementSibling as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('should delete a todo', () => {
    const { getByText, queryByText } = render(
      <App preloadedTodos={preloadedTodos} />
    );
    const deleteIcon = getByText('Task 1').nextElementSibling as Element;
    fireEvent.click(deleteIcon);
    expect(queryByText('Task 1')).toBeNull();
  });

  test('should change the active filter', () => {
    const { getByText, getAllByTestId } = render(
      <App preloadedTodos={preloadedTodos} />
    );
    const activeFilter = getByText('Active');
    fireEvent.click(activeFilter);
    let items = getAllByTestId('todo-item');
    expect(items.length).toBe(1);

    const completedFilter = getByText('Completed');
    fireEvent.click(completedFilter);
    items = getAllByTestId('todo-item');
    expect(items.length).toBe(1);
  });

  test('should clear completed todos', () => {
    const { getByText, getAllByTestId } = render(
      <App preloadedTodos={preloadedTodos} />
    );
    const clearCompletedButton = getByText('Clear completed');
    fireEvent.click(clearCompletedButton);
    const items = getAllByTestId('todo-item');
    expect(items.length).toBe(1);
  });
});
