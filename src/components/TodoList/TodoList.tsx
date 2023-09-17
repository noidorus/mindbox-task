import './TodoList.scss';

interface TodoListProps {
  todos: {
    id: string;
    checked: boolean;
    text: string;
  }[];
  activeFilter: string;
  changeTodoCheckedStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoList = (props: TodoListProps) => {
  const filteredTodos = props.todos.filter((todo) => {
    switch (props.activeFilter) {
      case 'Active':
        return todo.checked !== true;
      case 'Completed':
        return todo.checked === true;
      default:
        return todo;
    }
  });

  const itemsLeft = props.todos.filter((el) => el.checked !== true).length;

  const onStatusChanged = (id: string) => {
    props.changeTodoCheckedStatus(id);
  };

  const onDeleteTodo = (id: string) => {
    props.deleteTodo(id);
  };

  return (
    <>
      <p>You have {itemsLeft} pending items</p>
      <ul className="todo__list">
        {filteredTodos.map((el) => (
          <li
            className={!el.checked ? 'list__item' : 'list__item checked'}
            key={el.id}
          >
            <input
              checked={el.checked}
              type="checkbox"
              onChange={() => {
                onStatusChanged(el.id);
              }}
            />
            <span className="list__item-text">{el.text}</span>
            <span onClick={() => onDeleteTodo(el.id)} className="delete"></span>
          </li>
        ))}
      </ul>
    </>
  );
};
