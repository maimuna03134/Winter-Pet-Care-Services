import React, { use } from "react";
import userImg from '../assets/user.png'

import MyLink from "./link/MyLink";
import { Link } from "react-router";
import MyContainer from "./container/MyContainer";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log('user trying to logout')

    logOut().then(() => {
      toast.success("Your Logged Out successful!");
    }).catch((err) => {
      console.log(err.message);
    })
  }


  return (
    <div className="shadow-lg bg-base-100">
      <MyContainer className={"navbar"}>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-9999 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/services"}>Services</MyLink>
              </li>
              <li>
                <MyLink to={"/profile"}> My Profile</MyLink>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left py-1"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/auth/login" className="w-full text-left py-1 ">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/register" className="w-full text-left py-1">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className=" bg-linear-to-r from-orange-300 to-orange-100 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">🐱</span>
          </div>
          <a className="ml-2 font-bold text-xl text-[#031b4b]">WarmPaws</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
            <li>
              <MyLink to={"/services"}>Services</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}> My Profile</MyLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <div className="relative group">
            <img
              src={user?.photoURL || userImg}
              alt=""
              className="w-[35px] rounded-full"
            />

            {user && (
              <span className="absolute left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {user.displayName}
              </span>
            )}
          </div>
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-style hidden lg:flex items-center justify-center"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-style hidden lg:flex items-center justify-center "
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-style hidden lg:flex items-center justify-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
