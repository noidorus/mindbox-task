import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { TodoFooter } from './TodoFooter';

describe('Todo footer', () => {
  const mockProps = {
    activeFilter: 'All',
    changeActiveFilter: vi.fn(),
    clearCompleted: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Render component', () => {
    const { getByText } = render(<TodoFooter {...mockProps} />);

    expect(getByText('All')).toBeDefined();
    expect(getByText('Clear completed')).toBeDefined();
  });

  test('changeActiveFilter to be called', () => {
    const { getByText } = render(<TodoFooter {...mockProps} />);

    const completedFilter = getByText('Completed');
    fireEvent.click(completedFilter);
    expect(mockProps.changeActiveFilter).toBeCalled();
  });

  test('changeActiveFilter to be called', () => {
    const { getByText } = render(<TodoFooter {...mockProps} />);

    const clearCompletedButton = getByText('Clear completed');
    fireEvent.click(clearCompletedButton);
    expect(mockProps.clearCompleted).toBeCalled();
  });
});
