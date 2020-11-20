import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// connect let's us modify our component to have access to things related to redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

// import {
// auth,
// createUserProfileDocument,
// addCollectionAndDocuments,
// } from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
// import { setCurrentUser } from "./redux/user/user.actions";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  // -------------replaced by useEffect hook
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // -------------replaced by useEffect hook
  // componentDidMount() {
  // -------------replaced by useEffect hook
  // const { checkUserSession } = this.props;

  // checkUserSession();

  //----------------replaced by saga
  // const { setCurrentUser } = this.props;
  // method takes parameter as user
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot((snapShot) => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       });
  //     });
  //   }
  //   setCurrentUser(userAuth);
  // addCollectionAndDocuments(
  //   "collections",
  //   collectionsArray.map(({ title, items }) => ({ title, items }))
  // );
  // });
  // }

  // -------------replaced by useEffect hook
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <Header />
      {/* switch will match slash first and not render anything after it  */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />

        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

// -----------------------replaced by reduxSaga
// const mapDispatchToProps = (dispatch) => ({
// dispatch() : is a way for redux to know that whatever object we are passing
// is going to be an action object that is going to passed to every reducer
// setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

//connect(arg1, arg2) : connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
