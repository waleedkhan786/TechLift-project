import React from "react";
import { useNavigate } from "react-router-dom";

function Update(props) {
  const navigate = useNavigate();
  const { handle, handler, updateApi } = props;
  return (
    <div className="container">
      <h2 className="text-center display-3">Edit Your Item</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateApi();
          navigate("/");
        }}
      >
        <label className="mt-5">Enter Title</label>
        <input
          value={handle.title}
          onChange={handler}
          required
          name="title"
          type="text"
          className="form-control"
        />

        <label>Enter Description</label>
        <input
          value={handle.desc}
          onChange={handler}
          required
          name="desc"
          type="text"
          className="form-control"
        />

        <label>Enter Price</label>
        <input
          value={handle.price}
          onChange={handler}
          required
          name="price"
          type="number"
          className="form-control"
        />

        <button className="btn btn-primary mt-3">Update Item</button>
      </form>
    </div>
  );
}

export default Update;
