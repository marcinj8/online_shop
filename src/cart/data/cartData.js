import { makeCopy } from '../../utils/makeCopy';
import * as validators from '../../shared/components/input/validators';

export const formData = {
  fullName: {
    value: '',
    isValid: false,
    placeholder: 'full name',
    type: 'text',
    validators: [validators.VALIDATOR_REQUIRE()],
  },
  street: {
    value: '',
    isValid: false,
    placeholder: 'street',
    type: 'text',
    validators: [validators.VALIDATOR_REQUIRE()],
  },
  city: {
    value: '',
    isValid: false,
    placeholder: 'city',
    type: 'text',
    validators: [validators.VALIDATOR_REQUIRE()],
  },
  postalCode: {
    value: '',
    isValid: false,
    placeholder: 'postal code',
    type: 'number',
    validators: [
      validators.VALIDATOR_REQUIRE(),
      validators.VALIDATOR_MAXLENGTH(5),
      validators.VALIDATOR_MINLENGTH(5),
    ],
  },
  country: {
    value: '',
    isValid: false,
    placeholder: 'country',
    type: 'text',
    validators: [validators.VALIDATOR_REQUIRE()],
  },
  phone: {
    value: '',
    isValid: false,
    placeholder: 'phone number',
    type: 'number',
    validators: [validators.VALIDATOR_REQUIRE()],
  },
};

export const setInitialValues = (userCart, formState, setFormData) => {
  if (userCart && userCart.addressOfDelivery && !formState.isFormValid) {
    const initialValues = {};
    for (let property in userCart.addressOfDelivery) {
      initialValues[property] = {
        value: userCart.addressOfDelivery[property],
        isValid: true,
      };
    }

    setFormData(initialValues, true);
  }
};

const validateAddressOfDelivery = (addressOfDelivery) => {
  let isValid = true;
  let counter = 0;
  if (!addressOfDelivery || typeof addressOfDelivery !== 'object') {
    return false;
  }

  Object.keys(addressOfDelivery).forEach((element) => {
    isValid = isValid && !!addressOfDelivery[element];
    counter++;
  });

  if (counter !== 6) {
    isValid = false;
  }

  return isValid;
};

export const validateCart = (products, addressOfDelivery, payment) => {
  let isCartValid = {
    products: products.length > 0 ? true : false,
    addressOfDelivery: validateAddressOfDelivery(addressOfDelivery),
    payment: true,
  };

  return isCartValid;
};

export const checkIsCartValid = (validationArr) => {
  let isValid = true;
  for (let key in validationArr) {
    isValid = isValid && validationArr[key];
  }
  return isValid;
};

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

export const onLeaveChanges = (
  clearChanges,
  products,
  visibilityToggler,
  isCartVisible,
  dispatch
) => {
  const copiedProducts = makeCopy(products);
  clearChanges(copiedProducts);
  dispatch(visibilityToggler(isCartVisible));
};
