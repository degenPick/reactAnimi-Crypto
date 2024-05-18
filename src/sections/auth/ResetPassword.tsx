// @mui
import { Avatar, Box, IconButton, Link, Stack, Typography } from '@mui/material';
// auth
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Iconify from 'src/components/iconify';
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';
import { PATH_AUTH, PATH_HOME } from '../../routes/paths';
import { useI18nContext } from '../../i18n/i18n-react';
import AuthWithSocial from './AuthWithSocial';
import AuthResetPasswordForm from './AuthResetPasswordForm';

// import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function ResetPassword() {
  // const { method } = useAuthContext();
  const { LL } = useI18nContext();

  const navigate = useNavigate();

  const goToHome = () => {
    console.log('go to home:::');
    navigate(PATH_HOME.root);
  };

  return (
    <LoginLayout>
      <Box sx={{ minWidth: { md: 600, sm: 420, xs: 320 }, width: { md: 600, sm: 420, xs: 320 } }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mb: 0, px: 2, mt: { md: 0, xs: 2 } }}
          gap={1}
        >
          <Link to={PATH_AUTH.login} component={RouterLink}>
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
            Back to Sign in
          </Typography>
        </Stack>
        <Stack sx={{ p: 2 }} alignItems="center">
          <Stack
            spacing={2}
            sx={{
              mb: 4,
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
              sx={{ width: 150, cursor: 'pointer' }}
            />
          </Stack>

          <Typography
            variant="subtitle2"
            sx={{
              fontSize: 32,
              fontWeight: 500,
            }}
          >
            Forgot your password?
          </Typography>

          <Typography
            sx={{ color: 'text.secondary', mb: 4, mt: 2, textAlign: 'center', maxWidth: 420 }}
          >
            Please enter the email address associated with your account and we will email you a link
            to reset your password
          </Typography>

          <AuthResetPasswordForm />
        </Stack>
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
