import { connect } from 'react-redux';
import { SET_VISIBILITY_FILTER } from './actions';

const mapStateToLinkProps = (state, ownProps) => {
  return { active: ownProps.filter === state.visibilityFilter };
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () =>
      dispatch({ type: SET_VISIBILITY_FILTER, filter: ownProps.filter }),
  };
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

FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(FilterLink);

export { FilterLink };
