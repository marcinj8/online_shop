import React from "react";

import styled from "styled-components";

const SideBar = ({ show, close, zIndex }) => {
  if (!show) {
    return null;
  }
  const BackdropStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: ${props => props.zIndex || 90};
  `;
  return <BackdropStyled zIndex={zIndex} onClick={close} />;
};

export default SideBar;
