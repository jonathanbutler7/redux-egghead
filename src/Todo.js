export const Todo = ({ text, completed, onClick }) => (
  <li className='todo' style={{ textDecoration: completed && 'line-through' }}>
    <p>
      <strong>TODO:</strong> {text}
    </p>
    <button onClick={onClick}>toggle</button>
  </li>
);