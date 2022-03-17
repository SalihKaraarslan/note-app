import React, { useState } from "react";
import Layout from "../components/Layout";

const Edit = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  console.log(newTitle, newDesc);

  const removeNote = () => {
    console.log("delte");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("submşt");
  };

  return (
    <Layout>
      <div className="container p-5" style={{ width: "50%" }}>
        <div className="card mb-3">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h4>Edit Note</h4>
            <button
              onClick={removeNote}
              className="btn btn-sm btn-outline-danger"
            >
              Remove Note
            </button>
          </div>

          <div className="card-body">
            <form onSubmit={handleEdit}>
              <div className="form-group">
                <input
                  value={newTitle || ""}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  value={newDesc || ""}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary mt-3">
                  Edit Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
