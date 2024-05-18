import { Box, Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CustomTextField } from 'src/components/custom-input';
import { useDateRangePicker } from 'src/components/date-range-picker';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';
import Iconify from 'src/components/iconify';
import axiosInstance from 'src/utils/axios';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import Block from 'src/components/settings/drawer/Block';
import { fDate } from 'src/utils/formatTime';
import DepositAndWithdrawalTable, {
  RowDataType,
} from './deposit_and_withdrawal/DepositAndWithdrawalTable';

/**
 * 
 * @returns 
 * type RowDataType = {
  exchange: number;
  date: Date;
  symbol: string;
  type: string;
  status: number;
  price: number;
  quantity: number;
  pl: number;
};
 */
function DepoistAndWithdrawal() {
  const now = new Date();

  const pickerInput = useDateRangePicker(
    new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    now
  );
  const [tableData, setTableData] = useState<RowDataType[]>([]);
  const [allHistory, setAllHistory] = useState<any[]>([]);

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.post('api/v1/users/deposit-and-withdrawal');
        const data = response.data;

        const datas = data.datas;

        const history = datas.map((order: any) => ({
          id: order.orderId,
          exchange: order.exchange,
          date: order.datetime,
          quantity: order.amount,
          type: order.type,
          network: order.network,
        }));

        setAllHistory(history);

        const endDate = new Date();
        const startDate = new Date(
          endDate.getFullYear() - 1,
          endDate.getMonth(),
          endDate.getDate()
        );

        const filteredData = history.filter((item: any) => {
          const itemDate = new Date(item.date);
          return itemDate >= startDate && itemDate <= endDate;
        });
        setTableData(filteredData);
      } catch (error) {
        console.log('error ==> ', error);
      }
    };

    fetch();
  }, []);

  const updateTableData = () => {
    const endDate = pickerInput.endDate ?? new Date();
    const startDate = pickerInput.startDate ?? new Date();

    const filteredData = allHistory.filter((item: any) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
    setTableData(filteredData);
  };

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
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="h6"> Deposit And Withdrawal </Typography>
            <Typography variant="subtitle2" sx={{ color: 'grey.600' }}>
              ({tableData.length})
            </Typography>

            <Typography variant="subtitle2" sx={{ color: 'grey.600', ml: 2 }}>
              Total withdrawn:
            </Typography>

            <Typography variant="h6">
              {tableData
                .filter((item) => item.type === 'withdrawal')
                .map((item) => item.quantity)
                .reduce((total, current) => total + current, 0)}{' '}
              $
            </Typography>

            <Typography variant="subtitle2" sx={{ color: 'grey.600', ml: 2 }}>
              Total deposited:
            </Typography>

            <Typography variant="h6">
              {tableData
                .filter((item) => item.type === 'deposit')
                .map((item) => item.quantity)
                .reduce((total, current) => total + current, 0)}{' '}
              $
            </Typography>
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
              onUpdate={() => {
                pickerInput.onClose();
                updateTableData();
              }}
              onClose={pickerInput.onClose}
              isError={pickerInput.isError}
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
        <DepositAndWithdrawalTable tableData={tableData} />
      </Box>
    </Box>
  );
}

export default DepoistAndWithdrawal;
