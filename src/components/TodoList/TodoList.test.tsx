import { render, fireEvent } from '@testing-library/react';
import { describe, test, vi, expect, beforeEach } from 'vitest';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  const mockProps = {
    todos: [
      { id: '1', checked: false, text: 'Task 1' },
      { id: '2', checked: true, text: 'Task 2' },
    ],
    activeFilter: 'All',
    changeTodoCheckedStatus: vi.fn(),
    deleteTodo: vi.fn(),
  };
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders correctly', () => {
    const { getByText } = render(<TodoList {...mockProps} />);

    const itemsLeftText = getByText('You have 1 pending items');
    expect(itemsLeftText).toBeDefined();
    expect(getByText('Task 1')).toBeDefined();
    expect(getByText('Task 2')).toBeDefined();
  });

  test('calls changeTodoCheckedStatus', () => {
    const { getByText } = render(<TodoList {...mockProps} />);

    const task1Checkbox = getByText('Task 1').previousElementSibling as Element;
    fireEvent.click(task1Checkbox);

    expect(mockProps.changeTodoCheckedStatus).toBeCalled();
  });

  test('calls deleteTodo when delete icon is clicked', () => {
    const { getByText } = render(<TodoList {...mockProps} />);

    const deleteIcon = getByText('Task 1').nextElementSibling as Element;
    fireEvent.click(deleteIcon);

    expect(mockProps.deleteTodo).toBeCalled();
  });
});
