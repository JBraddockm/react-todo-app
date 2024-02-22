import { useEffect, useRef, useState } from 'react';
import TodoDeleteIcon from 'src/components/SVGs/TodoDeleteIcon.jsx';
import TodoDropdownOptionIcon from 'src/components/SVGs/TodoDropdownOptionIcon.jsx';
import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';

export default function TodoItemDropdown({ todo }) {
  const { todos, setTodos } = useTodoContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTodoDropdownClick = (e) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };
  const handleClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleTodoDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <div className="todo-dropdown relative inline-block">
      <button
        ref={dropdownRef}
        onClick={(e) => handleTodoDropdownClick(e)}
        type="button"
        className="inline-flex h-10 w-full justify-center text-sm shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700">
        <TodoDropdownOptionIcon />
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
              <TodoDeleteIcon />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
