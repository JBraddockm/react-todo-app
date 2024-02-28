import { useState } from 'react';
import dayjs from 'dayjs';
import { TodoInputIcon } from 'src/components/SVGs';
import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';

export default function TodoForm() {
  const { todos, setTodos } = useTodoContext();
  const nextSequence = todos.length + 1;
  const [todo, setTodo] = useState({
    id: 0,
    name: '',
    isDone: false,
    createdAt: null,
    updatedAt: null
  });
  const [nextId, setNextId] = useState(() => nextSequence);

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([todo, ...todos]);
    setNextId(nextId + 1);
    setTodo({ ...todo, id: nextId, name: '', isDone: false });
  }
  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="mt-2 flex h-8 w-full items-center rounded px-2 text-sm font-medium">
        <TodoInputIcon />
        <label htmlFor="todoInput" className="sr-only text-gray-500 dark:text-white">
          Add todo...
        </label>
        <input
          id="todoInput"
          className="ml-4 h-8 flex-grow bg-transparent font-medium text-gray-500 focus:outline-none dark:text-gray-400"
          type="text"
          value={todo.name}
          onChange={(e) =>
            setTodo({
              ...todo,
              id: nextId,
              name: e.target.value,
              isDone: false,
              createdAt: dayjs().unix()
            })
          }
          placeholder="add a new task..."
        />
      </form>
    </>
  );
}
