import { createSelector } from "reselect";

// input selector is a function that gets the whole state and just returns a slice of it (one layer deep)
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], //input
  (cart) => cart.cartItems //returns the value we want
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
