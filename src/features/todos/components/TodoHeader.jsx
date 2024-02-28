import { TodoHeaderLogo } from 'src/components/SVGs';

export default function TodoHeader({ completedTodos, totalTodos }) {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <TodoHeaderLogo />
          <h2 className="ml-3 text-lg font-semibold dark:text-gray-400">{`Today's Tasks`}</h2>
        </div>
        <div className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
          {completedTodos}/{totalTodos}
        </div>
      </div>
    </>
  );
}
