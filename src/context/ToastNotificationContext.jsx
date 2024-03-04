import { createContext, useState } from 'react';

export const ToastNotificationContext = createContext(null);
export default function ToastNotificationContextProvider({ children }) {
  const [toasts, setToast] = useState([]);

  return (
    <ToastNotificationContext.Provider value={{ toasts, setToast }}>
      {children}
    </ToastNotificationContext.Provider>
  );
}
