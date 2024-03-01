import TodoContextProvider from 'src/context/TodoContext.jsx';
import NavbarSidebarLayout from 'src/layout/NavbarSidebarLayout.jsx';

import Todo from './features/todos/components/Todo.jsx';

function App() {
  return (
    <>
      <NavbarSidebarLayout>
        <TodoContextProvider>
          <Todo />
        </TodoContextProvider>
      </NavbarSidebarLayout>
    </>
  );
}

export default App;
