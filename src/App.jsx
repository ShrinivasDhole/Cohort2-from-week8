/* eslint-disable react/prop-types */
import { useTodo } from "./hooks/useTodo";
function App() {
  const { todos, loading } = useTodo(7);
  if (loading) {
    return <div>loading ...</div>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <TrackTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
function TrackTodo({ todo }) {
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </>
  );
}
export default App;
