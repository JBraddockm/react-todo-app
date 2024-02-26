import { TodoHeaderLogo } from 'src/components/SVGs';

export default function TodoHeader({ completedTodos, totalTodos }) {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <TodoHeaderLogo />
          <h4 className="ml-3 text-lg font-semibold">{`Today's Tasks`}</h4>
        </div>
        <div className="flex items-center">
          {completedTodos}/{totalTodos}
        </div>
      </div>
    </>
  );
}
