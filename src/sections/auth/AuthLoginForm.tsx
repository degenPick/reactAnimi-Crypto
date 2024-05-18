import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Link,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Box,
  Checkbox,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH, PATH_DASHBOARD } from '../../routes/paths';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useI18nContext } from '../../i18n/i18n-react';
// import {AuthUserType} from "../../auth/types";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function AuthLoginForm() {
  const { login } = useAuthContext();
  const { LL } = useI18nContext();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password is too short - should be 4 chars minimum.'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log('remember me', rememberMe);
      await login(data.email.toLowerCase(), data.password, rememberMe);
      // navigate(PATH_DASHBOARD.root);
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ backgroundColor: '#141A36', p: 3, borderRadius: 2, mx: { md: 6, xs: 1 } }}>
        <Stack spacing={2} marginBottom={1}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

          <RHFTextField
            name="email"
            label={LL.email_address()}
            color="error"
            InputProps={{
              sx: {
                backgroundColor: '#292F48',
              },
            }}
          />

          <RHFTextField
            name="password"
            label={LL.password()}
            type={showPassword ? 'text' : 'password'}
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
        </Stack>
        <Stack alignItems="center" justifyContent="space-between" direction="row">
          <Stack direction="row" alignItems="center">
            <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <Typography variant="body2" color="text.secondary">
              Remember me
            </Typography>
          </Stack>

          <Link
            variant="body2"
            href={PATH_AUTH.resetPassword}
            color="text.secondary"
            underline="always"
          >
            Forget Password?
          </Link>
        </Stack>
        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitSuccessful || isSubmitting}
          sx={{
            background: 'linear-gradient(to right, #F69522, #FBB532)',
            color: '#fff',
            mt: 2,
            '& .MuiLoadingButton-loadingIndicator': {
              color: 'red',
            },
            fontSize: 16,
          }}
        >
          {LL.sign_in()}
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}

// <Stack alignItems="flex-end" sx={{ my: 2 }}>
//   <Link
//     component={RouterLink}
//     to={PATH_AUTH.resetPassword}
//     variant="body2"
//     color="inherit"
//     underline="always"
//   >
//     Forgot password?
//   </Link>
// </Stack>
// <Stack alignItems="flex-end" sx={{ my: 2 }}>
//   <Link
//     component={RouterLink}
//     to={PATH_AUTH.sendEmail}
//     variant="body2"
//     color="inherit"
//     underline="always"
//   >
//     Verify account?
//   </Link>
// </Stack>
