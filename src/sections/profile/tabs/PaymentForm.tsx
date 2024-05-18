import React, { useEffect } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { useFormContext, Controller } from 'react-hook-form';
import {
  TextField,
  InputAdornment,
  Grid,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CREDIT_CARD_VALIDATION_SCHEMA, INITIAL_VALUES } from './PaymentForm.constants';
import { useStyles } from './PaymentForm.styles';
import { Form } from './Form/Form';

const stripe = loadStripe(
  'pk_test_51P3HZAHpPj1pjmr7UrVyy8B3sC2L4q826Hw4JcXs9RepPCLnBQs7ktaoZQt1Czx1n5zje2Udj4tPG2gOYHnCCjVm00U1zNdVsA'
);

const PaymentForm = () => {
  const { classes } = useStyles();
  const { errors, handleChange, handleSubmit, setFieldValue, touched, values } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (_values) => {
      console.log(JSON.stringify(_values, null, 2));
    },
    validateOnBlur: false,
    validationSchema: CREDIT_CARD_VALIDATION_SCHEMA,
  });

  return (
    <Grid container alignItems="center" className={classes.formCardContainer}>
      <Elements stripe={stripe}>
        <Form
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setFieldValue={setFieldValue}
          touched={touched}
          values={values}
        />
      </Elements>
    </Grid>
  );
};

export default PaymentForm;
