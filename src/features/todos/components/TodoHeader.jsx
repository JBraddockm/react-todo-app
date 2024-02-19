export default function TodoHeader({ completedTodos, totalTodos }) {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 stroke-current text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <path
              fill="none"
              fillRule="evenodd"
              d="m20.215 2.387-8.258 10.547-2.704-3.092a1 1 0 1 0-1.506 1.316l3.103 3.548a1.5 1.5 0 0 0 2.31-.063L21.79 3.62a1 1 0 1 0-1.575-1.233zM20 11a1 1 0 0 0-1 1v6.077c0 .459-.021.57-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5a.5.5 0 0 1 .5-.5l8.5.004a1 1 0 1 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.42-.224.754-.558.978-.977.236-.442.318-.866.318-1.627V12a1 1 0 0 0-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <h4 className="ml-3 text-lg font-semibold">{`Today's Tasks`}</h4>
        </div>
        <div className="flex items-center">
          {completedTodos}/{totalTodos}
        </div>
      </div>
    </>
  );
}
