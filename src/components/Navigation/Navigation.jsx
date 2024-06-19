import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
