import { object, string } from 'yup';
import { CardFields, Errors } from './PaymentForm.enumerations';

export const EMPTY_STRING = '';

export const CREDIT_CARD_NAME_REGEX = /^[a-zA-Z ]*$/;
export const CREDIT_CARD_REGEX = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

export const CREDIT_CARD_VALIDATION_SCHEMA = object().shape({
  [CardFields.CardName]: string()
    .required(Errors.CantBeBlank)
    .nullable()
    .matches(CREDIT_CARD_NAME_REGEX, Errors.EnterCorrectCardName)
    .min(2, Errors.EnterCorrectCardName)
    .max(50, Errors.EnterCorrectCardName),
  [CardFields.CardNumber]: string()
    .required(Errors.CantBeBlank)
    .nullable()
    .matches(CREDIT_CARD_REGEX, Errors.CardNumberInvalid),
  [CardFields.ExpirationMonth]: string().required(Errors.CantBeBlank).nullable(),
  [CardFields.ExpirationYear]: string().required(Errors.CantBeBlank).nullable(),
  [CardFields.Cvc]: string().required(Errors.CantBeBlank).nullable(),
});

export const COPY = {
  CardNameLabel: 'Name on card',
  CardNumberLabel: 'Card Number',
  CardExpirationLabel: 'Expiration Date',
  CardCvcLabel: 'CVC',
  CardNamePlaceholder: 'Chris HANNAN',
  CardNumberPlaceholder: 'e.g. 1234 5678 9123',
  ExpirationMonthPlaceholder: 'MM',
  ExpirationYearPlaceholder: 'YY',
  CvcPlaceholder: 'e.g. 123',
};

export const INITIAL_VALUES = {
  [CardFields.CardName]: EMPTY_STRING,
  [CardFields.CardNumber]: EMPTY_STRING,
  [CardFields.ExpirationMonth]: EMPTY_STRING,
  [CardFields.ExpirationYear]: EMPTY_STRING,
  [CardFields.Cvc]: EMPTY_STRING,
};
