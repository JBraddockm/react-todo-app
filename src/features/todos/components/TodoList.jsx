import { useEffect } from 'react';

import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, setTodos }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTodos(todos.slice().sort((a, b) => a.isDone - b.isDone));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [setTodos, todos]);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </>
  );
}
