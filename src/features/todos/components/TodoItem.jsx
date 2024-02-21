import { useState } from 'react';
import TodoCompleteCheckBox from 'src/components/SVGs/TodoCompleteCheckBox.jsx';

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

  function handleKeyDown(event, id) {
    if (event.key === 'Enter') {
      handleTodoComplete(id);
    }
  }

  return (
    <>
      <li>
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
          tabIndex={0} // TODO change to onClick for better user experience.
          onMouseEnter={() => setsOptionsVisible(!isOptionsVisible)}
          onMouseLeave={() => setsOptionsVisible(false)}
          className="todo-item flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-900">
          <span
            tabIndex={0}
            onClick={() => handleTodoComplete(todo.id)}
            onKeyDown={(e) => handleKeyDown(e, todo.id)}
            className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
            <TodoCompleteCheckBox />
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
