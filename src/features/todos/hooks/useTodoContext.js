import { useContext } from 'react';
import { TodoContext } from 'src/context/TodoContext.jsx';

// TODO This could be moved to common hooks directory in the future.
export default function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoContext should be used within TodoContextProvider');
  }
  return context;
}
