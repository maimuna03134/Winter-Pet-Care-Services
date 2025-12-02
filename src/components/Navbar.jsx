import React, { use } from "react";
import userImg from "../assets/user.png";
import MyLink from "./link/MyLink";
import { Link } from "react-router";
import MyContainer from "./container/MyContainer";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { GoHomeFill } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaDollarSign, FaEnvelope, FaInfoCircle, FaUser } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log('user trying to logout')

    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-base-100">
        <MyContainer className={"navbar"}>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <MyLink to={"/"}>
                    <GoHomeFill /> Home
                  </MyLink>
                </li>
                <li>
                  <MyLink to={"/services"}>
                    <MdMiscellaneousServices /> Services
                  </MyLink>
                </li>
                <li>
                  <MyLink to={"/services"}>
                    <FaInfoCircle /> About Us
                  </MyLink>
                </li>
                <li>
                  <MyLink to={"/services"}>
                    <FaDollarSign /> Pricing
                  </MyLink>
                </li>
                <li>
                  <MyLink to={"/services"}>
                    <FaEnvelope /> Contact
                  </MyLink>
                </li>
                {user && (
                  <li>
                    <MyLink to={"/profile"}>
                      <FaUser /> My Profile
                    </MyLink>
                  </li>
                )}

                {user ? (
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left py-1 flex items-center gap-2"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/auth/login"
                        className="w-full text-left py-1 flex items-center gao-2"
                      >
                        <IoLogIn /> Login
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
            <ul className="menu menu-horizontal px-2">
              <li>
                <MyLink to={"/"}>
                  <GoHomeFill /> Home
                </MyLink>
              </li>
              <li>
                <MyLink to={"/services"}>
                  <MdMiscellaneousServices /> Services
                </MyLink>
              </li>
              <li>
                <MyLink to={"/about-us"}>
                  <FaInfoCircle /> About Us
                </MyLink>
              </li>
              <li>
                <MyLink to={"/pricing"}>
                  <FaDollarSign /> Pricing
                </MyLink>
              </li>
              <li>
                <MyLink to={"/contact"}>
                  <FaEnvelope /> Contact
                </MyLink>
              </li>
              {/* {user && (
              <li>
                <MyLink to={"/profile"}>
                  <FaUser /> My Profile
                </MyLink>
              </li>
            )} */}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 border-2 border-gray-300 rounded-full">
                    <img
                      alt="User avatar"
                      src={user?.photoURL || userImg}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <div className="pb-3 border-b border-b-gray-200">
                    <li className="text-sm font-bold px-4 py-1">
                      {user.displayName}
                    </li>
                    <li className="text-xs px-4">{user.email}</li>
                  </div>
                  <li className="mt-3">
                    <Link to={"/profile"}>
                      <FaUser /> Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-xs text-left bg-linear-to-r from-orange-400 to-orange-600 text-white border-none"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-sm rounded-full bg-linear-to-r from-orange-400 to-orange-600 text-white border-none"
              >
                <IoLogIn /> Login
              </Link>
            )}
          </div>
        </MyContainer>
      </div>
      {/* Spacer div to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
