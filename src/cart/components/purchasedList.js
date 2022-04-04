import React from 'react';

import { Button } from '../../shared/components/button';

import {
  SyledItemListCart,
  SyledItemListTitleCart,
} from '../style/purchasedList.scss';

const PurchasedList = ({
  updatedProducts,
  updateProducts,
  setUpdatedProducts,
}) => {
  const list = [];
  updatedProducts.forEach((item) => {
    if (item.quantity >= 1) {
      list.push(
        <SyledItemListCart key={item.id}>
          <SyledItemListTitleCart>{item.title}</SyledItemListTitleCart>
          <div>quantity: {item.quantity}</div>
          <Button
            template='-'
            disabled={item.quantity === 0}
            styled={{ width: '50px', margin: '5px' }}
            clicked={() =>
              updateProducts(
                item.id,
                'subtract',
                updatedProducts,
                setUpdatedProducts
              )
            }
          />
          <Button
            template='+'
            styled={{ width: '50px', margin: '5px' }}
            clicked={() =>
              updateProducts(
                item.id,
                'add',
                updatedProducts,
                setUpdatedProducts
              )
            }
          />
          <Button
            template='delete'
            styled={{ background: 'pink', margin: '5px' }}
            clicked={() =>
              updateProducts(
                item.id,
                'delete',
                updatedProducts,
                setUpdatedProducts
              )
            }
          />
        </SyledItemListCart>
      );
    }
  });

  return list;
};

export default PurchasedList;
