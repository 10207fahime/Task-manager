import { createContext, useReducer } from "react";
import { appReducer } from "../reducers/app/appReducer";
export const ComponentContext = createContext();

const ComponentContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    tasks: [],
    filterTasks: [],
    filterType: "all",
    filterSearch: "",
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <ComponentContext.Provider
      value={{ ...state, dispatch }}
      dispatch={dispatch}
    >
      {children}
    </ComponentContext.Provider>
  );
};
export default ComponentContextProvider;
