import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import {Alert} from "@mui/material";
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import FormProvider, { RHFTextField } from '../../components/hook-form';
import {useAuthContext} from "../../auth/useAuthContext";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  afterSubmit?: string;
};

export default function AuthSendEmailForm() {
  const navigate = useNavigate();
  const { sendEmail } = useAuthContext();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: '' },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await sendEmail(data.email);
      sessionStorage.setItem('email-recovery', data.email);
      navigate(PATH_AUTH.verifyEmail);
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
      {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

      <RHFTextField sx={{ mt: 3 }} name="email" label="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3, bgcolor: 'primary.dark' }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
}
