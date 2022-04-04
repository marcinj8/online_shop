import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AsyncView } from "../../shared/asyncView";

import { fetchItems } from "../../store/actions/productsActions";
import { createList } from "../data";

import { StyledItemsListNav, StyledItemsList } from "./itemsList.scss";

const ItemsList = () => {
  const [itemsList, setItemsList] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productsState = useSelector((state) => state.products);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems);
  }, [dispatch]);

  useEffect(() => {
    if (productsState.productsList) {
      createList(
        productsState.productsList,
        selectedCategory,
        setItemsList,
        setCategories
      );
    }
  }, [
    productsState.productsList,
    selectedCategory,
    setItemsList,
    setCategories,
  ]);

  return (
    <React.Fragment>
      {!cartState.showCart && <AsyncView
        isLoading={productsState.loading}
        isError={productsState.error}
        errorMessage={productsState.errorMessage}
        hideBackdrop
      />}
      {!productsState.loading && !productsState.error && itemsList && (
        <React.Fragment>
          <div>
            <StyledItemsListNav>
              <label htmlFor="shopCategories">Category </label>
              <select
                value={selectedCategory}
                id="shopCategories"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </StyledItemsListNav>
            <StyledItemsList>{itemsList}</StyledItemsList>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default ItemsList;
