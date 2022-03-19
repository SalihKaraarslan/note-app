import axios from "axios";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Context } from "../context/Provider";

const Deleted = () => {
  const { deletedData, dispatch, users } = useContext(Context);

  const handleRestore = async (title, desc, token) => {
    try {
      const { data } = await axios.post(
        "/api/notes",
        {
          title,
          desc,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "REMOVE_DELETED_DATA",
        payload: title,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout title="Deleted Data">
      {users?.isAdmin ? (
        <div className="row justify-content-center">
          {deletedData.map((note, i) => (
            <div key={i} className="card mt-4 mx-3" style={{ width: "12rem" }}>
              <div className="card-body align-items-center">
                <h5 className="card-title d-flex justify-content-center">
                  {note.title}
                </h5>
                <p className="card-text">{note.desc}</p>

                <div className="d-flex justify-content-center ">
                  <button
                    onClick={() =>
                      handleRestore(note.title, note.desc, note.token)
                    }
                    type="button"
                    className="btn btn-outline-warning mt-2"
                  >
                    Restore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>You are not authorized </h2>
      )}
    </Layout>
  );
};

export default Deleted;
