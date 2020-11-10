import React from "react";
import { Link } from "react-router-dom";
// connect let's us modify our component to have access to things related to redux
import { connect } from "react-redux";

//automatically pass top level state that we get as mapStateToProps
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//state is root reducer.... mapStateToProps(state => ())
//destructuring the state/root reducer ---> user, cart
//mapStateToProps = ({ user is userReducer --> access the INITIAL_STATE, cart is cartReducer --> access the INITIAL_STATE})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// connect (mapStateToProps, mapDispatchToProps) is higher order component,
// higher order component (HOC) is a function that takes component as arguments and return new component

// if second parameter (disptach) is not passed in connect
// connect will pass dispatch as props in component
export default connect(mapStateToProps)(Header);
