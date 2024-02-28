import { useRef, useState } from 'react';
import { TodoDeleteIcon, TodoDropdownOptionIcon } from 'src/components/SVGs';
import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';
import useClickOutside from 'src/hooks/useClickOutside.jsx';

export default function TodoItemDropdown({ todo, handleTodoDelete }) {
  const { todos, setTodos } = useTodoContext();
  const dropdownRef = useRef(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useClickOutside(dropdownRef, setOpenDropdownId);

  const handleTodoDropdownClick = () => {
    if (openDropdownId === todo.id) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(todo.id);
    }
  };

  function handleKeyDown(event, id) {
    if (event.key === 'Enter') {
      setOpenDropdownId(id);
    }
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e, todo.id)}
      ref={dropdownRef}
      className="todo-dropdown relative inline-block">
      <button
        onClick={() => handleTodoDropdownClick()}
        type="button"
        className="inline-flex h-10 w-full justify-center text-sm text-gray-600 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:text-gray-300">
        <TodoDropdownOptionIcon />
      </button>
      {openDropdownId === todo.id && (
        <div className="absolute end-0 z-10 mt-1 w-40 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
          <div tabIndex={0} className="p-2">
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
