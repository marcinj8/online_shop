import React from 'react';

import * as Styled from '../style/navigation.scss';

const NavigationItem = ({ isActive, clicked, label }) => {
  const onClickAction = isActive ? clicked : () => false;
 
  return (
    <Styled.StyledMyProfileNavigationItem isActive={isActive} onClick={onClickAction}>
      {label}
    </Styled.StyledMyProfileNavigationItem>
  );
};

const MyProfileNavigation = (props) => {
  const { currentView, setCurrentView } = props;

  const navigationItems = ['user', 'orders'].map((item) => (
    <NavigationItem
      key={item}
      isActive={currentView !== item}
      clicked={() => setCurrentView(item)}
      label={item}
    />
  ));

  return (
    <Styled.StyledMyProfileNavigation>
      <Styled.StyledMyProfileTitle>my profile</Styled.StyledMyProfileTitle>
      <Styled.StyledMyProfileNavigationItems>
        {navigationItems}
      </Styled.StyledMyProfileNavigationItems>
    </Styled.StyledMyProfileNavigation>
  );
};

export default MyProfileNavigation;
