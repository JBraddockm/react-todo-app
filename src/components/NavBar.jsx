import ThemeSwitcher from 'src/components/ThemeSwitcher.jsx';

export function NavBar() {
  return (
    <>
      <nav className="fixed z-30 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden">
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a href="/" className="ml-2 flex fill-blue-500 dark:fill-white">
                <svg
                  className="mr-10 h-8"
                  viewBox="0 0 680 106"
                  width="200"
                  height="33"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M105.687 52.843c0 29.183-23.661 52.844-52.844 52.844 21.887 0 39.633-17.746 39.633-39.633 0-21.887-17.746-39.632-39.633-39.632-21.886 0-39.632 17.745-39.632 39.632 0 21.887 17.746 39.633 39.632 39.633C23.661 105.687 0 82.026 0 52.843 0 23.661 23.661 0 52.843 0c29.183 0 52.844 23.661 52.844 52.843Zm-52.844 0c-14.591 0-26.421 11.831-26.421 26.422 0 13.682 10.437 24.803 23.757 26.151-6.018-1.232-10.546-6.554-10.546-12.94 0-7.296 5.915-13.211 13.21-13.211 7.296 0 13.211 5.915 13.211 13.211 0 6.386-4.528 11.708-10.547 12.94 13.321-1.348 23.758-12.469 23.758-26.151 0-14.591-11.83-26.422-26.422-26.422ZM167.463 12.406v10.781h-18.438v52.125h-10.781V23.187h-18.5V12.406h47.719Zm15.718 62.906H172.4V30.375h10.781v44.937ZM172.4 23.187V12.406h10.781v10.781H172.4Zm48.625 38.719 7.656 7.656c-2.166 2.146-4.687 3.833-7.562 5.063-2.875 1.229-5.959 1.843-9.25 1.843-3.292 0-6.386-.614-9.281-1.843-2.875-1.23-5.386-2.917-7.532-5.063A23.847 23.847 0 0 1 189.963 62c-1.23-2.875-1.844-5.927-1.844-9.157 0-3.291.614-6.375 1.844-9.25a23.847 23.847 0 0 1 5.093-7.562c2.146-2.146 4.657-3.833 7.532-5.063 2.895-1.229 5.989-1.843 9.281-1.843 3.291 0 6.375.614 9.25 1.843 2.875 1.23 5.396 2.917 7.562 5.063l-7.656 7.656c-2.521-2.521-5.573-3.781-9.156-3.781-3.479 0-6.542 1.26-9.188 3.781-2.5 2.5-3.75 5.552-3.75 9.156 0 3.542 1.25 6.563 3.75 9.063 1.271 1.271 2.688 2.219 4.25 2.844 1.542.625 3.188.937 4.938.937 3.646 0 6.698-1.26 9.156-3.781Zm51.688-31.531-22.469 22.468 22.469 22.469h-15.188l-14.937-14.906v14.906h-10.782V12.406h10.782v32.781l14.843-14.812h15.282Zm41.625 27.843h-34.875a11.083 11.083 0 0 0 2.593 3.688c1.271 1.271 2.677 2.219 4.219 2.844 1.563.625 3.219.937 4.969.937 2.437 0 4.625-.562 6.562-1.687l11.219 4.468c-2.146 2.521-4.75 4.49-7.812 5.907-3.063 1.395-6.386 2.093-9.969 2.093-3.313 0-6.406-.614-9.281-1.843-2.875-1.23-5.386-2.917-7.532-5.063A23.847 23.847 0 0 1 269.338 62c-1.23-2.875-1.844-5.927-1.844-9.157 0-3.291.614-6.375 1.844-9.25a23.847 23.847 0 0 1 5.093-7.562c2.146-2.146 4.657-3.833 7.532-5.063 2.875-1.229 5.968-1.843 9.281-1.843 3.291 0 6.375.614 9.25 1.843 2.875 1.23 5.385 2.917 7.531 5.063a23.833 23.833 0 0 1 5.094 7.562c1.229 2.875 1.844 5.959 1.844 9.25 0 1.917-.209 3.709-.625 5.375Zm-23.094-18.312c-3.479 0-6.542 1.26-9.188 3.781-1.125 1.125-1.989 2.375-2.593 3.75h23.531c-.584-1.375-1.448-2.625-2.594-3.75-2.521-2.521-5.573-3.781-9.156-3.781Zm49.687 24.625 2.688 10.781h-9.875c-2.042 0-3.959-.385-5.75-1.156a15.054 15.054 0 0 1-4.688-3.219c-1.312-1.333-2.354-2.906-3.125-4.719-.791-1.791-1.187-3.708-1.187-5.75V21.281l10.781-2.688V35.75h6.313l2.687 10.812h-9v13.906c0 1.146.396 2.105 1.188 2.875.77.792 1.697 1.188 2.781 1.188h7.187Zm75.5-52.219h11.782v62.906h-10.782V30.625L396.65 62.718l-20.656-32.093v44.593h-10.781V12.312h11.781l19.656 30.563 19.781-30.563Zm53.407 17.969h10.781v45.031h-10.781V52.843c0-3.604-1.261-6.656-3.782-9.156-2.521-2.521-5.573-3.781-9.156-3.781-1.75 0-3.417.323-5 .969a12.99 12.99 0 0 0-4.187 2.812c-2.521 2.5-3.782 5.552-3.782 9.156 0 3.542 1.261 6.563 3.782 9.063a11.6 11.6 0 0 0 4.187 2.844c1.583.625 3.25.937 5 .937 1.792 0 3.406-.302 4.844-.906l3.875 9.625c-2.771 1.375-5.979 2.062-9.625 2.062-3.292 0-6.334-.614-9.125-1.843-2.792-1.23-5.209-2.917-7.25-5.063-2.021-2.167-3.604-4.687-4.75-7.562s-1.719-5.927-1.719-9.157c0-3.291.573-6.375 1.719-9.25 1.146-2.875 2.729-5.395 4.75-7.562 2.041-2.146 4.458-3.833 7.25-5.063 2.791-1.229 5.833-1.843 9.125-1.843 2.937 0 5.541.448 7.812 1.343 2.271.896 4.282 2.032 6.032 3.407v-3.594Zm34.593 17.156c.729.188 1.927.615 3.594 1.281 1.688.646 3.417 1.552 5.188 2.719 1.75 1.167 3.291 2.625 4.625 4.375 1.312 1.729 1.968 3.792 1.968 6.188 0 2.104-.343 4.02-1.031 5.75a13.28 13.28 0 0 1-3 4.593c-1.333 1.313-2.958 2.334-4.875 3.063-1.917.708-4.073 1.062-6.469 1.062-3.646 0-7.041-.656-10.187-1.968-3.146-1.313-5.677-2.927-7.594-4.844l7.438-7.469c1.562 1.854 3.229 3.052 5 3.594 1.77.542 3.25.812 4.437.812 1.875 0 3.26-.364 4.156-1.093.896-.709 1.344-1.573 1.344-2.594 0-.708-.302-1.333-.906-1.875a7.991 7.991 0 0 0-2.094-1.344 13.668 13.668 0 0 0-2.5-.875 24.675 24.675 0 0 1-2.062-.594 157.33 157.33 0 0 1-3.625-1.25c-1.709-.604-3.448-1.468-5.219-2.593a18.167 18.167 0 0 1-4.625-4.313c-1.313-1.75-1.969-3.854-1.969-6.312 0-2.5.427-4.667 1.281-6.5.875-1.834 2.032-3.344 3.469-4.532a13.83 13.83 0 0 1 4.938-2.656 19.052 19.052 0 0 1 5.75-.875c3.062 0 5.656.365 7.781 1.094 2.125.708 3.875 1.489 5.25 2.344 1.562 1.02 2.885 2.156 3.969 3.406l-7.563 7.562c-1.187-1.562-2.5-2.708-3.937-3.437a10.263 10.263 0 0 0-4.594-1.063c-1.25 0-2.49.302-3.719.907-1.229.583-1.844 1.541-1.844 2.875 0 .708.271 1.323.813 1.843.521.5 1.177.917 1.969 1.25.77.334 1.593.615 2.468.844.875.25 1.667.458 2.375.625Zm41.813 17.094 2.687 10.781h-9.875c-2.041 0-3.968-.385-5.781-1.156-1.792-.792-3.344-1.865-4.656-3.219-1.313-1.333-2.365-2.906-3.156-4.719-.771-1.791-1.157-3.708-1.157-5.75V21.281l10.782-2.688V35.75h6.281l2.719 10.812h-9v13.906c0 1.146.385 2.105 1.156 2.875.791.792 1.729 1.188 2.812 1.188h7.188Zm48.625-6.313h-34.875a10.514 10.514 0 0 0 2.594 3.688c1.27 1.271 2.677 2.219 4.218 2.844 1.563.625 3.219.937 4.969.937 2.438 0 4.625-.562 6.563-1.687l11.218 4.468a22.967 22.967 0 0 1-7.812 5.907c-3.063 1.395-6.386 2.093-9.969 2.093-3.312 0-6.406-.614-9.281-1.843-2.875-1.23-5.386-2.917-7.531-5.063A23.833 23.833 0 0 1 549.869 62c-1.229-2.875-1.844-5.927-1.844-9.157 0-3.291.615-6.375 1.844-9.25a23.833 23.833 0 0 1 5.094-7.562c2.145-2.146 4.656-3.833 7.531-5.063 2.875-1.229 5.969-1.843 9.281-1.843 3.292 0 6.375.614 9.25 1.843 2.875 1.23 5.385 2.917 7.531 5.063a23.833 23.833 0 0 1 5.094 7.562c1.229 2.875 1.844 5.959 1.844 9.25 0 1.917-.209 3.709-.625 5.375Zm-23.094-18.312c-3.479 0-6.542 1.26-9.187 3.781-1.146 1.125-2.011 2.375-2.594 3.75h23.531c-.583-1.375-1.448-2.625-2.594-3.75-2.521-2.521-5.573-3.781-9.156-3.781Zm39.438-6.125c1.687-1.375 3.593-2.511 5.718-3.406 2.125-.896 4.532-1.344 7.219-1.344v10.781c-3.583 0-6.635 1.261-9.156 3.781-2.521 2.625-3.781 5.677-3.781 9.157v22.562h-10.782V30.281h10.782v3.5Zm56.906-3.406h11.875l-20.875 44.937-2.781 6.125c-1.667 3.646-4.178 6.552-7.532 8.719-3.375 2.146-7.093 3.219-11.156 3.219h-4.781l2.719-10.782h2.593c1.75 0 3.365-.479 4.844-1.437a8.757 8.757 0 0 0 3.344-3.875l.906-1.969L626.4 30.375h11.875l14.906 32.187 14.938-32.187Z" />
                </svg>
              </a>
              <h1 className="sr-only text-gray-500 dark:text-white">Ticket Mastery</h1>
              <form action="#" method="GET" className="hidden lg:block lg:pl-3.5">
                <label htmlFor="topbar-search" className="sr-only text-gray-500 dark:text-white">
                  Search
                </label>
                <div className="relative mt-1 lg:w-96">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <div className="-mb-1 mr-3 hidden sm:block">
                <span />
              </div>
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden">
                <span className="sr-only">Search</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <div
                className="z-20 z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden rounded bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
                id="notification-dropdown"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: 0,
                  transform: 'translate3d(1348.8px, 64.8px, 0px)'
                }}
                data-popper-placement="bottom">
                <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  Notifications
                </div>
                <div>
                  <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://i.pravatar.cc/300"
                        alt="Robert Brown"
                      />
                      <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Robert Brown
                        </span>{' '}
                        posted a new video: Glassmorphism - learn how to implement the new design
                        trend.
                      </div>
                      <div className="text-primary-700 dark:text-primary-400 text-xs font-medium">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
                  <div className="inline-flex items-center ">
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View all
                  </div>
                </a>
              </div>
              <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                className="hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:flex">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <div
                className="z-20 z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden rounded bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
                id="apps-dropdown"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: 0,
                  transform: 'translate3d(1388.8px, 64.8px, 0px)'
                }}
                data-popper-placement="bottom">
                <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  Apps
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Sales</div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Users</div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Inbox</div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Profile</div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Settings
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                      <path
                        fillRule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Products
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Pricing</div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Billing</div>
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg
                      className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
                  </a>
                </div>
              </div>
              <ThemeSwitcher />
              <div className="ml-3 flex items-center">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button-2"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-2">
                    <span className="sr-only text-gray-200 dark:text-white">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://i.pravatar.cc/300"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                  id="dropdown-2"
                  style={{
                    position: 'absolute',
                    inset: '0px auto auto 0px',
                    margin: 0,
                    transform: 'translate3d(1476.8px, 60.8px, 0px)'
                  }}
                  data-popper-placement="bottom">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p
                      className="truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                      role="none">
                      neil.sims@example.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
