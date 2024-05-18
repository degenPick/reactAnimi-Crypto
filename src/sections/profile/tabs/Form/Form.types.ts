import type { ChangeEvent, FormEvent } from 'react';
import type { FormikErrors, FormikTouched } from 'formik';
import { CardFields } from '../PaymentForm.enumerations';

export type FormProps = {
  errors: FormikErrors<CardFieldProps>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setFieldValue: (field: string, value: string) => void;
  touched: FormikTouched<CardFieldProps>;
  values: CardFieldProps;
};
type CardFieldProps = {
  [CardFields.CardName]: string;
  [CardFields.CardNumber]: string;
  [CardFields.ExpirationMonth]: string;
  [CardFields.ExpirationYear]: string;
  [CardFields.Cvc]: string;
};
