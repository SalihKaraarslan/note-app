import React, { useState } from "react";
import Layout from "../components/Layout";

const Add = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  console.log(title, desc);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submittttt");
  };

  return (
    <Layout>
      <div className="container p-5" style={{ width: "50%" }}>
        <div className="card mb-3">
          <div className="card-header">Add a New Note</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary mt-3" type="submit">
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
