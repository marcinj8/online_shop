import React from 'react';

import { Button } from '../../shared/components/button';

const PurchasedList = ({
  updatedProducts,
  updateProducts,
  setUpdatedProducts,
}) => {

  const list = updatedProducts.map((item) => {
    return (
      <li key={item.id}>
        <h4>{item.title}</h4>
        <div>quantity: {item.quantity}</div>
        <Button
          template='-'
          disabled={item.quantity === 0}
          styled={{ width: '50px' }}
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
          styled={{ width: '50px' }}
          clicked={() =>
            updateProducts(item.id, 'add', updatedProducts, setUpdatedProducts)
          }
        />
        <Button
          template='delete'
          styled={{ background: 'pink' }}
          clicked={() =>
            updateProducts(
              item.id,
              'delete',
              updatedProducts,
              setUpdatedProducts
            )
          }
        />
      </li>
    );
  });

  return list;
};

export default PurchasedList;
