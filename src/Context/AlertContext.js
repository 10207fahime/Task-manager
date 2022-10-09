import { createContext, useState } from "react";
import { TaskManager } from "../components/TaskManager";
import { AlertComponent } from "./../components/AlertComponent/index";

export const AlertContext = createContext();
const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState();
  const showAlert = (type, message) => {
    setAlert({ type, message });
  };
  const closeAlert = () => {
    setAlert();
  };
  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      {children}
      {alert && <AlertComponent alert={alert} closeAlert={closeAlert} />}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
