import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, title = "Note App" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar title={title} />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
