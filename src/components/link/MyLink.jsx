import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white font-semibold bg-linear-to-br from-orange-400 to-orange-600 "
          : `${className} font-semibold text-orange-600`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
