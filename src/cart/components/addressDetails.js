import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../shared/components/button';
import { useForm } from '../../shared/hooks/form-hook';
import OrderDatailItem from './orderDetailItem';

import { updateAddressOfDelivery } from '../../store/actions/cartActions';

import { formData, setInitialValues } from '../data/cartData';

import { rollUp } from '../../shared/animations/onHideAnimation';
import { rollDown } from '../../shared/animations/onShowAnimation';
import OrderDetailsControllers from './orderDetailsControllers';

import {
  StyledAddressData,
  StyledOrderDetailsList,
} from '../style/addressDetails.scss';

const OrderDetails = ({ show }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const addressDataRef = useRef(null);

  // const show = useSelector((state) => state.cart.showCart);
  const userCart = useSelector((state) => state.cart.userCart);
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const { formState, changeHandler, setFormData, clearFormData } = useForm(
    formData,
    false
  );

  const orderDetailsList = Object.keys(formData).map((item) => (
    <OrderDatailItem
      key={item}
      itemType={formData[item].type}
      userCart={userCart}
      itemPlaceholder={formData[item].placeholder}
      itemName={item}
      itemVlaidators={formData[item].validators}
      isEditMode={isEditMode}
      formState={formState}
      changeHandler={changeHandler}
    />
  ));

  const toggleEditor = () => {
    setShowDetails((prevState) => !prevState);
    setIsEditMode(false);
  };

  useEffect(() => {
    setInitialValues(userCart, formState, setFormData);
  }, [userCart, formState, setFormData]);

  useEffect(() => {
    if (!show) {
      setShowDetails(false);
    }
  }, [show]);

  useEffect(() => {
    if (showDetails) {
      rollDown(addressDataRef.current, 0.15);
    } else {
      rollUp(addressDataRef.current, 0.15);
    }
  }, [addressDataRef, showDetails]);

  if (!show) {
    return null;
  }

  return (
    <React.Fragment>
      <StyledAddressData ref={addressDataRef} show={showDetails}>
        <h4>address of delivery</h4>
        <StyledOrderDetailsList>{orderDetailsList}</StyledOrderDetailsList>
        <OrderDetailsControllers
          isEditMode={isEditMode}
          isFormValid={formState.isFormValid}
          setIsEditMode={setIsEditMode}
          onConfirmAddressChanges={() => {
            setIsEditMode(false);
            dispatch(updateAddressOfDelivery(formState.inputs, user));
          }}
          onCancel={() => {
            setIsEditMode(false);
            clearFormData();
          }}
        />
      </StyledAddressData>
      <Button
        buttonType='primary'
        template={showDetails ? 'hide' : 'show'}
        styled={{
          background: showDetails ? 'pink' : 'rgba(162,222,208,.6)',
          margin: '3px auto 20px auto',
        }}
        clicked={toggleEditor}
      />
    </React.Fragment>
  );
};

export default OrderDetails;
