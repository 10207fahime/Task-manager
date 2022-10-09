export function FilterTasks({ filterType, filterHandler, handleSearchInput }) {
  const filterTask = ["all", "inprogress", "done"];
  return (
    <div className="d-flex p-2 justify-content-between">
      <div>
        {filterTask.map((item) => (
          <button
            type="button"
            className="btn btn-primary   px-5"
            onClick={() => filterHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div class="input-group rounded w-25">
        <input
          type="search"
          class="form-control rounded"
          placeholder="filter by username"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
}
