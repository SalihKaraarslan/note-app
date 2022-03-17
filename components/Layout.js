import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, title = "Note App" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title} />

      <main className="container mt-5" style={{ width: "90%" }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
