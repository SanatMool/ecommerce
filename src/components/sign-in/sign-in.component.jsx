import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";  ---> replacing with sagas
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  // ------------implementing useState hook
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  // constructor(props) {
  //   super(props);

  //   this.state = {         //--------------------replaced by react hooks
  //     email: "",
  //     password: "",
  //   };
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const { emailSignInStart } = this.props;  //--------------------replaced by react hooks
    const { email, password } = userCredentials;

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });                ---> replacing with sagas
    // } catch (error) {
    //   console.error(error);
    // }

    emailSignInStart(email, password); // ---> saga code
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    // this.setState({ [name]: value }); //--------------------replaced by react hooks

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
