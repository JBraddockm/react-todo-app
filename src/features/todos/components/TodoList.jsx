import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.sort((a, b) => a.isDone - b.isDone);

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
