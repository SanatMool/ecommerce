import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe wants price in cents
  const publishableKey =
    "pk_test_51HmN1oBkDhXwciRi8Ip1J20n7sEItkgsuqIcWOS8QcgDPJzGcT1IlOY3GZRcqFVf01w55Cf8Z2IhqndKUOA7oSvF00lXcQ0f89";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
