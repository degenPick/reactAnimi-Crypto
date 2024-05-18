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
  phone: string;
  afterSubmit?: string;
};

export default function AuthSendPhoneForm() {
  const navigate = useNavigate();
  const { sendPhone } = useAuthContext();

  const SendPhoneSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(
          /^\+(?:[0-9] ?){6,14}[0-9]$/,
          'Invalid phone number format. Please enter a valid phone number.'
      ),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(SendPhoneSchema),
    defaultValues: { phone: '' },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await sendPhone(data.phone);
      sessionStorage.setItem('phone-recovery', data.phone);
      navigate(PATH_AUTH.verifyPhone);
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

      <RHFTextField sx={{ mt: 3 }} name="phone" label="Phone number" />

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
