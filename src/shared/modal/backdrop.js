import React from 'react';

import styled from 'styled-components';

const BackdropStyled = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);
z-index: ${(props) => props.zIndex || 90};
`;

const SideBar = ({ show, close, zIndex, hideMin }) => {
  if (!show) {
    return null;
  }

  return <BackdropStyled zIndex={zIndex} onClick={close} hideMin={hideMin} />;
};

export default SideBar;
