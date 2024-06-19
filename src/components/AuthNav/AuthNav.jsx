import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
