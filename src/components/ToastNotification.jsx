import { useEffect } from 'react';
import { CloseIcon } from 'src/components/SVGs';
import useToastNotificationContext from 'src/hooks/useToastNotificationContext.js';

export default function ToastNotification() {
  const { toasts, setToast } = useToastNotificationContext();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setToast((prevToasts) => {
        const newToasts = [...prevToasts];
        newToasts.pop();
        return newToasts;
      });
    }, 3000);

    return () => clearTimeout(timeOutId);
  }, [setToast, toasts]);

  return (
    <>
      <div className="absolute bottom-2 right-4 z-10 flex flex-col space-y-4 overflow-x-hidden">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            id="toast-undo"
            className="animate-slideIn flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow transition-transform duration-500 dark:bg-gray-800 dark:text-gray-400"
            role="alert">
            <div className="text-sm font-normal">{toast.message}</div>
            <div className="ms-auto flex items-center space-x-2 rtl:space-x-reverse">
              <button className="rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700">
                Undo
              </button>
              <button
                type="button"
                className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
                data-dismiss-target="#toast-undo"
                aria-label="Close">
                <span className="sr-only">Close</span>
                <CloseIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
