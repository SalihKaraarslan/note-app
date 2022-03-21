import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Context } from "../context/Provider";
import { useRouter } from "next/router";
import { fetchNotes } from "../functions";

export default function Home() {
  const { users } = useContext(Context);
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!users) {
      return router.push("/login");
    }
   
    fetchNotes(users?.token, setNotes);
  }, []);
 

  return (
    <Layout>
      <div className="row justify-content-center">
        {notes.map((note) => (
          <div
            key={note._id}
            className="card mt-4 mx-3"
            style={{ width: "12rem" }}
          >
            <div className="card-body align-items-center">
              <h5 className="card-title d-flex justify-content-center">
                {note.title}
              </h5>
              <p className="card-text">{note.desc}</p>

              <div className="d-flex justify-content-center ">
                <Link href={`/${note._id}`}>
                  <button
                    type="button"
                    className="btn btn-outline-warning mt-2"
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
