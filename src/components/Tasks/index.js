import { AddTask } from "./AddTask";
import { ListTask } from "./ListTask/index";
import { appActionTypes } from "./../../reducers/app/appActionTypes";
import { useEffect, useState, useContext } from "react";
import { ComponentContext } from "./../../Context/ComponentContext";
import { AlertContext } from "./../../Context/AlertContext";
export function Tasks() {
  const { tasks, users, filterType, filterSearch, dispatch, filterTasks } =
    useContext(ComponentContext);
  const { showAlert, closeAlert } = useContext(AlertContext);
  const [value, setValue] = useState({ text: "", id: "" });
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    dispatch({ type: appActionTypes.FILTER_LIST });
  }, [tasks, filterType, filterSearch]);

  function handleAddTask(param) {
    showAlert("success", "New task added successfully");
    let findName = users.find((item) => item.id == param.id);
    dispatch({
      type: appActionTypes.ADD_TASK,
      payload: {
        text: param.text,
        username: findName.name,
        isdone: false,
        id: tasks.length + 1,
      },
    });
    setValue({ text: "", id: "" });
  }
  function handleDeleteTask(id) {
    dispatch({
      type: appActionTypes.DELETE_TASK,
      payload: id,
    });
  }
  function handleToggleIsdone(id) {
    let target = tasks;
    const newToggle = target.find((item) => item.id === id);
    console.log("dd", newToggle);
    newToggle.isdone = !newToggle.isdone;
    dispatch({
      type: appActionTypes.DONE_TASK,
      payload: target,
    });
  }
  function filterHandler(param) {
    console.log(filterType, "uu");
    dispatch({
      type: appActionTypes.SET_FILTER,
      payload: param,
    });
    console.log(filterTasks, "oooo");
  }
  function handleSearchInput(param) {
    dispatch({
      type: appActionTypes.SET_SEARCH,
      payload: param,
    });
  }
  return (
    <div className="col-lg-8">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <AddTask
          handleAddTask={handleAddTask}
          value={value}
          setValue={setValue}
        />
        <ListTask
          handleDeleteTask={handleDeleteTask}
          handleToggleIsdone={handleToggleIsdone}
          filterHandler={filterHandler}
          filrerList={filterList}
          setFilterList={setFilterList}
          handleSearchInput={handleSearchInput}
        />
      </div>
    </div>
  );
}
