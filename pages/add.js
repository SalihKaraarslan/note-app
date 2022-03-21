import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Context } from "../context/Provider";
import { addNote } from "../context/apiCalls";
import dynamic from "next/dynamic";

const Add = () => {
  const router = useRouter();
  const { users } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (!users) {
      return router.push("/login");
    }
  }, []);

  return (
    <Layout>
      <div className="container p-5" style={{ width: "50%" }}>
        <div className="card mb-3">
          <div className="card-header">Add a New Note</div>
          <div className="card-body">
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
              <button
                onClick={() => addNote(title, desc, users?.token, router)}
                className="btn btn-outline-primary mt-3"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Add), { ssr: false });
