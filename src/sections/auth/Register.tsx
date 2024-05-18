// @mui
import {
  Stack,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
// layouts
// routes
//
// import AuthWithSocial from './AuthWithSocial';
import { LoadingButton } from '@mui/lab';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import { PATH_HOME } from 'src/routes/paths';
import { useSelector } from 'src/redux/store';
import { selectors } from 'src/redux/user/user.slice';
import { priceForPassInvest } from 'src/utils/common';
import AuthRegisterForm from './AuthRegisterForm';
import { useI18nContext } from '../../i18n/i18n-react';
import Visa from '../../assets/images/visa1.png';
import ActiveContentSummary from './components/ActiveContentSummary';
import PassiveContentSummary from './components/PassiveContentSummary';
import GradientTypography from '../home/components/GrandientTypography';
import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------
const stripe = loadStripe(
  'pk_test_51P3HZAHpPj1pjmr7UrVyy8B3sC2L4q826Hw4JcXs9RepPCLnBQs7ktaoZQt1Czx1n5zje2Udj4tPG2gOYHnCCjVm00U1zNdVsA'
);

export default function Register() {
  const { LL } = useI18nContext();

  const subscription = useSelector(selectors.subscription);

  const getTotalValue = () => {
    let total = 0;
    if (subscription.actInvest) total += subscription.isMonthly ? 185 : 2000;
    if (subscription.passInvest) total += priceForPassInvest(subscription.investAmount);

    return total;
  };
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      display="flex"
      justifyContent="center"
      my={8}
      mx={2}
      gap={2}
    >
      <Stack
        sx={{
          maxWidth: 700,
          borderRadius: 2,
          background: '#1C223C',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ mb: 0 }} gap={1} alignSelf="flex-start">
          <Link to={PATH_HOME.root} component={RouterLink}>
            <IconButton
              sx={{
                backgroundColor: '#ffffff',
                '&:hover': {
                  backgroundColor: '#ffffffD9',
                },
              }}
            >
              <Iconify
                icon="fluent:arrow-left-12-filled"
                width={16}
                sx={{
                  color: 'black',
                }}
              />
            </IconButton>
          </Link>
          <Typography variant="subtitle2" color="grey.600">
            Back to Home
          </Typography>
        </Stack>

        <Stack
          spacing={2}
          sx={{
            mb: 2,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: 32,
              fontWeight: 500,
            }}
          >
            {LL.registerAccount()}
          </Typography>
        </Stack>
        <Box
          sx={{
            backgroundColor: '#141A36',
            p: 2,
            paddingTop: 4,
            borderRadius: 2,
          }}
        >
          <Elements stripe={stripe}>
            <AuthRegisterForm />
          </Elements>

          <Stack spacing={2} sx={{ mt: 2, position: 'relative' }}>
            <Stack direction="row" spacing={0.5} sx={{ display: 'flex', justifyContent: 'left' }}>
              <Typography variant="body2" color="grey.600">
                {LL.allOrdersGo()}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}
          >
            <Box component="img" src={Visa} m={1} />
          </Stack>
        </Box>
      </Stack>
      <Stack
        maxWidth={{ sm: 560, lg: 460 }}
        sx={{
          borderRadius: 1,
          background: '#141A36',
          color: '#fff',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Box>
          <Typography variant="h3" color="#ffffff4d">
            {LL.summary()}
          </Typography>

          <Divider
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          />
          {subscription.passInvest && <PassiveContentSummary />}

          <Divider
            sx={{
              marginBottom: 2,
            }}
          />

          {subscription.actInvest && <ActiveContentSummary />}
        </Box>

        <Box>
          <Stack py={1} sx={{ borderTop: '1px solid #2B304A' }}>
            <TextField
              label={LL.referralCode()}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      mr: 1,
                    }}
                  >
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(to right, #F69522, #FBB532)',
                        color: '#fff',
                      }}
                    >
                      {LL.apply()}
                    </LoadingButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: '#292F48',
                },
              }}
              sx={{
                '&.MuiFormControl-root': {
                  my: 2,
                },
                maxWidth: '580px',
                color: 'red',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: '1px solid #fff',
                    color: '#fff',
                    opacity: 1,
                  },
                  '& fieldset:focus': {
                    border: '1px solid #fff',
                    color: '#fff',
                    opacity: 1,
                  },
                  p: 0,
                  input: {
                    color: '#fff',
                    borderRadius: 1,
                    opacity: 1,
                  },
                },
              }}
            />
          </Stack>

          <Stack py={1} sx={{ borderTop: '1px solid #2B304A' }}>
            <TextField
              label={LL.promoCode()}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      mr: 1,
                    }}
                  >
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(to right, #F69522, #FBB532)',
                        color: '#fff',
                      }}
                    >
                      {LL.apply()}
                    </LoadingButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: '#292F48',
                },
              }}
              sx={{
                '&.MuiFormControl-root': {
                  my: 2,
                },
                maxWidth: '580px',
                color: 'red',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: '1px solid #fff',
                    color: '#fff',
                    opacity: 1,
                  },
                  '& fieldset:focus': {
                    border: '1px solid #fff',
                    color: '#fff',
                    opacity: 1,
                  },
                  p: 0,
                  input: {
                    color: '#fff',
                    borderRadius: 1,
                    opacity: 1,
                  },
                },
              }}
            />
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <GradientTypography
              fontSize={28}
              startColor="white"
              lastColor="white"
              sx={{ fontWeight: 700 }}
            >
              {LL.total()}
            </GradientTypography>

            <Box
              sx={{
                backgroundColor: '#1C223C',
                padding: 2,
                borderRadius: 2,
              }}
            >
              <GradientTypography
                fontSize={28}
                startColor="white"
                lastColor="white"
                sx={{ fontWeight: 700 }}
              >
                {`$${getTotalValue()}`}
              </GradientTypography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

// <Stack spacing={2} sx={{ my: 5, position: 'relative', display: 'flex', justifyContent: 'center' }}>
//   <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center' }}>© {new Date().getFullYear()} SCALEIN</Typography>
// </Stack>
