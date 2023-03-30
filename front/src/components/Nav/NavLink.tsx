import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import NavLinkCLasses from "./navLink.module.scss";

type NavLinkPropsType = {
  link: string;
  text: string;
  icon?: ReactNode;
};

const NavLink = ({ link, text, icon }: NavLinkPropsType) => {
  return (
    <div>
      <Link to={link}>
        <div className={NavLinkCLasses.navLink}>
          <div>{icon}</div>
          <div className={NavLinkCLasses.navLink_text}>{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default NavLink;
