import { Box, Button, Divider, InputAdornment, Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomTextField } from 'src/components/custom-input';
import DateRangePicker, { useDateRangePicker } from 'src/components/date-range-picker';
import Iconify from 'src/components/iconify';
import { fDate } from 'src/utils/formatTime';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import { IAdminClientRowDataType } from 'src/components/admin-clients/type';
import ClientsPageTable from './clients_page/ClientsPageTable';

const tableData: IAdminClientRowDataType[] = [
  {
    name: 'AAA',
    discordName: 'VVV',
    frequencyPayment: 'Yearly',
    paid: 1460,
    stillToBePaid: 0,
    willPayAmount: 0,
  },
  {
    name: 'BBB',
    discordName: 'WWW',
    frequencyPayment: 'Yearly',
    paid: 1460,
    stillToBePaid: 0,
    willPayAmount: 0,
  },
  {
    name: 'CCC',
    discordName: 'XXX',
    frequencyPayment: 'Monthly',
    paid: 810,
    stillToBePaid: 0,
    willPayAmount: 0,
  },
  {
    name: 'DDD',
    discordName: 'YYY',
    frequencyPayment: 'Monthly',
    paid: 810,
    stillToBePaid: 810,
    willPayAmount: 135,
  },
  {
    name: 'EEE',
    discordName: 'ZZZ',
    frequencyPayment: 'Monthly',
    paid: 1460,
    stillToBePaid: 810,
    willPayAmount: 135,
  },
];

function ClientsPage() {
  const now = new Date();

  const pickerInput = useDateRangePicker(new Date(now.getFullYear(), now.getMonth(), 1), now);

  useLegacyEffect(() => {}, []);

  return (
    <Box
      sx={{
        color: 'grey.200',
        backgroundColor: '#202540',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        p: 2,
        mb: 2,
      }}
    >
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 2, mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h6">Clients Details</Typography>
          </Stack>

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
              onUpdate={() => {
                pickerInput.onClose();
                // updateTableData();
              }}
            />

            <CustomTextField
              width={220}
              placeholder="Search..."
              sx={{ backgroundColor: '#202540', color: 'grey.200' }}
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

        <ClientsPageTable tableData={tableData} />
      </Box>
    </Box>
  );
}

export default ClientsPage;
