import { useState } from 'react';
import TodoInputIcon from 'src/components/SVGs/TodoInputIcon.jsx';
import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';

export default function TodoForm() {
  const { todos, setTodos } = useTodoContext();
  const nextSequence = todos.length + 1;
  const [todo, setTodo] = useState({ id: 0, name: '', isDone: false });
  const [nextId, setNextId] = useState(() => nextSequence);

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([todo, ...todos]);
    setNextId(nextId + 1);
    setTodo({ id: nextId, name: '', isDone: false });
  }
  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="mt-2 flex h-8 w-full items-center rounded px-2 text-sm font-medium">
        <TodoInputIcon />
        <input
          className="ml-4 h-8 flex-grow bg-transparent font-medium focus:outline-none"
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ id: nextId, name: e.target.value, isDone: false })}
          placeholder="add a new task..."
        />
      </form>
    </>
  );
}
