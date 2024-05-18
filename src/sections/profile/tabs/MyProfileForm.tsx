import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
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
  Badge,
  Avatar,
  Tooltip,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CountrySelect from 'src/components/select/CountrySelect';
import { CustomAvatar } from 'src/components/custom-avatar';
import { countries } from 'src/assets/data';
// routes
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// components
import Iconify from '../../../components/iconify';
import FormProvider, { RHFSelect, RHFTextField } from '../../../components/hook-form';
import { useI18nContext } from '../../../i18n/i18n-react';

// import {AuthUserType} from "../../auth/types";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  afterSubmit?: string;
};

export default function MyProfileForm() {
  const { updateProfile, user } = useAuthContext();
  const { LL } = useI18nContext();

  const { enqueueSnackbar } = useSnackbar();

  const UpdateProfileSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    firstName: Yup.string().optional(),
    lastName: Yup.string().optional(),
    country: Yup.string().optional(),
  });

  const defaultValues = {
    email: user?.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
    country: user?.country,
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UpdateProfileSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      // await login(data.email, data.password);
      await updateProfile(
        data.email,
        data?.firstName ?? '',
        data?.lastName ?? '',
        data?.country ?? ''
      );
      methods.reset({
        email: data.email,
        firstName: data?.firstName ?? '',
        lastName: data?.lastName ?? '',
        country: data?.country ?? '',
      });
      enqueueSnackbar('Changes saved succesfully');
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
      <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
        <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 4, mb: 2 }}>
          <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 4, position: 'relative' }}>
            <CustomAvatar
              color="default"
              src="/assets/avatar.png"
              alt={user?.firstName}
              name={user?.firstName}
              sx={{
                width: 100,
                height: 100,
              }}
            />

            <Avatar
              sx={{
                backgroundColor: 'white',
                position: 'absolute',
                top: 4,
                left: 60,
                width: 30,
                height: 30,
              }}
            >
              <IconButton sx={{ color: 'black' }}>
                <Iconify icon="raphael:edit" width={16} color="black" />
              </IconButton>
            </Avatar>

            <Stack direction="column">
              <Typography variant="subtitle1">
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'grey.600' }}>
                Member Since 10/12/2022
              </Typography>
            </Stack>
          </Stack>
          {!!errors.afterSubmit && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.afterSubmit.message}
            </Alert>
          )}
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <RHFTextField name="firstName" label="First Name" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <RHFTextField name="lastName" label="Last Name" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <RHFTextField
                  name="email"
                  label="Email"
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title="Contact to support team">
                          <IconButton edge="end">
                            <Iconify icon="eva:alert-circle-outline" />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                {/* <RHFTextField name="country" label="Country" /> */}
                {/* <CountrySelect /> */}
                <RHFSelect native name="country" label={LL.country()}>
                  <option value="" />
                  {countries.map((country) => (
                    <option key={country.code} value={country.label}>
                      {country.label}
                    </option>
                  ))}
                </RHFSelect>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Stack direction="row">
          <Box sx={{ flex: 1 }} />
          <LoadingButton
            color="inherit"
            size="large"
            type="submit"
            loading={isSubmitting}
            variant="contained"
            disabled={!isDirty}
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
              color: '#fff',
              opacity: isDirty ? 1.0 : 0.6,
              '&.MuiLoadingButton-root': {
                '&.Mui-disabled': {
                  color: !isSubmitting ? '#fff' : 'transparent',
                },
              },
              '& .MuiLoadingButton-loadingIndicator': {
                color: 'red',
              },
            }}
          >
            Save Changes
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
