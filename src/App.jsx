import TodoContextProvider from 'src/context/TodoContext.jsx';
import NavbarSidebarLayout from 'src/layout/NavbarSidebarLayout.jsx';

import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import Todo from './features/todos/components/Todo.jsx';

function App() {
  return (
    <>
      <NavbarSidebarLayout>
        <TodoContextProvider>
          <Todo />
        </TodoContextProvider>
      </NavbarSidebarLayout>
      {/*<main className="h-screen w-screen bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-800">*/}
      {/*  <div className="flex justify-center pt-10">*/}
      {/*    <ThemeSwitcher />*/}
      {/*  </div>*/}
      {/*  <div className="flex items-center justify-center font-medium">*/}
      {/*    <div className="flex h-full flex-grow items-start justify-center text-gray-600 dark:text-gray-400">*/}
      {/*      <div className="mt-10 w-2/5 max-w-full rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">*/}
      {/*        <TodoContextProvider>*/}
      {/*          <Todo />*/}
      {/*        </TodoContextProvider>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</main>*/}
    </>
  );
}

export default App;
