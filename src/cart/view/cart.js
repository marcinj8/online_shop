import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AsyncView } from '../../shared/asyncView';
import { Button } from '../../shared/components/button';
import { Modal } from '../../shared/modal';
import PurchasedList from '../components/purchasedList';

import {
  getUserCart,
  toggleCartVisibility,
} from '../../store/actions/cartActions';
import { updateProducts, updateTotalCost } from '../data/cartData';

import {
  StyledCartContent,
  StyledCartTitle,
  StyledCartDescription,
  StyledCartTotal,
  StyledCartList,
} from './cart.scss';

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.user.userData);
  
  const [updatedProducts, setUpdatedProducts] = useState(null);
  const [updatedTotalCost, setUpdatedTotalCost] = useState(null);
  const dispatch = useDispatch();

  const purchasedItems = useMemo(() => {
    if (updatedProducts) {
      return (
        <PurchasedList
          updatedProducts={updatedProducts}
          updateProducts={updateProducts}
          setUpdatedProducts={setUpdatedProducts}
        />
      );
    } else {
      return [];
    }
  }, [updatedProducts]);
  
  useEffect(() => {
    if (
      cartState.userCart === null &&
      cartState.error === false &&
      cartState.loading === false &&
      userData &&
      userData.token
    ) {
      dispatch(getUserCart(userData.token));
    }
  }, [userData, cartState, dispatch]);

  useEffect(() => {
    if (cartState.userCart && cartState.userCart.products) {
      setUpdatedProducts(cartState.userCart.products);
      setUpdatedTotalCost(cartState.userCart.totalAmount);
    }
  }, [cartState.userCart]);

  useEffect(() => {
    if (updatedProducts) {
      updateTotalCost(updatedProducts, setUpdatedTotalCost);
    }
  }, [updatedProducts]);

  return (
    <Modal
      modalType='sticky'
      close={() => dispatch(toggleCartVisibility(false))}
      show={cartState.showCart}
      showAnimatonStyle={{
        type: 'slideHorizontally',
        side: 'left',
        duration: 0.4,
      }}
      hideAnimatonStyle={{
        type: 'slideHorizontally',
        side: 'left',
        duration: 0.2,
      }}
      zIndex='1000'
    >
      <StyledCartContent style={{ height: '60%', overflow: 'auto' }}>
        <AsyncView
          isLoading={cartState.loading}
          isError={cartState.error}
          errorMessage={cartState.errorMessage}
        />
        <StyledCartTitle>Cart</StyledCartTitle>
        {updatedProducts && updatedProducts.length ? (
          <StyledCartList>{purchasedItems}</StyledCartList>
        ) : (
          <StyledCartDescription> your cart is empty</StyledCartDescription>
        )}
        <StyledCartTotal>
          Total: {cartState.userCart && updatedTotalCost ? updatedTotalCost : 0}{' '}
          Eur
        </StyledCartTotal>
      </StyledCartContent>
      <Button
        buttonType='primary'
        disabled={updatedProducts === null}
        template='CONFIRM'
        styled={{ background: 'rgba(162, 222, 208, .6)' }}
        // clicked={purchaseItem} CONFIRM CHANGES
      />
      <Button
        buttonType='primary'
        styled={{
          color: 'red',
          position: 'absolute',
          background: 'pink',
          width: '40px',
          height: '40px',
        }}
        clicked={() => dispatch(toggleCartVisibility(false))}
        template='x'
      />
    </Modal>
  );
};

export default Cart;
