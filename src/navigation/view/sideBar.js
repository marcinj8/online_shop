import React, { useRef, useEffect, useState } from 'react';

import { Backdrop } from '../../shared/modal';

import { SideBarStyled, BurgerStyled, StyledHeaderSideBar } from './navigation.scss';
import { NavAnimations } from '../animations';
import { Button } from '../../shared/components/button';

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
      <Backdrop show={showSideBar} close={() => setShowSideBar(false)}
        hideMin='800px'
      />
      <SideBarStyled ref={sideBarRef}>
        <StyledHeaderSideBar>Online Shopping</StyledHeaderSideBar>
        {children}
        <Button
          buttonType='inline'
          template='close'
          styled={{
            color: 'red',
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            width: '150px',
            transform: 'translateX(-50%)'
          }}
          clicked={() => setShowSideBar(false)}
        />
      </SideBarStyled>
    </React.Fragment>
  );
};

export default SideBar;
