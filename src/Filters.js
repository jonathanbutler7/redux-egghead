import { FilterLink } from './index';

export const Filters = ({ visibilityFilter, onFilterClick, store }) => {
  return (
    <p>
      {' '}
      Show:
      <FilterLink
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        filter='SHOW_ALL'
        store={store}
      >
        All
      </FilterLink>
      /
      <FilterLink
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        filter='SHOW_ACTIVE'
        store={store}
      >
        Active
      </FilterLink>
      /
      <FilterLink
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        filter='SHOW_COMPLETED'
        store={store}
      >
        Completed
      </FilterLink>
    </p>
  );
};
