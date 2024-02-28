import { useRef, useState } from 'react';
import dayjs from 'dayjs';
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
              {/* Modal Header */}
              <div className="relative flex items-center justify-between gap-1 rounded-t border-b p-2 dark:border-gray-600 md:p-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {todo.updatedAt &&
                    `Last changed ${dayjs.unix(todo.updatedAt).format('DD/MM/YYYY HH:mm:ss')}`}
                </span>
                <div ref={optionMoreRef} className="relative ms-auto inline-flex">
                  <button
                    onClick={() => setIsOptionMoreOpen(!isOptionMoreOpen)}
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
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
                  <span className="sr-only text-gray-500 dark:text-white">Close modal</span>
                </button>
              </div>
              {/* Modal Body */}
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
                    className="ml-2 h-10 w-full border border-transparent bg-transparent p-2.5 px-2 text-sm text-gray-500 hover:rounded-lg hover:border-gray-500 focus:rounded-lg focus:bg-gray-50 dark:text-gray-400 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-white"
                    value={todo.name}></input>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="bucket"
                      className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Bucket
                    </label>

                    <select
                      name="bucket"
                      id="bucket"
                      className="mt-1 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500">
                      <option value="Project name">To do</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="progress"
                      className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Progress
                    </label>
                    <select
                      name="progress"
                      id="progress"
                      className="mt-1 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500">
                      <option value="Not started">Not started</option>
                      <option value="In progress">In progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Priority
                    </label>

                    <select
                      name="priority"
                      id="priority"
                      className="mt-1 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500">
                      <option value="">Urgent</option>
                      <option value="JM">Important</option>
                      <option value="SRV" selected>
                        Medium
                      </option>
                      <option value="JH">Low</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Start Date
                    </label>

                    <input
                      id="startDate"
                      type="date"
                      name="startDate"
                      className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dueDate"
                      className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Due Date
                    </label>

                    <input
                      id="dueDate"
                      type="date"
                      name="dueDate"
                      className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400">
                  Notes
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Type a description or add notes here..."></textarea>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
