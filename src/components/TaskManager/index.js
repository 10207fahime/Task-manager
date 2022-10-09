import { useReducer, useContext } from "react";
import { Users } from "./../Users/index";
import { Tasks } from "./../Tasks/index";
import { ComponentContext } from "../../Context/ComponentContext";

export function TaskManager() {
  const { users, tasks, filterTasks, filterType, filterSearch } =
    useContext(ComponentContext);
  return (
    <div className="">
      <div className="row d-flex col-lg-12">
        <Users />
        <Tasks />
      </div>
    </div>
  );
}
