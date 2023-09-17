import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { TodoForm } from './TodoForm';

describe('TodoForm tests', () => {
  const addTodo = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('should add a new todo', () => {
    const { getByTestId } = render(<TodoForm addTodo={addTodo} />);
    const button = getByTestId('btn-submit');
    const input = getByTestId('todo-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(button);

    expect(addTodo).toBeCalled();
  });

  test('should not add a todo when input is empty', () => {
    const { getByTestId } = render(<TodoForm addTodo={addTodo} />);
    const button = getByTestId('btn-submit');
    fireEvent.click(button);

    expect(addTodo).not.toBeCalled();
  });
});
