import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.isDone) - Number(b.isDone));

  return (
    <>
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </>
  );
}
