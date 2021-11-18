const incraseQuantity = (productsUpdated, productIndex, setUpdatedProducts) => {
  const product = productsUpdated[productIndex];
  product.quantity = product.quantity + 1;
  productsUpdated[productIndex] = product;
  setUpdatedProducts(productsUpdated);
};

const decraseQuantity = (productsUpdated, productIndex, setUpdatedProducts) => {
  const product = productsUpdated[productIndex];
  if (product.quantity === 0) {
    return;
  }
  product.quantity = product.quantity - 1;
  productsUpdated[productIndex] = product;
  console.log(productsUpdated);
  setUpdatedProducts(productsUpdated);
};

const deleteItem = (productsUpdated, productIndex, setUpdatedProducts) => {
  productsUpdated.splice(productIndex, 1);
  console.log(productsUpdated);
  setUpdatedProducts(productsUpdated);
};

export const updateProducts = (
  id,
  action,
  updatedProducts,
  setUpdatedProducts
) => {
  const productsUpdated = [...updatedProducts];
  const productIndex = productsUpdated.findIndex((item) => item.id === id);

  switch (action) {
    case 'add':
      return incraseQuantity(productsUpdated, productIndex, setUpdatedProducts);
    case 'subtract':
      return decraseQuantity(productsUpdated, productIndex, setUpdatedProducts);
    case 'delete':
      return deleteItem(productsUpdated, productIndex, setUpdatedProducts);
    default:
      return productsUpdated;
  }
};

export const updateTotalCost = (updatedProducts, setUpdatedTotalCost) => {
    let totalCostUpdated = 0;
    updatedProducts.forEach((item) => {
      totalCostUpdated =
        Math.round((totalCostUpdated + item.price * item.quantity) * 100) / 100;
    });
    setUpdatedTotalCost(totalCostUpdated);
  };