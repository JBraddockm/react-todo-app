import { CloseIcon } from 'src/components/SVGs';
import useToastNotificationContext from 'src/hooks/useToastNotificationContext.js';
import cn from 'src/utils/twMerge.js';

export default function ToastNotification() {
  const { toasts } = useToastNotificationContext();

  return (
    <>
      <div className="absolute bottom-2 right-4 z-10 flex flex-col space-y-4 overflow-x-hidden">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            id="toast-success"
            className="animate-slideIn mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
            role="alert">
            <div
              className={cn(
                `inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200`,
                toast.style
              )}>
              {toast.icon}
              <span className="sr-only">{`${toast.type} icon`}</span>
            </div>
            <div className="ms-3 text-sm font-normal">{toast.message}</div>
            <button
              type="button"
              className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
              data-dismiss-target="#toast-success"
              aria-label="Close">
              <span className="sr-only">Close</span>
              <CloseIcon />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
