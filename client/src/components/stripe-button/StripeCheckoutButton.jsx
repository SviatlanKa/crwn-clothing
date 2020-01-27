import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_zNTAvNIfbLGeERdvOPMlZES9003gEkc6Tp";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            name="CRWN Clothing Ltd."
            label="Pay Now"
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            shippingAddress
            billingAddress
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;