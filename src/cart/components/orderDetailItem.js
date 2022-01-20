import React from 'react';

import { Input } from '../../shared/components/input';
import {
  StyledOrderDetailsListItem,
  StyledOrderDetailsDescription,
} from './OrderDetailItem.scss';

const OrderDatailItem = ({
  itemType,
  itemPlaceholder,
  itemName,
  itemVlaidators,
  isEditMode,
  formState,
  changeHandler,
}) => {

  return (
    <StyledOrderDetailsListItem>
      <h5 style={{ marginLeft: '45px' }}>{itemPlaceholder.toUpperCase()}:</h5>
      {!isEditMode && (
        <StyledOrderDetailsDescription style={{}}>
          {formState.inputs[itemName].value
            ? formState.inputs[itemName].value
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
          styled={{margin: '10px 0'}}
          validators={itemVlaidators}
        />
      )}
    </StyledOrderDetailsListItem>
  );
};

export default OrderDatailItem;
