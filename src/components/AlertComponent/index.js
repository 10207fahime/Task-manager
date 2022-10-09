export function AlertComponent({ alert, closeAlert }) {
  return (
    <>
      <div className="alert-style-success d-flex justify-content-between">
        <span>{alert.message}</span>

        <button className="btn  btn-sm" type="button" onClick={closeAlert}>
          {" "}
          x
        </button>
      </div>
    </>
  );
}
