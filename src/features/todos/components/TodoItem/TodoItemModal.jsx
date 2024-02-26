import { useRef, useState } from 'react';
import {
  CloseIcon,
  TodoCompleteCheckBoxIcon,
  TodoDeleteIcon,
  TodoDropdownOptionIcon
} from 'src/components/SVGs';
import useClickOutside from 'src/hooks/useClickOutside.jsx';

export default function TodoItemModal({
  todo,
  isTodoModalOpen,
  setIsTodoModalOpen,
  handleTodoComplete,
  handleTodoDelete,
  handleTodoEdit
}) {
  const [isOptionMoreOpen, setIsOptionMoreOpen] = useState(false);
  const optionMoreRef = useRef(null);

  useClickOutside(optionMoreRef, setIsOptionMoreOpen);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex ${!isTodoModalOpen && `hidden`} h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-brightness-50 backdrop-opacity-60 md:inset-0`}>
        {isTodoModalOpen && (
          <div className="relative max-h-full w-full max-w-2xl p-4">
            <div className="relative rounded-lg border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-800">
              <div className="relative flex items-center justify-between gap-1 rounded-t border-b p-2 dark:border-gray-600 md:p-2">
                <div ref={optionMoreRef} className="relative ms-auto inline-flex">
                  <button
                    onClick={() => setIsOptionMoreOpen(!isOptionMoreOpen)}
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                    <TodoDropdownOptionIcon className={`rotate-90`} />
                    <span className="sr-only">Todo Options</span>
                  </button>
                  {isOptionMoreOpen && (
                    <div className="absolute right-0.5 top-8 z-20 mt-1 w-44 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
                      <div className="p-2">
                        <button
                          type="button"
                          className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                          Copy Task
                        </button>

                        <button
                          type="button"
                          className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                          Move Task
                        </button>

                        <button
                          type="button"
                          className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                          Copy Link to Task
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
                <button
                  onClick={() => {
                    setIsTodoModalOpen(!isTodoModalOpen);
                    setIsOptionMoreOpen(false);
                  }}
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                  <CloseIcon />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="space-y-4 p-4 md:p-5">
                <label htmlFor={`todo-${todo.id}`} className="hidden" aria-hidden="true">
                  Complete Task
                </label>
                <input
                  id={`todo-${todo.id}`}
                  className="hidden"
                  type="checkbox"
                  readOnly
                  checked={todo.isDone}
                />
                <div
                  tabIndex={0}
                  className="todo-item flex h-10 cursor-pointer items-center rounded">
                  <span
                    tabIndex={0}
                    onClick={() => handleTodoComplete(todo.id)}
                    className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
                    <TodoCompleteCheckBoxIcon />
                  </span>
                  <input
                    onChange={(e) => handleTodoEdit(e, todo.id)}
                    className="ml-2 h-10 w-full border border-transparent bg-transparent p-2.5 px-2 text-base hover:rounded-lg hover:border-gray-500 focus:rounded-lg focus:bg-gray-50 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-white"
                    value={todo.name}></input>
                </div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Notes
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Type a description or add notes here..."></textarea>
              </div>
              <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  I accept
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  Decline
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
