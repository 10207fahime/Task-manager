import { AddUser } from "./AddUser";
import { ListUser } from "./ListUser";
import { appActionTypes } from "../../reducers/app/appActionTypes";
import { Header } from "../Header";
import { useContext, useState, useEffect } from "react";
import { AlertContext } from "./../../Context/AlertContext";
import { ComponentContext } from "../../Context/ComponentContext";

export function Users() {
  const { users, dispatch } = useContext(ComponentContext);
  const { showAlert, closeAlert } = useContext(AlertContext);
  const [remainingTime, setRemainingTime] = useState(false);
  const [user, setUser] = useState();
  function clickHandler(param) {
    setRemainingTime(true);
    showAlert("success", "New user added successfully");
    dispatch({
      type: appActionTypes.ADD_USER,
      payload: {
        name: param,
        id: users.length + 1,
      },
    });
    setUser("");
  }

  function DeleteUserHandler(id) {
    dispatch({
      type: appActionTypes.DELETE_USER,
      payload: id,
    });
  }
  useEffect(() => {
    setTimeout(() => {}, 5000);
  }, [remainingTime]);
  return (
    <div className="col-lg-4 ">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <h2 className="text-start mt-5 p-2">Users</h2>
        <AddUser clickHandler={clickHandler} user={user} setUser={setUser} />
        <ListUser DeleteUserHandler={DeleteUserHandler} />
      </div>
    </div>
  );
}
