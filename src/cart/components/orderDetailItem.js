import React from 'react';

import { Input } from '../../shared/components/input';
import {
  StyledOrderDetailsListItem,
  StyledOrderDetailsDescription,
} from '../style/orderDetailItem.scss';

const OrderDatailItem = ({
  itemType,
  itemPlaceholder,
  itemName,
  itemVlaidators,
  isEditMode,
  formState,
  changeHandler,
  userCart,
}) => {

  // if (itemName === 'city' && formState.inputs && userCart) {
  //   console.log(formState.inputs, 'input||cart', userCart.addressOfDelivery);
  // }

  return (
    <StyledOrderDetailsListItem>
      <h5 style={{ marginLeft: '45px' }}>{itemPlaceholder.toUpperCase()}:</h5>
      {!isEditMode && (
        <StyledOrderDetailsDescription style={{}}>
          {userCart && userCart.addressOfDelivery !== undefined
            ? userCart.addressOfDelivery[itemName]
            : `Please type ${itemPlaceholder}.`}
        </StyledOrderDetailsDescription>
      )}
      {isEditMode && (
        <Input
          type={itemType}
          placeholder={itemPlaceholder}
          name={itemName}
          initialValue={formState.inputs[itemName].value}
          onInput={changeHandler}
          styled={{ margin: '10px 0' }}
          validators={itemVlaidators}
        />
      )}
    </StyledOrderDetailsListItem>
  );
};

export default OrderDatailItem;
