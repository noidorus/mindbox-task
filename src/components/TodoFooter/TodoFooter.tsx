import { Filters } from '../../types';
import './TodoFooter.scss';

interface TodoFooterProps {
  activeFilter: string;
  changeActiveFilter: (filter: Filters) => void;
  clearCompleted: () => void;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const filters: Filters[] = ['All', 'Active', 'Completed'];

  return (
    <div className="todo__footer">
      <div className="filters">
        {filters.map((filter) => (
          <div
            className={
              props.activeFilter === filter
                ? 'btn btn-filter active'
                : 'btn btn-filter'
            }
            onClick={() => {
              props.changeActiveFilter(filter);
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
          props.clearCompleted();
        }}
      >
        Clear completed
      </div>
    </div>
  );
};
