export function AddUser({ clickHandler, user, setUser }) {
  return (
    <div style={{ height: "150px" }}>
      <h6 className="text-start mt-5 p-2">Add Users</h6>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="افزودن کاربر جدید..."
          aria-label="Recipient's username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          aria-describedby="basic-addon2"
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={() => clickHandler(user)}
        >
          {" "}
          Add User
        </button>
      </div>
    </div>
  );
}
