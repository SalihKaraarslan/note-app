import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Context } from "../context/Provider";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { users, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    router.push("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#6A5ACD" }}
    >
      <div className="d-flex container">
        <div className="ms-2">
          <Link href="/">
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        </div>

        <div className="collapse navbar-collapse justify-content-end me-5">
          {users?.isAdmin && (
            <div className="me-5">
              <Link href="/deleted">
                <a>
                  <div className="d-flex ">
                    <h4>Deleted Data</h4>
                  </div>
                </a>
              </Link>
            </div>
          )}

          <div className="me-5">
            <Link href="/add">
              <a>
                <div className="d-flex ">
                  <AddCircleOutlineOutlinedIcon
                    sx={{ fontSize: 35 }}
                    color="secendary"
                  />
                  <h4>Note</h4>
                </div>
              </a>
            </Link>
          </div>
          <div>
            {users ? (
              <LogoutIcon onClick={handleLogout} sx={{ fontSize: 30 }} />
            ) : (
              <Link href="/login">
                <a>
                  <h4>Login</h4>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
