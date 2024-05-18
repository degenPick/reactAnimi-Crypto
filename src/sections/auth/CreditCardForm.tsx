import React from 'react';
import {
  Stack,
  IconButton,
  InputAdornment,
  Alert,
  Typography,
  Box,
  Divider,
  Button,
  SvgIcon,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import FormProvider, { RHFTextField, RHFSelect } from '../../components/hook-form';
import { useI18nContext } from '../../i18n/i18n-react';
import StripeInput from './components/StripeInput';

function CreditCardForm() {
  const { LL } = useI18nContext();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) return;

    const { error, paymentMethod: method } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  };

  return (
    <>
      <RHFTextField name="nameOnCard" label={LL.nameOnCard()} />
      <Box
        rowGap={3}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
      >
        <RHFTextField
          name="cardNumber"
          label={LL.cardNumber()}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputComponent: StripeInput,
            inputProps: {
              component: CardNumberElement,
              style: {
                color: 'white',
              },
            },
          }}
        />
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <RHFTextField
            name="expireDate"
            label={LL.expireDate()}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />
          <RHFTextField
            name="cvc"
            label="CVC"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement,
              },
            }}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
              color: '#fff',
            }}
            onClick={(e) => handleSubmit(e)}
          >
            {LL.registerOrder()}
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
}

export default CreditCardForm;
