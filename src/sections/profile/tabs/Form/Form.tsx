import React, { FC } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import StripeInput from 'src/sections/auth/components/StripeInput';
import { CardFields } from '../PaymentForm.enumerations';
import { EMPTY_STRING, COPY } from '../PaymentForm.constants';
import { formatToSixteenDigitsAndSpaces } from './Form.utils';
import { useStyles } from './Form.styles';

import type { FormProps } from './Form.types';

export const Form: FC<FormProps> = (props) => {
  const { errors, handleChange, handleSubmit, setFieldValue, touched, values } = props;

  const { classes } = useStyles();

  const formatCardValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // setFieldValue(CardFields.CardNumber, formatToSixteenDigitsAndSpaces(value));
  };

  return (
    <Grid item xs={12} md={12} lg={12}>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2" color="text.secondary">
              {COPY.CardNameLabel}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" color="text.secondary">
              {COPY.CardNumberLabel}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle2" color="text.secondary">
              Exp. Date (MM/DD)
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle2" color="text.secondary">
              {COPY.CardCvcLabel}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              error={Boolean(touched[CardFields.CardName] && errors[CardFields.CardName])}
              helperText={touched[CardFields.CardName] && errors[CardFields.CardName]}
              id={CardFields.CardName}
              name={CardFields.CardName}
              onChange={handleChange}
              placeholder={COPY.CardNamePlaceholder}
              type="text"
              fullWidth
              value={values[CardFields.CardName] ?? EMPTY_STRING}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={Boolean(touched[CardFields.CardNumber] && errors[CardFields.CardNumber])}
              helperText={touched[CardFields.CardNumber] && errors[CardFields.CardNumber]}
              id={CardFields.CardNumber}
              name={CardFields.CardNumber}
              placeholder={COPY.CardNumberPlaceholder}
              type="text"
              fullWidth
              // value={values[CardFields.CardNumber] ?? EMPTY_STRING}
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
          </Grid>

          <Grid item xs={2}>
            <TextField
              error={Boolean(
                touched[CardFields.ExpirationMonth] && errors[CardFields.ExpirationMonth]
              )}
              helperText={touched[CardFields.ExpirationMonth] && errors[CardFields.ExpirationMonth]}
              id={CardFields.ExpirationMonth}
              inputProps={{ maxLength: 2 }}
              name={CardFields.ExpirationMonth}
              fullWidth
              variant="outlined"
              InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                  component: CardExpiryElement,
                },
              }}
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              error={Boolean(touched[CardFields.Cvc] && errors[CardFields.Cvc])}
              fullWidth
              helperText={touched[CardFields.Cvc] && errors[CardFields.Cvc]}
              id={CardFields.Cvc}
              inputProps={{ maxLength: 4 }}
              name={CardFields.Cvc}
              placeholder={COPY.CvcPlaceholder}
              variant="outlined"
              InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                  component: CardCvcElement,
                },
              }}
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
