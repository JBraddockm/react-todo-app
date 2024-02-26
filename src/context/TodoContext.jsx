import { createContext, useState } from 'react';
import TodoData from 'src/data/TodoData.js';

const initialData = TodoData()
  .sort((a, b) => b.id - a.id)
  .sort((a, b) => a.isDone - b.isDone);
export const TodoContext = createContext(null);

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(initialData);

  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
}
