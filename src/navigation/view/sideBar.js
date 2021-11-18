import React, { useRef, useEffect, useState } from "react";

import { Backdrop } from "../../shared/modal";

import { SideBarStyled, BurgerStyled } from "./navigation.scss";
import { NavAnimations } from "../animations";

const SideBar = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const sideBarRef = useRef(null);

  useEffect(() => {
    if (showSideBar) {
      NavAnimations.showNavigation(sideBarRef.current);
    } else {
      NavAnimations.hideNavigation(sideBarRef.current);
    }
  }, [sideBarRef, showSideBar]);

  return (
    <React.Fragment>
      <BurgerStyled onClick={() => setShowSideBar(true)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <Backdrop show={showSideBar} close={() => setShowSideBar(false)} />
      <SideBarStyled ref={sideBarRef}>
        <h2>
          Online Shopping
        </h2>
        {children}
        <button
          style={{
            height: "50px",
            outline: "none",
            border: "none",
            color: "red",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => setShowSideBar(false)}
        >
          CLOSE
        </button>
      </SideBarStyled>
    </React.Fragment>
  );
};

export default SideBar;
