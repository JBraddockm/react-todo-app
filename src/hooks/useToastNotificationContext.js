import { useContext } from 'react';
import { ToastNotificationContext } from 'src/context/ToastNotificationContext.jsx';

export default function useToastNotificationContext() {
  const context = useContext(ToastNotificationContext);

  if (!context) {
    throw new Error(
      'ToastNotificationContext must be used within ToastNotificationContextProvider'
    );
  }

  return context;
}
