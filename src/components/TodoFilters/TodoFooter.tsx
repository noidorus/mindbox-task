import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import {
  changeVisibilityFilter,
  clearCompleted,
} from '../../redux/todoReducer';
import './TodoFilters.css';

export const TodoFooter = () => {
  const dispatch = useAppDispatch();
  const itemsLeft = useAppSelector((state) => state.todos).filter(
    (el) => el.checked !== true
  );

  const filters: ['All', 'Active', 'Completed'] = [
    'All',
    'Active',
    'Completed',
  ];

  return (
    <div className="todo__footer">
      <div>{itemsLeft.length} items left</div>
      <div>
        {filters.map((filter) => (
          <button
            onClick={() => {
              dispatch(changeVisibilityFilter(filter));
            }}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear completed
      </button>
    </div>
  );
};
