import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, FormHelperText, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import FormProvider, {RHFCodes, RHFTextField} from '../../components/hook-form';
import {useAuthContext} from "../../auth/useAuthContext";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string | null;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
  afterSubmit?: string;
};

export default function AuthVerifyEmailForm() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const { verifyEmail } = useAuthContext();

  const emailRecovery =
      typeof window !== 'undefined' ? sessionStorage.getItem('email-recovery') : '';

  const VerifyCodeSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
    code6: Yup.string().required('Code is required'),
  });

  const defaultValues = {
    email: emailRecovery,
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const methods = useForm<FormValuesProps>({
    mode: 'onChange',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const otpCode = `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`;
      if (data.email) {
        await verifyEmail(data.email, otpCode);
        console.log('DATA', Object.values(data).join(''));
        enqueueSnackbar('Verify success!');
        navigate(PATH_AUTH.sendPhone);
      }
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
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <RHFTextField
            name="email"
            label="Email"
            disabled={!!emailRecovery}
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 3 }}
        />

        <RHFCodes keyName="code" inputs={['code1', 'code2', 'code3', 'code4', 'code5', 'code6']} />

        {(!!errors.code1 ||
          !!errors.code2 ||
          !!errors.code3 ||
          !!errors.code4 ||
          !!errors.code5 ||
          !!errors.code6) && (
          <FormHelperText error sx={{ px: 2 }}>
            Code is required
          </FormHelperText>
        )}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 3, bgcolor: 'primary.dark' }}
        >
          Verify
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
