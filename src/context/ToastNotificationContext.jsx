import { createContext, useEffect, useReducer } from 'react';
import { ToastErrorIcon, ToastSuccessIcon } from 'src/components/SVGs';

export const ToastNotificationContext = createContext(null);

function tasksReducer(toasts, action) {
  switch (action.type) {
    case 'success': {
      return [
        ...toasts,
        {
          id: toasts.length + 1,
          message: action.message,
          style: 'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200',
          icon: <ToastSuccessIcon />
        }
      ];
    }
    case 'danger': {
      return [
        ...toasts,
        {
          id: toasts.length + 1,
          message: action.message,
          style: 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200',
          icon: <ToastErrorIcon />
        }
      ];
    }
    case 'remove': {
      const newToasts = [...toasts];
      newToasts.pop();
      return newToasts;
    }
    default: {
      throw Error(`Unknown action:  ${action.type}`);
    }
  }
}

export default function ToastNotificationContextProvider({ children }) {
  const [toasts, toastDispatch] = useReducer(tasksReducer, [], () => []);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      toastDispatch({ type: 'remove' });
    }, 3000);

    return () => clearTimeout(timeOutId);
  }, [toasts, toastDispatch]);

  return (
    <ToastNotificationContext.Provider value={{ toasts, toastDispatch }}>
      {children}
    </ToastNotificationContext.Provider>
  );
}
