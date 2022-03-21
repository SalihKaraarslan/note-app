import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Context } from "../context/Provider";
import { editNote, fetchNote, removeNote } from "../context/apiCalls";

const Edit = () => {
  const router = useRouter();
  const { users, dispatch } = useContext(Context);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [noteId, setNoteId] = useState();

  useEffect(() => {
    if (!users) {
      router.push("/login");
    } else {
      fetchNote(
        router.query.id,
        users?.token,
        setNewTitle,
        setNewDesc,
        setNoteId,
        dispatch
      );
    }
  }, []);

  return (
    <Layout title="Edit Page">
      <div className="container p-5" style={{ width: "50%" }}>
        <div className="card mb-3">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h4>Edit Note</h4>
            <button
              onClick={() =>
                removeNote(
                  noteId,
                  newTitle,
                  newDesc,
                  users?.token,
                  router,
                  dispatch
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
