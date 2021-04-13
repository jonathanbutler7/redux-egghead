import { createStore } from 'redux';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const store = createStore(counter);

  useEffect(() => {
    
  })
  return (
    <div>
      <header>
        <h1>React experiments</h1>
      </header>
      <main>
        <p>{store.getState()}</p>
        <button onClick={(e) => store.dispatch({ type: INCREMENT })}>+</button>
      </main>
    </div>
  );
}

export default App;
