import React from "react";
// connect let's us modify our component to have access to things related to redux
import { connect } from "react-redux";

//automatically pass top level state that we get as mapStateToProps
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//state is root reducer.... mapStateToProps(state => ())
//destructuring the state/root reducer ---> user, cart
//mapStateToProps = ({ user is userReducer --> access the INITIAL_STATE, cart is cartReducer --> access the INITIAL_STATE})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

// connect (mapStateToProps, mapDispatchToProps) is higher order component,
// higher order component (HOC) is a function that takes component as arguments and return new component

// if second parameter (disptach) is not passed in connect
// connect will pass dispatch as props in component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
