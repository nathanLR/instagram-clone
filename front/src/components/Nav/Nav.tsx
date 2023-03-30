import React from "react";
import { Link } from "react-router-dom";
import Logo from "../global/Logo";
import NavClasses from "./nav.module.scss";
import { homeIcon, createIcon, discoverIcon, messagesIcon } from "../../assets/images/SVGIcons";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className={NavClasses.navContainer}>
      <div className={NavClasses.navWrapper}>
        <div className={NavClasses.logo}>
          <Link to={"/"}>
            <Logo maxWidth={102} />
          </Link>
        </div>
        <nav>
          <NavLink link="" text="Home" icon={homeIcon} />
          <NavLink link="" text="Discover" icon={discoverIcon} />
          <NavLink link="" text="Messages" icon={messagesIcon} />
          <NavLink link="" text="Create" icon={createIcon} />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
