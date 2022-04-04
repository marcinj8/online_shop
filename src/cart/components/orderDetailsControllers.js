import React from 'react';

import { Button } from '../../shared/components/button';

const OrderDetailsControllers = ({
  isEditMode,
  isFormValid,
  setIsEditMode,
  onConfirmAddressChanges,
  onCancel
}) => {
  return (
    <React.Fragment>
      {isEditMode && (
        <Button
          buttonType='inline'
          template='confirm'
          showEnableAnimation
          disabled={!isFormValid}
          styled={{ color: 'green' }}
          clicked={onConfirmAddressChanges}
        />
      )}
      {isEditMode && (
        <Button
          buttonType='inline'
          template='cancel'
          styled={{ color: 'red' }}
          clicked={onCancel}
        />
      )}
      {!isEditMode && (
        <Button
          buttonType='primary'
          template='edit'
          styled={{ background: 'rgba(162,222,208,.6)', margin: '20px auto' }}
          clicked={() => setIsEditMode(true)}
        />
      )}
    </React.Fragment>
  );
};

export default OrderDetailsControllers;
