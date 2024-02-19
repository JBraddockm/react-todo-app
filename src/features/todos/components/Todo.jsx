import { useState } from 'react';

import TodoForm from './TodoForm.jsx';
import TodoHeader from './TodoHeader.jsx';
import TodoList from './TodoList.jsx';

// TODO Use context to avoid props drilling
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.isDone === true).length;
  const totalTodos = todos.length;
  return (
    <>
      <TodoHeader completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
