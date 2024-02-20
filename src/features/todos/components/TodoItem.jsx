import { useState } from 'react';

import TodoItemDropdown from './TodoItemDropdown.jsx';

export default function TodoItem({ todo, todos, setTodos }) {
  const [isOptionsVisible, setsOptionsVisible] = useState(false);

  function handleTodoComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <>
      <li>
        <label className="hidden" aria-hidden="true">
          Complete Task
        </label>
        <input className="hidden" type="checkbox" readOnly checked={todo.isDone} />
        <div // TODO change to onClick for better user experience.
          onMouseEnter={() => setsOptionsVisible(!isOptionsVisible)}
          onMouseLeave={() => setsOptionsVisible(false)}
          className="todo-item flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-900">
          <span
            onClick={() => handleTodoComplete(todo.id)}
            className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="ml-4 mr-auto text-sm hover:underline">{todo.name}</span>
          <TodoItemDropdown
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            isOptionsVisible={isOptionsVisible}
          />
        </div>
      </li>
    </>
  );
}
