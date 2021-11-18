import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../shared/components/button";

import { addItemToCart } from "../../store/actions/cartActions";
import ItemCard from "./itemCard";

import * as StyledElementes from "./listItem.scss";

const ListItem = ({ id, selectedCategory }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const findItem = (state, id) => {
    const item = state.products.productsList.find((item) => item.id === id);
    return item;
  };

  const itemData = useSelector((state) => findItem(state, id));
  const userData = useSelector((state) => state.user.userData);
  const { title, price, category, image } = itemData;
  const dispatch = useDispatch();

  const changeQuantity = (isAdd = false) => {
    if (isAdd) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const purchaseItem = () => {
    const addedItem = { ...itemData, quantity };
    dispatch(addItemToCart(addedItem, userData.token));
  };

  if (selectedCategory !== "all" && selectedCategory !== category) {
    return null;
  }
  const buttonStyled = { width: "50px" };

  return (
    <React.Fragment>
      <ItemCard
        show={showDetails}
        item={itemData}
        close={() => setShowDetails(false)}
      />
      <StyledElementes.ListItemStyled>
        <StyledElementes.ListItemHeaderStyled>
          <h4>{title}</h4>
        </StyledElementes.ListItemHeaderStyled>
        <StyledElementes.ListItemDataStyled>
          <StyledElementes.ListItemImageStyled src={image} />
          <StyledElementes.ListItemPurchaseDataStyled>
            <div>
              <div>Quantity: {quantity}</div>
              <Button
                template="-"
                disabled={quantity < 1 ? true : false}
                styled={{ ...buttonStyled }}
                clicked={() => changeQuantity(false)}
              />
              <Button
                template="+"
                styled={{ ...buttonStyled }}
                clicked={() => changeQuantity(true)}
              />
            </div>
            <div>Price: {price} EUR</div>
            <div>Category: {category}</div>
          </StyledElementes.ListItemPurchaseDataStyled>
        </StyledElementes.ListItemDataStyled>
        <Button
          template="details"
          clicked={() => setShowDetails(!showDetails)}
        />
        <Button
          template="BUY"
          disabled={quantity < 1 ? true : false}
          clicked={purchaseItem}
        />
      </StyledElementes.ListItemStyled>
    </React.Fragment>
  );
};

export default ListItem;
