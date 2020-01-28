import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_zNTAvNIfbLGeERdvOPMlZES9003gEkc6Tp";

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ' + error);
            alert('There was an issue with your payment. Please sure you use the provided credit card.')
        });
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