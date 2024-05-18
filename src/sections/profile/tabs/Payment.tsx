import { Box, Button, Divider, InputAdornment, Stack, Typography } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { useAuthContext } from 'src/auth/useAuthContext';
import FormProvider from 'src/components/hook-form/FormProvider';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';
import { CustomAvatar } from 'src/components/custom-avatar';
import { useDateRangePicker } from 'src/components/date-range-picker';
import { fDate } from 'src/utils/formatTime';
import { CustomTextField } from 'src/components/custom-input';
import Iconify from 'src/components/iconify';
import MyProfileForm from './MyProfileForm';
import PaymentForm from './PaymentForm';
import PaymentHistoryTable from './PaymentHistoryTable';

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;

  password: string;
  confirmPassword: string;
  afterSubmit?: string;
};

function Payment() {
  const { user } = useAuthContext();
  const pickerInput = useDateRangePicker(new Date(), new Date());

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm<FormValuesProps>({
    mode: 'onChange',
    defaultValues,
  });
  return (
    <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 4, mb: 2 }}>
        <Typography>Credit card informations</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />

        {/* <FormProvider methods={methods}>
          <PaymentForm />
        </FormProvider> */}
        <PaymentForm />
      </Box>

      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 2, mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6"> Payment History</Typography>

          <Stack direction="row" gap={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#202540',
                borderRadius: 1,
                p: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={pickerInput.onOpen}
            >
              <Typography variant="subtitle2">
                {fDate(pickerInput.startDate)} - {fDate(pickerInput.endDate)}
              </Typography>
            </Button>
            <DateRangePicker
              open={pickerInput.open}
              startDate={pickerInput.startDate}
              endDate={pickerInput.endDate}
              onChangeStartDate={pickerInput.onChangeStartDate}
              onChangeEndDate={pickerInput.onChangeEndDate}
              onClose={pickerInput.onClose}
              isError={pickerInput.isError}
            />

            <CustomTextField
              width={220}
              placeholder="Search..."
              sx={{ backgroundColor: '#202540', color: 'white' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>

        <Divider sx={{ mt: 2, mb: 2 }} />
        {/* <OpenOrderTable /> */}
        <PaymentHistoryTable />
      </Box>
    </Box>
  );
}

export default Payment;
