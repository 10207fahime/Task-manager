import { FilterTasks } from "../FilterTask/FilterTasks";
import { useContext } from "react";
import { ComponentContext } from "./../../../Context/ComponentContext";

export function ListTask({
  handleDeleteTask,
  handleToggleIsdone,
  filterHandler,
  filterList,
  handleSearchInput,
}) {
  const { filterTasks } = useContext(ComponentContext);
  return (
    <div style={{ height: "400px" }}>
      <h6 className="text-start mt-5 p-2">List of Tasks</h6>

      <FilterTasks
        filterHandler={filterHandler}
        handleSearchInput={handleSearchInput}
      />
      <div className="d-flex p-2 justify-content-between">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">UserName</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterTasks.map((row, index) => {
              return (
                <tr
                  key={index}
                  className={row.isdone ? "opacity-25" : "opacity-100"}
                >
                  <th scope="row">{index + 1}</th>

                  <td>{row.text}</td>
                  <td>{row.username}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger "
                      onClick={() => handleDeleteTask(row.id)}
                    >
                      {" "}
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary "
                      onClick={() => handleToggleIsdone(row.id)}
                    >
                      <i class="bi bi-check2-square"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
