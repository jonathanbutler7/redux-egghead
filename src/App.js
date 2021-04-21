import { Filters } from './Filters';
import { AddTodo } from './AddTodo';
import { VisibleTodoList } from './VisibleTodoList';
export const App = () => (
  <>
    <AddTodo />
    <Filters />
    <VisibleTodoList />
  </>
);
