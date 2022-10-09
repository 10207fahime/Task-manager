import logo from "./logo.svg";
import "./App.css";
import { TaskManager } from "./components/TaskManager";
import { useReducer } from "react";
import AlertContextProvider from "./Context/AlertContext";
import ComponentContextProvider from "./Context/ComponentContext";

function App() {
  return (
    <div className="App">
      <ComponentContextProvider>
        <AlertContextProvider>
          <TaskManager />
        </AlertContextProvider>
      </ComponentContextProvider>
    </div>
  );
}

export default App;
