import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//state is root reducer.... mapStateToProps(state => ())
//destructuring the state/root reducer ---> cart
//mapStateToProps = ({ cart is cartReducer --> access the INITIAL_STATE})
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// if second parameter (disptach) is not passed in connect
// connect will pass dispatch as props in component
export default withRouter(connect(mapStateToProps)(CartDropdown));
