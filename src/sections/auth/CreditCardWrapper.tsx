import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CreditCardForm from './CreditCardForm';

const stripe = loadStripe(
  'pk_test_51P3HZAHpPj1pjmr7UrVyy8B3sC2L4q826Hw4JcXs9RepPCLnBQs7ktaoZQt1Czx1n5zje2Udj4tPG2gOYHnCCjVm00U1zNdVsA'
);

function CreditCardWrapper() {
  return (
    <Elements stripe={stripe}>
      <CreditCardForm />
    </Elements>
  );
}

export default CreditCardWrapper;
