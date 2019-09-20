export function addToCart(item) {
  return {
    type: '@cart/ADD_TO_CART',
    item,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
