import React, { createContext, useContext, useState, ReactNode } from 'react';
import AlertManager from './AlertManager';
import { IAlertOptions } from './types';


interface AlertContextType {
  showAlert: (options: IAlertOptions) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [alertOptions, setAlertOptions] = useState<IAlertOptions | null>(null);

  const showAlert = (options: IAlertOptions) => {
    setAlertOptions(options);
  };

  const hideAlert = () => {
    setAlertOptions(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alertOptions && <AlertManager options={alertOptions} closeAlert={hideAlert} />}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};