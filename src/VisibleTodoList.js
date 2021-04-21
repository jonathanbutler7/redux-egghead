import { TodosList } from './TodosList';
import { TOGGLE_TODO, ADD_TODO } from './actions';
import { getVisibleTodos } from './index';
import { connect } from 'react-redux';

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch({ type: TOGGLE_TODO, id }),
    addTodo: (id, text) => dispatch({ type: ADD_TODO, id, text }),
  };
};
export const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodosList);
