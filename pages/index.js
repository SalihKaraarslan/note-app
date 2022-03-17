import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="card mt-4 mx-3" style={{ width: "12rem" }}>
          <div className="card-body align-items-center">
            <h5 className="card-title d-flex justify-content-center">başlık</h5>
            <p className="card-text">açıklama</p>

            <div className="d-flex justify-content-center ">
              <Link href="/">
                <button type="button" className="btn btn-outline-warning mt-2">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
