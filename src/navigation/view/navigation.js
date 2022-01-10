import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NavigationItem } from '../components';
import { SideBar } from './';
import { Button } from '../../shared/components/button';

import { logoutUser } from '../../store/actions/userActions';
import { NavAnimations } from '../animations/';

import {
  NavigationStyled,
  StyledCartNavContainer,
  StyledPurchasedItemNumber,
} from './navigation.scss';
import { toggleCartVisibility } from '../../store/actions/cartActions';

const NAVIGATION_DATA = [
  {
    name: 'HOME',
    link: '/',
  },
  {
    name: 'SHOP',
    link: '/shop',
    conditions: { auth: true },
  },
  {
    name: 'PROFILE',
    link: '/profile',
    conditions: { auth: true },
  },
  {
    name: 'CONTACT',
    link: '/contact',
  },
  {
    name: 'AUTH',
    link: '/auth',
    conditions: { auth: false },
  },
];

const Navigation = () => {
  const navRef = useRef(null);
  const userState = useSelector((state) => state.user);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigationItems = NAVIGATION_DATA.map((navItem, i) => {
    return (
      <NavigationItem
        key={i}
        name={navItem.name}
        link={navItem.link}
        conditions={navItem.conditions}
      />
    );
  });

  const navigationContent = (
    <React.Fragment>
      {userState.userData && (
        <StyledCartNavContainer>
          {cartState.userCart && cartState.userCart.products.length > 0 && (
            <StyledPurchasedItemNumber>
              {cartState.userCart.products.length}
            </StyledPurchasedItemNumber>
          )}
          <Button
            clicked={() => dispatch(toggleCartVisibility(true))}
            template='cartIcon'
            buttonType='icon'
          />
        </StyledCartNavContainer>
      )}
      {navigationItems}
      {userState.userData && (
        <Button
          styled={{
            background: 'transparent',
            color: 'red',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textShadow: '0 0 2px white',
          }}
          template='logout'
          buttonType='inline'
          clicked={() => dispatch(logoutUser())}
        />
      )}
    </React.Fragment>
  );

  useEffect(() => {
    NavAnimations.setNavbarSticky(navRef.current);
  }, [navRef]);

  return (
    <React.Fragment>
      <NavigationStyled ref={navRef}>{navigationContent}</NavigationStyled>
      <SideBar>{navigationContent}</SideBar>
    </React.Fragment>
  );
};

export default Navigation;
