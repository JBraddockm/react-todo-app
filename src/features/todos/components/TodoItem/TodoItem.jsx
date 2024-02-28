import { useState } from 'react';
import dayjs from 'dayjs';
import { TodoCompleteCheckBoxIcon } from 'src/components/SVGs';
import TodoItemModal from 'src/features/todos/components/TodoItem/TodoItemModal.jsx';
import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';

import TodoItemDropdown from './TodoItemDropdown.jsx';

export default function TodoItem({ todo }) {
  const { todos, setTodos } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

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

  function handleKeyDown(event, id) {
    if (event.key === 'Enter') {
      handleTodoComplete(id);
    }
  }

  function handleTodoEdit(e, id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name: e.target.value, updatedAt: dayjs().unix() };
        } else {
          return todo;
        }
      })
    );
  }

  function handleTodoDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <li className="border-t-[1px] border-gray-600">
        <label
          htmlFor={`todo-${todo.id}`}
          className="sr-only text-gray-500 dark:text-white"
          aria-hidden="true">
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
          className="todo-item flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-900">
          <span
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleTodoComplete(todo.id);
            }}
            onKeyDown={(e) => handleKeyDown(e, todo.id)}
            className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
            <TodoCompleteCheckBoxIcon />
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
              setIsTodoModalOpen(true);
            }}
            className="ml-4 mr-auto whitespace-nowrap p-4 text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">
            {todo.name}
          </span>
          <TodoItemDropdown todo={todo} handleTodoDelete={handleTodoDelete} />
        </div>
        {isEditing && (
          <TodoItemModal
            {...{
              todo,
              isTodoModalOpen,
              setIsTodoModalOpen,
              handleTodoComplete,
              handleTodoDelete,
              handleTodoEdit
            }}
          />
        )}
      </li>
    </>
  );
}
