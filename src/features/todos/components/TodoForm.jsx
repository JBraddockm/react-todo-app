import { useState } from 'react';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ id: 1, name: '', isDone: false });
  const [nextId, setNextId] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodo({ id: nextId, name: '', isDone: false });
    setTodos([todo, ...todos]);
    setNextId(nextId + 1);
  }
  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="mt-2 flex h-8 w-full items-center rounded px-2 text-sm font-medium">
        <svg
          className="h-5 w-5 fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
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
