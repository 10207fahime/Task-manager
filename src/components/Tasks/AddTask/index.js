import { useContext } from "react";
import { ComponentContext } from "./../../../Context/ComponentContext";
export function AddTask({ handleAddTask, value, setValue }) {
  const { users } = useContext(ComponentContext);
  return (
    <>
      <h2
        className="text-start mt-5 p-2 "
        style={{ borderBottom: "1px solid gray" }}
      >
        Tasks
      </h2>
      <div style={{ height: "150px" }}>
        <h6 className="text-start mt-5 p-2">Add Task</h6>
        <div className="card d-flex mt-3 flex-row justify-content-start">
          <input
            className="form-control w-50"
            type="text"
            placeholder="افزودن کار جدید..."
            onChange={(e) => setValue({ ...value, text: e.target.value })}
            value={value.text}
          />
          <select
            className="form-select w-25"
            aria-label="Default select example"
            onChange={(e) => setValue({ ...value, id: e.target.value })}
          >
            <option value="">please select a user</option>
            {users.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-primary   px-4 "
            onClick={() => handleAddTask(value)}
          >
            Mention
          </button>
        </div>
      </div>
    </>
  );
}
