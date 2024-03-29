import { MobileSearchForm } from 'src/components/aside/MobileSearchForm.jsx';
import {
  DashboardIcon,
  DropdownChevronIcon,
  GitHubIcon,
  ProjectIcon,
  SettingsIcon,
  UserIcon
} from 'src/components/SVGs';

export function NavigationMenu({ handleTodoDropdownClick, openDropdownId }) {
  return (
    <>
      <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
        <div className="flex-1 space-y-1 divide-y divide-gray-200 bg-white px-3 dark:divide-gray-700 dark:bg-gray-800">
          <ul className="space-y-2 pb-2">
            <li>
              <MobileSearchForm />
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <DashboardIcon />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li onClick={(e) => handleTodoDropdownClick(e)} id="dropdown-projects">
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <ProjectIcon />
                <span className="ml-3 flex-1 whitespace-nowrap text-left">Projects</span>
                <DropdownChevronIcon />
              </button>
              <ul
                className={`${openDropdownId !== 'dropdown-projects' ? 'hidden' : 'block'} space-y-2 py-2`}>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Add Project
                  </a>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleTodoDropdownClick(e)} id="dropdown-users">
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <UserIcon />
                <span className="ml-3 flex-1 whitespace-nowrap text-left">Users</span>
                <DropdownChevronIcon />
              </button>
              <ul
                className={`${openDropdownId !== 'dropdown-users' ? 'hidden' : 'block'} space-y-2 py-2`}>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ">
                    Add User
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ">
                <SettingsIcon
                  className={`h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}
                />
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
          <div className="space-y-2 pt-2">
            <a
              href="https://github.com/jbraddockm"
              target="_blank"
              className="group flex items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <GitHubIcon
                className={` flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}
              />
              <span className="ml-3">GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
