import React from "react";
import "./MenuMobile.scss";

function MenuMobile({ data, onClick, active }) {
  const classes = ["navbar-item", active === data.id ? "active" : ""];

  return (
    <a href={data.link} onClick={onClick} className={classes.join(" ")}>
      {data.name}
    </a>
  );
}

export default MenuMobile;
