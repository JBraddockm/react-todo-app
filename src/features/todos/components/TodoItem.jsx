export default function TodoItem({ todo, todos, setTodos }) {
  function handleClick(id) {
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
        <input className="hidden" type="checkbox" readOnly checked={todo.isDone} />
        <label className="flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-900">
          <span
            onClick={() => handleClick(todo.id)}
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
          <span className="ml-4 text-sm">{todo.name}</span>
        </label>
      </li>
    </>
  );
}
