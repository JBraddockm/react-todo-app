import { useEffect, useState } from 'react';

export default function TodoItemDropdown({ todo, todos, setTodos, isOptionsVisible }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleTodoDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  useEffect(() => {
    !isOptionsVisible && setIsOpen(false);
  }, [isOptionsVisible]);

  return (
    <div className={`${isOptionsVisible ? `inline-block` : `hidden`} relative`}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="button"
        className="inline-flex h-10 w-full justify-center text-sm shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700">
        <svg
          className="h-5 w-5 self-center fill-current"
          viewBox="-13.5 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.48 11.84C1.12 11.84 0 10.72 0 9.36s1.12-2.48 2.48-2.48S4.96 8 4.96 9.36s-1.12 2.48-2.48 2.48zm0-3.28c-.44 0-.8.36-.8.8s.36.8.8.8.8-.36.8-.8c0-.44-.36-.8-.8-.8zm0 9.92C1.12 18.48 0 17.36 0 16s1.12-2.48 2.48-2.48S4.96 14.64 4.96 16s-1.12 2.48-2.48 2.48zm0-3.28c-.44 0-.8.36-.8.8s.36.8.8.8.8-.36.8-.8-.36-.8-.8-.8zm0 9.92C1.12 25.12 0 24 0 22.64s1.12-2.48 2.48-2.48 2.48 1.12 2.48 2.48c0 1.36-1.12 2.48-2.48 2.48zm0-3.28c-.44 0-.8.36-.8.8s.36.8.8.8.8-.36.8-.8-.36-.8-.8-.8z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute end-0 z-10 mt-1 w-40 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
          <div className="p-2">
            <button
              type="button"
              className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Add to My Day
            </button>

            <button
              type="button"
              className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Progress
            </button>

            <button
              type="button"
              className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Priority
            </button>

            <button
              type="button"
              className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Due Date
            </button>
          </div>

          <div className="p-2">
            <button
              onClick={() => handleTodoDelete(todo.id)}
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
