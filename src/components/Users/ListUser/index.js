import { useContext } from "react";
import { ComponentContext } from "../../../Context/ComponentContext";
export function ListUser({ DeleteUserHandler }) {
  const { users } = useContext(ComponentContext);
  return (
    <>
      <h6 className="text-start mt-5 p-2">List of Users</h6>
      {users.map((item, index) => (
        <div
          className="card m-3 shadow-sm mb-2 bg-body rounded"
          style={{ height: "50px", padding: "8px" }}
        >
          <div className=" card-style " key={index}>
            <div className="d-flex justify-content-between">
              <span className="text-dark">{item.name}</span>

              <button
                className="btn  btn-sm"
                type="button"
                onClick={() => DeleteUserHandler(item.id)}
              >
                {" "}
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
