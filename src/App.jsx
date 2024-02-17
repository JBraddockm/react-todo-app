import ThemeSwitcher from './components/ThemeSwitcher.jsx';

function App() {
  return (
    <>
      <main className="h-screen w-screen bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-800">
        <div className="flex justify-center pt-10">
          <ThemeSwitcher />
        </div>
        <div className="flex items-center justify-center font-medium">
          <div className="flex h-full flex-grow items-start justify-center text-gray-600 dark:text-gray-400">
            <div className="mt-10 w-2/5 max-w-full rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
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
                  {`0`}/{`0`}
                </div>
              </div>
              <form className="mt-2 flex h-8 w-full items-center rounded px-2 text-sm font-medium">
                <svg
                  className="h-5 w-5 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <input
                  className="ml-4 h-8 flex-grow bg-transparent font-medium focus:outline-none"
                  type="text"
                  placeholder="add a new task..."
                />
              </form>
              <div>
                <input className="hidden" type="checkbox" checked />
                <label className="flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
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
                  <span className="ml-4 text-sm">Task 1.</span>
                </label>
              </div>
              <div>
                <input className="hidden" type="checkbox" />
                <label className="flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-500 text-transparent">
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
                  <span className="ml-4 text-sm">Task 2.</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
