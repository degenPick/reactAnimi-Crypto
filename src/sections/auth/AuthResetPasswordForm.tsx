import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useAuthContext } from '../../auth/useAuthContext';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
};

export default function AuthResetPasswordForm() {
  const navigate = useNavigate();
  const { resetPassword } = useAuthContext();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: '' },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await resetPassword(data.email);
      sessionStorage.setItem('email-recovery', data.email);
      navigate(PATH_AUTH.newPassword);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ backgroundColor: '#141A36', px: 2, py: 4, borderRadius: 2 }}>
        <RHFTextField
          name="email"
          label="Email address"
          InputProps={{
            sx: {
              backgroundColor: '#292F48',
            },
          }}
        />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{
            background: 'linear-gradient(to right, #F69522, #FBB532)',
            color: '#fff',
            mt: 3,
            borderRadius: 1,
          }}
        >
          Send
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}
