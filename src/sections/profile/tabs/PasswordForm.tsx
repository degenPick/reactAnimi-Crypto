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
  Grid,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// components
import Iconify from '../../../components/iconify';
import FormProvider, { RHFTextField } from '../../../components/hook-form';
import { useI18nContext } from '../../../i18n/i18n-react';
// import {AuthUserType} from "../../auth/types";

// ----------------------------------------------------------------------

type FormValuesProps = {
  oldPassword: string;
  password: string;
  afterSubmit?: string;
};

export default function PasswordForm() {
  const { changePassword } = useAuthContext();
  const { LL } = useI18nContext();

  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old password is required'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password is too short - should be 4 chars minimum.'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    oldPassword: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ChangePasswordSchema),
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
      await changePassword(data.oldPassword, data.password);
      reset();
    } catch (error) {
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
        <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 4, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Change Password
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {!!errors.afterSubmit && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.afterSubmit.message}
            </Alert>
          )}

          {isSubmitSuccessful && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Reset new password succeed
            </Alert>
          )}
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Box>
                <RHFTextField
                  name="oldPassword"
                  label="Old Password"
                  type={showOldPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowOldPassword(!showOldPassword)} edge="end">
                          <Iconify icon={showOldPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Box>
                <RHFTextField
                  name="password"
                  label="New Password"
                  type={showNewPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                          <Iconify icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Box>
                <RHFTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Stack direction="row">
          <Box sx={{ flex: 1 }} />
          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
              color: '#fff',
            }}
          >
            Change Password
          </LoadingButton>
        </Stack>
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
