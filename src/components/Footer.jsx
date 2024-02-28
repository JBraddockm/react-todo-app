export default function Footer() {
  return (
    <>
      <footer className="mx-4 my-6 rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6 xl:p-8">
        <ul className="mb-6 flex flex-wrap items-center space-y-1 md:mb-0">
          <li>
            <a
              href="#"
              className="mr-4 text-sm font-normal text-gray-500 hover:underline dark:text-gray-400 md:mr-6">
              Terms and conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-sm font-normal text-gray-500 hover:underline dark:text-gray-400 md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-3 sm:justify-center">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 8c0 .557-.447 1.008-1 1.008S8 8.558 8 8c0-.557.447-1.008 1-1.008S10 7.444 10 8zm0 2H8v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0V16H17v-3.359c0-3.284-3.128-3.164-4-1.548V10z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
      <p className="my-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Made with React.
      </p>
    </>
  );
}
