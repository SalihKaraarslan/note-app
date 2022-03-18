import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

const Edit = ({ note }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(note.title);
  const [newDesc, setNewDesc] = useState(note.desc);

  const removeNote = async (id) => {
    try {
      await axios.delete(`api/notes/${id}`);
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/notes/${router.query.id}`, {
        desc: newDesc,
        title: newTitle,
      });
      router.push("/");
      alert("edit başarılı");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout title="Edit Page">
      <div className="container p-5" style={{ width: "50%" }}>
        <div className="card mb-3">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h4>Edit Note</h4>
            <button
              onClick={() => removeNote(note._id)}
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

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/notes/${context.query.id}`
  );

  return {
    props: {
      note: data,
    },
  };
};
