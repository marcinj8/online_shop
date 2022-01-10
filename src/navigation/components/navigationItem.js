import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavigationItemStyled } from "./navigationItem.scss";

const NavigationItem = ({ name, link, conditions }) => {
  const userState = useSelector((state) => state.user);

  const linkRef = useRef(null);
  const activeLink = {
    textDecoration: "underline",
    textShadow: '0 0 3px black',
    color: "rgb(0, 212, 155)",
    fontWeight: "bold",
  };

  const clicked = () => {
    linkRef.current.click();
  };

  if (conditions) {
    if (conditions.auth && !userState.userData) {
      return null;
    }
    if (!conditions.auth && userState.userData) {
        return null;
      }
  }

  return (
    <NavigationItemStyled onClick={clicked}>
      <NavLink exact ref={linkRef} activeStyle={activeLink} to={link}>
        {name}
      </NavLink>
    </NavigationItemStyled>
  );
};

export default NavigationItem;
