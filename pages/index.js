import { useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Context } from "../context/Provider";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home({ notes }) {
  const { users } = useContext(Context);
  const router = useRouter();

  console.log(notes);

  useEffect(() => {
    if (!users) {
      router.push("/login");
    }
  }, []);

  return (
    <Layout>
      {!users ? (
        <h1>Please login to view the page</h1>
      ) : (
        <div className="row justify-content-center">
          <div className="card mt-4 mx-3" style={{ width: "12rem" }}>
            <div className="card-body align-items-center">
              <h5 className="card-title d-flex justify-content-center">
                başlık
              </h5>
              <p className="card-text">açıklama</p>

              <div className="d-flex justify-content-center ">
                <Link href="/">
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
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:3000/api/notes");
  return {
    props: {
      notes: data,
    },
  };
}
