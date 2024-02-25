import { useEffect } from 'react';
import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';

import TodoItem from './TodoItem/TodoItem.jsx';

export default function TodoList() {
  const { todos, setTodos } = useTodoContext();
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
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
