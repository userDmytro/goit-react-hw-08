import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

import { UserMenu } from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

import style from "./AppBar.module.css";
import { BiSolidContact } from "react-icons/bi";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={style.header}>
      <div className={style.logo}><BiSolidContact className={style.icon}/><p>ContactBook</p></div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
