import React from "react";
import Nav from "../Nav/Nav";
import RootClasses from "./root.module.scss";

const Root = () => {
  return (
    <div id="root">
      <Nav />
      <div id={RootClasses.content}>hello</div>
    </div>
  );
};

export default Root;
