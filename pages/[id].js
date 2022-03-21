import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Context } from "../context/Provider";
import useFetch from "../hooks/useFetch";
import { editNote, removeNote } from "../functions";

const Edit = () => {
  const router = useRouter();
  const { users, dispatch } = useContext(Context);
  const { loading, data, error } = useFetch(
    `http://localhost:3000/api/notes/${router.query.id}`,
    users?.token
  );
  const [newTitle, setNewTitle] = useState(data.title);
  const [newDesc, setNewDesc] = useState(data.desc);

  useEffect(() => {
    setNewTitle(data.title);
    setNewDesc(data.desc);
  }, [data]);

  return (
    <Layout title="Edit Page">
      <div className="container p-5" style={{ width: "50%" }}>
        <div className="card mb-3">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h4>Edit Note</h4>
            <button
              onClick={() =>
                removeNote(
                  data._id,
                  newTitle,
                  newDesc,
                  users?.token,
                  dispatch,
                  router
                )
              }
              className="btn btn-sm btn-outline-danger"
            >
              Remove Note
            </button>
          </div>

          <div className="card-body">
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
              <button
                onClick={() =>
                  editNote(newTitle, newDesc, router, users?.token)
                }
                className="btn btn-outline-primary mt-3"
              >
                Edit Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
