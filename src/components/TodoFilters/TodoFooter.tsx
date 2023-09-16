import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { changeActiveFilter, clearCompleted } from '../../redux/todoReducer';
import './TodoFooter.scss';

export const TodoFooter = () => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.activeFilter);

  const filters: ['All', 'Active', 'Completed'] = [
    'All',
    'Active',
    'Completed',
  ];

  return (
    <div className="todo__footer">
      <div className="filters">
        {filters.map((filter) => (
          <div
            className={
              activeFilter === filter
                ? 'btn btn-filter active'
                : 'btn btn-filter'
            }
            onClick={() => {
              dispatch(changeActiveFilter(filter));
            }}
            key={filter}
          >
            {filter}
          </div>
        ))}
      </div>
      <div
        className="btn"
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear completed
      </div>
    </div>
  );
};
