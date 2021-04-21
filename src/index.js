import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { AddTodo } from './AddTodo';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './actions';
import { TodosList } from './TodosList';
import { VisibleTodoList } from './VisibleTodoList';
import { Filters } from './Filters';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id === action.id) {
        return { ...state, completed: !state.completed };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});
const store = createStore(todoApp);

store.dispatch({
  type: ADD_TODO,
  id: 0,
  text: 'Learn Redux',
});
store.dispatch({
  type: ADD_TODO,
  id: 1,
  text: 'Learn Aria',
});

const mapStateToLinkProps = (state, ownProps) => {
  return { active: ownProps.filter === state.visibilityFilter };
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () =>
      dispatch({ type: SET_VISIBILITY_FILTER, filter: ownProps.filter }),
  };
};

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
  }
};

let FilterLink = ({ onClick, filter, children, currentFilter }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};
export { FilterLink };
FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(FilterLink);
const TodoApp = () => <></>;

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AddTodo />
      <Filters />
      <VisibleTodoList />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
