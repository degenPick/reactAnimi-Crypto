// @mui
import { Avatar, Box, IconButton, Link, Stack, Typography } from '@mui/material';
// auth
import { Link as RouterLink, useNavigate, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Iconify from 'src/components/iconify';
import { useAuthContext } from 'src/auth/useAuthContext';
import { GOOGLE_CLIENT_ID } from 'src/config-global';
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';
import { PATH_ADMIN_DASHBOARD, PATH_AUTH, PATH_DASHBOARD, PATH_HOME } from '../../routes/paths';
import { useI18nContext } from '../../i18n/i18n-react';
import AuthWithSocial from './AuthWithSocial';

// import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function Login() {
  // const { method } = useAuthContext();
  const { LL } = useI18nContext();

  const { isAuthenticated, isInitialized, user } = useAuthContext();

  const navigate = useNavigate();

  const goToHome = () => {
    console.log('go to home:::');
    navigate(PATH_HOME.root);
  };

  const getUserDefaultPage = () => {
    if (user?.subscription.actInvest === false && user?.subscription.passInvest === true)
      return PATH_DASHBOARD.passiveInvest;
    return PATH_DASHBOARD.activeInvest;
  };

  if (isAuthenticated) {
    return <Navigate to={user?.isAdmin ? PATH_ADMIN_DASHBOARD.dashboard : getUserDefaultPage()} />;
  }

  return (
    <LoginLayout>
      <Box
        sx={{
          minWidth: { md: 600, sm: 420, xs: 320 },
          width: { md: 600, sm: 420, xs: 320 },
          px: 0,
          mt: 0,
          mb: 0,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mb: 0, px: 2, mt: { md: 0, xs: 2 } }}
          gap={1}
        >
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
        <Box sx={{ pb: 2, pt: 0 }}>
          <Stack
            spacing={1}
            sx={{
              mb: 2,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/assets/login.png"
              onClick={goToHome}
              sx={{ width: 200, cursor: 'pointer' }}
            />

            <Typography
              variant="subtitle2"
              sx={{
                fontSize: 32,
                fontWeight: 500,
              }}
            >
              Sign In
            </Typography>
            <Typography
              variant="subtitle2"
              color="grey.500"
              sx={{
                textAlign: 'center',
              }}
            >
              Please enter your credentials to access you account
            </Typography>
          </Stack>

          <AuthLoginForm />

          <GoogleOAuthProvider clientId="648898125142-etes71st2g2hsmgds7fr740u6kooqo6l.apps.googleusercontent.com">
            <AuthWithSocial />
          </GoogleOAuthProvider>
        </Box>
        {/* <Stack spacing={2} sx={{ mt: 2, position: 'relative' }}>
          <Stack direction="row" spacing={0.5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body2">
              {LL.dont_have_an_account()}{' '}
              <Link to={PATH_AUTH.register} component={RouterLink} variant="subtitle2">
                {LL.please()} {LL.sign_up()}
              </Link>
            </Typography>
          </Stack>
        </Stack> */}
      </Box>
    </LoginLayout>
  );
}

// <Stack spacing={2} sx={{ my: 5, position: 'relative', display: 'flex', justifyContent: 'center' }}>
//   <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center' }}>© {new Date().getFullYear()} Scale-In</Typography>
// </Stack>

// <Stack direction="row" spacing={0.5} sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
//   <Typography variant="body2">New user?</Typography>
//
//   <Link component={RouterLink} to={PATH_AUTH.register} variant="subtitle2">
//     Create an account
//   </Link>
// </Stack>
