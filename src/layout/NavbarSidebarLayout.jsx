import Footer from 'src/components/Footer.jsx';
import { NavBar } from 'src/components/NavBar.jsx';
import Sidebar from 'src/components/Sidebar.jsx';

export default function NavbarSidebarLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="flex overflow-hidden bg-gray-50 pt-16 dark:bg-gray-900">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </>
  );
}

export function MainContent({ children }) {
  return (
    <>
      <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
        <main>
          <div className="px-4 pt-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}