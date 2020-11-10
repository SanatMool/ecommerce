import { createSelector } from "reselect";

// input selector is a function that gets the whole state and just returns a slice of it (one layer deep)
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], //input
  (cart) => cart.cartItems //returns the value we want
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden //cart is cart reducer
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

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
