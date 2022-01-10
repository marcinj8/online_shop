import { validateCart } from '../../cart/data/cartData';

export class UserCart {
  constructor(userId, id, products, totalCost, addressOfDelivery) {
    this.userId = userId;
    this.id = id;
    this.products = products;
    this.totalCost = totalCost;
    this.addressOfDelivery = addressOfDelivery;
    this.cartValidation = validateCart(products, addressOfDelivery, true);
  }
}
