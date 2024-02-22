import useTodoContext from 'src/features/todos/hooks/useTodoContext.js';

import TodoForm from './TodoForm.jsx';
import TodoHeader from './TodoHeader.jsx';
import TodoList from './TodoList.jsx';

export default function Todo() {
  const { todos } = useTodoContext();
  const completedTodos = todos.filter((todo) => todo.isDone === true).length;
  const totalTodos = todos.length;
  return (
    <>
      <TodoHeader completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoForm />
      <TodoList />
    </>
  );
}
