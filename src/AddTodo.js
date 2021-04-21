import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: Math.random(),
          });
          input.value = '';
        }}
      >
        +
      </button>
    </>
  );
};

AddTodo = connect()(AddTodo);
export { AddTodo };
