import { Todo } from './Todo';

export const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => props.onTodoClick(todo.id)}
        />
      ))}
    </ul>
  );
};
