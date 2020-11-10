import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//state is root reducer.... mapStateToProps(state => ())
//destructuring the state/root reducer ---> cart
//mapStateToProps = ({ cart is cartReducer --> access the INITIAL_STATE})
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
