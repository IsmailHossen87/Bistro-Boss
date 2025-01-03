import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCard from "../Hooks/useCard";

const Navbar = () => {
  const [cart] = useCard();
  const { logOut, user } = useContext(Authcontext);
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Success!",
        text: "User logOut successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  };
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/menu">Menu</Link>{" "}
      </li>
      <li>
        <Link to="/order/salad">Order</Link>{" "}
      </li>
      <li>
        <Link to="/register">Register</Link>{" "}
      </li>
      <li>
        <Link to="/deshboard/cart">
          <button className="btn">
            <FaCartShopping />
            <div className="badge badge-secondary -mt-3">+{cart.length}</div>
          </button>
        </Link>{" "}
      </li>

      {user ? (
        <>
          <div className="flex items-center space-x-4">
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-50 bg-opacity-30 container mx-auto bg-black  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-xl">BistroBoss</a>
        </div>
        <div className="navbar-center text-white hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
