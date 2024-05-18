import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate } from 'react-router-dom';
// @mui
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

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LoadingButton } from '@mui/lab';
import GitHubIcon from '@mui/icons-material/GitHub';
import SvgColor from 'src/components/svg-color';
import Image from 'src/components/image';
import { useSelector } from 'src/redux/store';
import { selectors } from 'src/redux/user/user.slice';
import { PATH_ADMIN_DASHBOARD, PATH_DASHBOARD } from 'src/routes/paths';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField, RHFSelect } from '../../components/hook-form';
import { useI18nContext } from '../../i18n/i18n-react';
import Google from '../../assets/images/google.png';
import Microsoft from '../../assets/images/microsoft.png';
import Apple from '../../assets/images/apple.png';
import Card from '../../assets/images/card.png';
import Crypto from '../../assets/images/crypto.png';
import SvgCrypto from '../../assets/images/crypto.svg';
import { countries } from '../../assets/data';
import StripeInput from './components/StripeInput';
import CreditCardWrapper from './CreditCardWrapper';
import AuthWithSocial from './AuthWithSocial';
import RegisterAuthWithSocial from './RegisterAuthWithSocial';
// ----------------------------------------------------------------------

type FormValuesProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nameOnCard: string;
  isAccept: boolean;
  afterSubmit?: string;
};

const currencies = [
  {
    name: 'USDT',
  },
  {
    name: 'BTC',
  },
  {
    name: 'ETH',
  },
];

export default function AuthRegisterForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedNetwork, setSelectedNetwork] = useState('erc');
  const { register, user: authUser, isAuthenticated } = useAuthContext();
  const { LL } = useI18nContext();

  const subscription = useSelector(selectors.subscription);

  const user = useSelector(selectors.user);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password is too short - should be 4 chars minimum.'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    nameOnCard: Yup.string().required('Card name is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
  });

  const defaultValues = {
    isAccept: false,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: '',
    nameOnCard: '',
    confirmPassword: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const stripe = useStripe();
  const elements = useElements();

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      if (!stripe || !elements) return;
      await elements.submit();
      const cardElement = elements.getElement(CardNumberElement);

      if (!cardElement) return;
      if ((data as any).cardNumber === undefined) return;
      if ((data as any).expireDate === undefined) return;
      if ((data as any).cvc === undefined) return;

      const { error, paymentMethod: method } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: data.nameOnCard,
          email: data.email,
        },
      });

      await register(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.nameOnCard,
        method?.id ?? '',
        subscription
      );
    } catch (error) {
      console.error(error);
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  const getUserDefaultPage = () => {
    if (authUser?.subscription.actInvest === false && authUser?.subscription.passInvest === true)
      return PATH_DASHBOARD.passiveInvest;
    return PATH_DASHBOARD.activeInvest;
  };

  if (isAuthenticated) {
    return (
      <Navigate to={authUser?.isAdmin ? PATH_ADMIN_DASHBOARD.dashboard : getUserDefaultPage()} />
    );
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <RHFTextField name="firstName" label={LL.firstName()} />
          <RHFTextField name="lastName" label={LL.lastName()} />
        </Box>

        <RHFTextField name="email" label={LL.email_address()} />

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
            name="password"
            label={LL.password()}
            type={showPassword ? 'text' : 'password'}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#292F48',
              },
            }}
          />

          <RHFTextField
            name="confirmPassword"
            label={LL.confirm()}
            type={showConfirmPassword ? 'text' : 'password'}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#292F48',
              },
            }}
          />
        </Box>

        <RHFSelect native name="country" label={LL.country()}>
          <option value="" />
          {countries.map((country) => (
            <option key={country.code} value={country.label}>
              {country.label}
            </option>
          ))}
        </RHFSelect>

        <GoogleOAuthProvider clientId="648898125142-etes71st2g2hsmgds7fr740u6kooqo6l.apps.googleusercontent.com">
          <RegisterAuthWithSocial />
        </GoogleOAuthProvider>

        <Typography variant="h5" color="white" sx={{ textAlign: 'center' }}>
          Payment Methods
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            backgroundColor: '#1C223C',
            borderRadius: 1,
            p: 2,
          }}
        >
          <Stack alignItems="center" onClick={() => setPaymentMethod('card')}>
            <Typography
              variant="body2"
              color={paymentMethod === 'card' ? 'white' : '#ffffff80'}
              textAlign="center"
            >
              {LL.creditCard()}
            </Typography>
            <Stack
              sx={{
                border: paymentMethod === 'card' ? '2px solid #04BEFE' : 'none',
                borderRadius: 1,
                backgroundColor: 'white',
                p: 1,
                mt: 1,
                width: 70,
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/assets/card.svg" sx={{ width: 35, height: 35 }} />
            </Stack>
          </Stack>
          <Stack onClick={() => setPaymentMethod('crypto')} alignItems="center">
            <Typography
              variant="body2"
              color={paymentMethod === 'crypto' ? 'white' : '#ffffff80'}
              textAlign="center"
            >
              Crypto
            </Typography>
            <Stack
              sx={{
                border: paymentMethod === 'crypto' ? '2px solid #04BEFE' : 'none',
                borderRadius: 1,
                backgroundColor: 'white',
                p: 1,
                mt: 1,
                width: 70,
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/assets/crypto.svg"
                width={35}
                height={35}
                sx={{ width: 35, height: 35 }}
              />
            </Stack>
          </Stack>
        </Stack>
        {paymentMethod === 'card' ? (
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
                required
                InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
                InputProps={{
                  inputComponent: StripeInput,
                  inputProps: {
                    component: CardNumberElement,
                    style: {
                      color: 'white',
                    },
                  },
                  sx: {
                    backgroundColor: '#292F48',
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
                  InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
                  InputProps={{
                    inputComponent: StripeInput,
                    inputProps: {
                      component: CardExpiryElement,
                    },
                    sx: {
                      backgroundColor: '#292F48',
                    },
                  }}
                />
                <RHFTextField
                  name="cvc"
                  label="CVC"
                  InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
                  InputProps={{
                    inputComponent: StripeInput,
                    inputProps: {
                      component: CardCvcElement,
                    },
                    sx: {
                      backgroundColor: '#292F48',
                    },
                  }}
                />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <RHFSelect
              native
              name="currency"
              label={LL.select_the_currency()}
              helperText={
                <Stack flexDirection="row" gap={1}>
                  <Typography variant="body1">{`${LL.exchange_rate()} = `}</Typography>
                  <Typography variant="body1" color="white">
                    1 USDT / 0.95 EUR
                  </Typography>
                </Stack>
              }
            >
              <option value="" />
              {currencies.map((currency) => (
                <option key={currency.name} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </RHFSelect>

            {/* <Typography variant="body2" fontWeight={700} color="grey.600">
              {LL.select_network()}
            </Typography> */}

            {/* <Stack direction="row">
              <Typography
                onClick={() => setSelectedNetwork('erc')}
                mx={1}
                sx={{
                  color: selectedNetwork === 'erc' ? '#000' : '#ffffff80',
                  cursor: 'pointer',
                  borderRadius: 1,
                  backgroundColor: selectedNetwork === 'erc' ? 'white' : '#5A5E72',
                  p: 1,
                }}
              >
                ERC-20
              </Typography>
              <Typography
                onClick={() => setSelectedNetwork('trc')}
                mx={1}
                sx={{
                  color: selectedNetwork === 'trc' ? '#000' : '#ffffff80',
                  cursor: 'pointer',
                  backgroundColor: selectedNetwork === 'trc' ? 'white' : '#5A5E72',
                  borderRadius: 1,
                  p: 1,
                }}
              >
                TRC-20
              </Typography>
              <Typography
                onClick={() => setSelectedNetwork('bep')}
                mx={1}
                sx={{
                  color: selectedNetwork === 'bep' ? '#000' : '#ffffff80',
                  cursor: 'pointer',
                  backgroundColor: selectedNetwork === 'bep' ? 'white' : '#5A5E72',
                  borderRadius: 1,
                  p: 1,
                }}
              >
                BEP-20
              </Typography>
            </Stack> */}
            {/* <RHFTextField
              sx={{ backgroundColor: '#141A36' }}
              name="yourAddress"
              label={LL.your_address()}
            /> */}
          </>
        )}
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitSuccessful || isSubmitting}
          sx={{
            background: 'linear-gradient(to right, #F69522, #FBB532)',
            color: '#fff',
            '&:hover': {
              background: 'linear-gradient(to right, #ED854D, #EA485B)',
              boxShadow: 'none',
            },
          }}
        >
          {LL.registerOrder()}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

// password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//   'Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one special letter, and one digit'
// ),
